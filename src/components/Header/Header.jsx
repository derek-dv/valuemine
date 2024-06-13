import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import {
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledLink,
  StyledText,
  TopBar,
} from "./HeaderStyling";
import Logo from "../../../assets/images/logo.svg";
import { Stack } from "@mui/material";

import { Cancel, Menu } from "@mui/icons-material";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isShow, setisShow] = useState(false);
  const handleToggleSideNav = () => {
    setisShow(!isShow);
   
  };

  return (
    <>
      <Sidebar open={isShow} onClose={handleToggleSideNav} />
      <StyledContainer>
        {/* you can change this later to an Appbar if any change is required to be made */}
        <Box>
          <TopBar>
            <StyledLink
              to="/"
              sx={{ display: "flex", flex: { sm: "0.4", xxs: "1.5" } }}
              alignItems="center"
              justifyContent="flex-start"
              background="red"
            >
              <StyledImage src={Logo} alt="image" />
            </StyledLink>
            <Stack
              direction="row"
              alignItems="center"
              flex={1}
              justifyContent="center"
              sx={{ display: { md: "flex", xxs: "none" } }}
            >
              <Stack
                direction="row"
                alignItems="center"
                flex={2}
                spacing={3}
                justifyContent="center"
              >
                <StyledLink to="/">
                  <StyledText variant="p">Home</StyledText>
                </StyledLink>

                <StyledLink to="/about">
                  <StyledText variant="p">About Us</StyledText>
                </StyledLink>

                <StyledLink to="/products">
                  <StyledText variant="p">Products</StyledText>
                </StyledLink>

                <StyledLink to="/blog">
                  <StyledText variant="p">News & Blog</StyledText>
                </StyledLink>

                <StyledLink to="/support">
                  <StyledText variant="p">Support</StyledText>
                </StyledLink>

                <StyledLink to="/contact">
                  <StyledText variant="p">Contact Us</StyledText>
                </StyledLink>
              </Stack>
            </Stack>

            <Stack
              flex={0.5}
              sx={{ display: { md: "flex", xxs: "none" } }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <StyledLink to="/login">
                <StyledButton variant="contained">Get Started</StyledButton>
              </StyledLink>
            </Stack>
            <Stack
              onClick={handleToggleSideNav}
              alignItems="flex-end"
              sx={{
                display: { md: "none", xxs: "flex" },
                border: "1px solid #C0C0CF",
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                transition: "0.5s ease",
                marginRight: "20px",
              }}
            >
              {isShow ? (
                <Cancel sx={{ color: "#212134", fontSize: "16px" }} />
              ) : (
                <Menu sx={{ color: "#212134", fontSize: "16px" }} />
              )}
            </Stack>
          </TopBar>
        </Box>
      </StyledContainer>
    </>
  );
}

export default Header;
