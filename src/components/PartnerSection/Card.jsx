import React from "react";
import {
  StyledContainer,
  StyledHeader,
  SubHeading,
} from "../../GlobalStylings/Global";
import { StyledWrapper } from "./PartnerStyling";
import {
  Box,
  Card,
  Grid,
  Button,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import images from "../../../assets/images";
import theme from "../../theme/theme";

const StyledImage = styled("img")({
  width: "25px",
  objectFit: "contain",
});

const BulletPoint = styled("li")({
  color: "#FFFFFF",
  marginBottom: "8px",
  listStyle:"none",
  "&::before": {
    content: '""',
    display: "inline-block",
    width: "8px",
    height: "8px",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    marginRight: "8px",
  },
});

const BulletList = styled("ul")({
  paddingLeft: "16px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2px",
    marginBottom:"1rem"
   
  },
});
const MainText = styled("p")({fontSize:{sm:"14px", xxs:"10px"}, fontWeight: "500", display: "inline"}) ;
const SubText = styled("p")({fontSize:{sm:"14px", xxs:"10px"}, color: "primary.offWhite", display: "inline",fontWeight:"300"}) ;

const CardComponent = ({
  title,
  description,
  buttonText,
  Image,
  extraContent,
  minHeight
}) => {
  return (
    <Card
      sx={{
        position: "relative",
        color: "#FFFFFF",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        height: "350px",
        minHeight:{minHeight}
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(to bottom, rgba(24, 24, 38, 0.8), rgba(24, 24, 38, 0.8)), url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Stack
        spacing={5}
        sx={{
          position: "relative",
          height: "100%",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Stack alignItems="space-between">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: "12px",
                color: "#F6F6F9",
                fontWeight: "300",
              }}
            >
              VALUEMINE
            </Typography>
            <StyledImage src={images.arrowIcon} alt="images" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "24px" }}>
            {title}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "primary.offWhite",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
          {extraContent && (
            <BulletList>
              <BulletPoint>
                <MainText
                  variant="body2"
                  sx={{ fontWeight: "bold", display: "inline" }}
                >
                  Investor
                </MainText>
                <SubText
                    
                >
                  
                  - Register to invest in VMT’s Crowd Funding Scheme and become
                  one of VMT’s Private Equity and Debt Providers (Restricted!).
                </SubText>
              </BulletPoint>
              <BulletPoint>
                <MainText
                 
           
                >
                  Distribution Partner
                </MainText>
                <SubText
                >
                  {" "}
                  - Register as Agent or Agent Manager to onboard Valuemine ERP
                  subscribers.
                </SubText>
              </BulletPoint>
              <BulletPoint>
                <MainText
                >
                  Consultant
                </MainText>
                <SubText
                >
                  {" "}
                  - Register as Consultant to provide specialized services to
                  Valuemine ERP subscribers where and when needed.
                </SubText>
              </BulletPoint>
            </BulletList>
          )}
          <Button
            variant="contained"
            sx={{
              width: "150px",
              fontSize:"15px",
              backgroundColor: "#FFFFFF",
              color: "#212134",
              mb:{sm:"1rem", xxs:"5px"}
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardComponent;
