import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  SubHeading,
} from "../../GlobalStylings/Global";
import { Span, StyledText, StyledWrapper } from "./ProductReviewStyling";
import { Box, Button, Grid } from "@mui/material";
import { ProductData } from "./dummyData";
import GridItem from "./GridItem";

function ProductReview() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledHeader>OUR PRODUCTS</StyledHeader>
        <SubHeading variant="p">
          “There’s a solution in <Span>Valuemine</Span> for each of your
          business and administrative processes”
        </SubHeading>
        <StyledText>
          We are committed to ensuring full coverage of every SME’s workflow
          needs. Consequently, our digital solutions cover a wide spectrum of
          critical financial and non-financial workflows
        </StyledText>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            aligItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            sx={{ width: "90%", justifyContent: "center", gap: "2rem" }}
          >
            {ProductData.map(({ title, subtitle, image }) => (
              <GridItem title={title} subtitle={subtitle} Icon={image} />
            ))}
          </Grid>
        </Box>
        <StyledLink to="/products" sx={{ marginTop: "3rem !important", }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#DDEDFD",
              width: {sm:"180px",xxs:"160px"},
              height: "50px",
              color: "primary.main",
              outine:"none",
             fontSize: {sm:"16px",xxs:"14px"},
              border: "1px solid #7CBAF8",
            }}
          >
            See all products
          </Button>
        </StyledLink>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default ProductReview;
