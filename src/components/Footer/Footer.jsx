import React from "react";

import {
  StyledHeading,
  StyledLink,
  StyledText,
  StyledWrapper,
  StyledBottom,
  StyledDivider,
  StyledContainer,
  StyledIcon,
  StyledLogo,
  StyledAnchor,
  StyledButton,
  OtherLinks,
} from "./FooterStyling";
import Logo from '../../../assets/images/logo.svg'
import { Typography, Grid, Stack, Divider, Box } from "@mui/material";
import { Company, Products, Resources } from "./dummyData";

import {

  ArrowForward,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,

} from "@mui/icons-material";
export default function Footer() {
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              gap: { xxs: "1.5rem", md: "0px" },
            }}
          >
            <Grid item sm={12} md={4.5} xxs={12}>
              <Box sx={{ width: { md: "100%", xs: "70%" } }}>
              <StyledLogo src={Logo} alt="logo"/>
                <Stack direction="column" marginTop="1.5rem" spacing={3}>
                <Stack direction="row" spacing={2}>
                    <StyledAnchor href=""  target="_blank"><Facebook  sx={StyledIcon} /></StyledAnchor>
                    <StyledAnchor href="" target="_blank"><Twitter sx={StyledIcon} /></StyledAnchor>
                    <StyledAnchor href=""  target="_blank"><LinkedIn sx={StyledIcon} /></StyledAnchor>
                    <StyledAnchor href=""  target="_blank"><Instagram sx={StyledIcon} /></StyledAnchor>
                  </Stack>
                  <StyledButton endIcon={<ArrowForward sx={{fontSize:"20px", color:'white'}} />}>
                  Become a Subscriber
                  </StyledButton>
                </Stack>
              </Box>
            </Grid>
            <Grid item sm={12} md={2.5} xxs={12}>
              <Stack
                spacing={3}
                sx={{ marginLeft: { md: "3rem" }, sm: "1rem", xxs: "0px" }}
              >
                <StyledHeading>Products</StyledHeading>
                <Stack spacing={1.5}>
                  {Products.map((item) => (
                    <StyledLink to={item.path} key={item.title}>
                      <StyledText>{item.title}</StyledText>
                    </StyledLink>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item sm={12} md={2.5} xxs={12}>
              <Stack spacing={3}>
                <StyledHeading>Resources</StyledHeading>
                <Stack spacing={1}>
                  {Resources.map((item) => (
                    <StyledLink to={item.path} key={item.title}>
                      <StyledText>{item.title}</StyledText>
                    </StyledLink>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item sm={12} md={2.5} xxs={12}>
              <Stack spacing={3}>
                <StyledHeading>Company</StyledHeading>
                <Stack spacing={1}>
                  {Company.map((item) => (
                    <StyledLink to={item.path} key={item.title}>
                      <StyledText>{item.title}</StyledText>
                    </StyledLink>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </StyledWrapper>
        <StyledDivider></StyledDivider>
        <StyledBottom>
          <Stack
            spacing={0.8}
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
       
          ><Stack>
            <Typography sx={{ color: "#ffffff !important",flex:"1.5",marginTop:"1rem" }}>
            © Copyright 2023. All rights reserved. Value Mine Technologies Ltd RC 1242093
            </Typography>
            </Stack>
            <Box  sx={{flexDirection:"row",display:'flex',alignItems:"center",
             justifyContent:"flex-end", flex:'0.6',gap:"10px", }}>
              <OtherLinks to="/policy" >
              Privacy Policy
              </OtherLinks>
              <OtherLinks to="/terms">
              Terms of Service
              </OtherLinks>
              <OtherLinks to="/terms">
              Security
              </OtherLinks>

            </Box>
          </Stack>
        </StyledBottom>
      </StyledContainer>
    </>
  );
}