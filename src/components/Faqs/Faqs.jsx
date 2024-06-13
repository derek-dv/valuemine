import React from "react";
import {  StyledLink } from "../../GlobalStylings/Global";
import {
    ExtraText,
  HeaderText,
  MainText,
  Span,
  StyledWrapper,
  TopText,
  Wrapper,
  StyledContainer,
  StyledStack,
} from "../SupportTabs/Styling";
import { Button, Stack, Typography } from "@mui/material";

function Faqs() {
  return (
  <StyledContainer >
      <StyledWrapper>
        <StyledStack spacing={1}>
        <TopText>
          Here are <Span>answers</Span> to some <Span>questions</Span> you might
          have
        </TopText>
        <Wrapper spacing={2} >
          <HeaderText>Lorem Ipsum dolor sit amet?</HeaderText>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque purus semper eget duis at. Vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in. Pellentesque massa placerat duis
            ultricies. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Faucibus ornare suspendisse sed nisi lacus. Orci a scelerisque purus
            semper eget. Pretium quam vulputate dignissim suspendisse in. Sed
            faucibus turpis in eu. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Neque aliquam vestibulum morbi blandit
            cursus risus at ultrices. Quisque sagittis purus sit amet volutpat.
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Tincidunt
            lobortis feugiat vivamus at augue. Volutpat ac tincidunt vitae
            semper quis lectus. Tellus in metus vulputate eu scelerisque felis
            imperdiet.
          </MainText>
        </Wrapper>
        <Wrapper spacing={2}>
          <HeaderText>Lorem Ipsum dolor sit amet?</HeaderText>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque purus semper eget duis at. Vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in. Pellentesque massa placerat duis
            ultricies. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Faucibus ornare suspendisse sed nisi lacus. Orci a scelerisque purus
            semper eget. Pretium quam vulputate dignissim suspendisse in. Sed
            faucibus turpis in eu. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Neque aliquam vestibulum morbi blandit
            cursus risus at ultrices. Quisque sagittis purus sit amet volutpat.
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Tincidunt
            lobortis feugiat vivamus at augue. Volutpat ac tincidunt vitae
            semper quis lectus. Tellus in metus vulputate eu scelerisque felis
            imperdiet.
          </MainText>
        </Wrapper>
        <Wrapper spacing={2}>
          <HeaderText>Lorem Ipsum dolor sit amet?</HeaderText>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque purus semper eget duis at. Vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in. Pellentesque massa placerat duis
            ultricies. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Faucibus ornare suspendisse sed nisi lacus. Orci a scelerisque purus
            semper eget. Pretium quam vulputate dignissim suspendisse in. Sed
            faucibus turpis in eu. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Neque aliquam vestibulum morbi blandit
            cursus risus at ultrices. Quisque sagittis purus sit amet volutpat.
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Tincidunt
            lobortis feugiat vivamus at augue. Volutpat ac tincidunt vitae
            semper quis lectus. Tellus in metus vulputate eu scelerisque felis
            imperdiet.
          </MainText>
        </Wrapper>
        <Wrapper spacing={2}>
          <HeaderText>Lorem Ipsum dolor sit amet?</HeaderText>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque purus semper eget duis at. Vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in. Pellentesque massa placerat duis
            ultricies. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Faucibus ornare suspendisse sed nisi lacus. Orci a scelerisque purus
            semper eget. Pretium quam vulputate dignissim suspendisse in. Sed
            faucibus turpis in eu. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Neque aliquam vestibulum morbi blandit
            cursus risus at ultrices. Quisque sagittis purus sit amet volutpat.
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Tincidunt
            lobortis feugiat vivamus at augue. Volutpat ac tincidunt vitae
            semper quis lectus. Tellus in metus vulputate eu scelerisque felis
            imperdiet.
          </MainText>
        </Wrapper>
        <ExtraText spacing={1}>
      <Typography
        variant="p"
        sx={{ fontSize: "16px", color: "primary.textDark",fontWeight:"500" }}
      >
        Didn’t get an answer?
      </Typography>
      <Typography
        variant="p"
        sx={{ fontSize: "14px", color: "primary.textGray",textAlign:"center" }}
      >
        Reach out and we will answer you in less than 2 hours!
      </Typography>
      <StyledLink>
      <Typography sx={{color:"primary.main", fontSize:"14px"}}>Leave us a Message  →</Typography>
      </StyledLink>
      </ExtraText>
      </StyledStack>
      </StyledWrapper>
     
    </StyledContainer>
  );
}

export default Faqs;
