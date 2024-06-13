import { Container, Stack, styled } from "@mui/material";
import images from "../../../assets/images";
import { StyledContainer, StyledHeader } from "../../GlobalStylings/Global";


const Image = styled("img")({
  width:"100%",
  objectFit:"contain",
  transform:"scale(0.8)"
})
const Structure = () => {
  return (
    <StyledContainer
      sx={{
        my: 10,
        width:"100%",
        backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #DDEDFD 100%)",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        padding:"0 !important"

      }}
    >
      <StyledHeader>Our Structure</StyledHeader>
    <Image src={images.chart} alt="chart"  />
    </StyledContainer>
  );
};

export default Structure;
