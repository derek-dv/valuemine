import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
 
  RightStack,
  StyledContainer,
  StyledImage,

  StyledButton,
  SubHeading,
  LeftStack,

  DescWrapper,
  StyledHeading,
  Line,
  ButtonText,
  ButtonIcon,
} from "../Hero/HeroStyling";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import HeroImage from "../../../assets/images/hero-image.png";


import Icon from '../../../assets/images/button-icon.png'
import { StyledLink } from "../Header/HeaderStyling";
function HeroSection() {
  const [ref, inView] = useInView();

  return (
    <>
      <Helmet>
        <title>Value Mine Technologies Ltd (VMT)</title>
        <meta
          name="description"
          content="Value Mine Technologies Ltd (VMT) is a Digital Solutions Provider with special focus on the Small and Medium Entities (SMEs) in Africa."
        />
        <meta
          name="keywords"
          content="Value Mine Technologies, Value Mine, Digital Solutions Provider, "
        />
      </Helmet>
      <StyledContainer>
        <LeftStack>
          <DescWrapper >
            <StyledHeading>
              Doing your business at your convenience anytime, anywhere, and on
              any available access device
            </StyledHeading>
            <SubHeading>
              Value Mine Technologies Ltd (VMT) is a Digital Solutions Provider
              with special focus on the Small and Medium Entities (SMEs) in
              Africa.
            </SubHeading>
            <Line />
            <StyledLink to="/contact">
            <StyledButton 
            
            > 
            <ButtonText>Get Started</ButtonText>
            <ButtonIcon src={Icon}/>
            </StyledButton>
            </StyledLink>
          </DescWrapper>

        </LeftStack>

        <RightStack>
         
         
         
          <StyledImage
            src={HeroImage}
            alt="img"
            sx={{ transform: { md: "scale(0.9)", xxs: "scale(0.8)" } }}
          />
          {/* </MotionInView> */}
        </RightStack>

      </StyledContainer>
    </>
  );
}

export default HeroSection;
