import { Box, Stack, styled } from "@mui/material";
import theme from "../../theme/theme";

export const StyledContainer = styled(Box)({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  marginTop: "10rem",
  marginBottom:"8rem",
  [theme.breakpoints.down("sm")]: {
    marginTop:"4rem",
    marginBottom:"1rem",

  }
});
export const StyledWrapper = styled(Stack)({
  width: "95%",
  gap:"24px",
  alignItems: "center !important",
  justifyContent: "center !important",
  [theme.breakpoints.down("sm")]: {
    width: "98%",

  }

});

export const ArticlesWrapper = styled(Box)({
  width: "90vw",
  marginTop: "4rem",
  [theme.breakpoints.down("sm")]: {
    width: "98vw",

  }
});

export const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "15px 15px 0 0",
  objectFit: "contain",

});
