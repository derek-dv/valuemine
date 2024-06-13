import { Button, Stack, styled } from "@mui/material";
import theme from "../../theme/theme";

export const StyledWrapper = styled("div")({
  width: "90%",
  background: theme.palette.primary.main,
  padding: "5rem 2rem",
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8rem",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "2rem 1rem",
    marginTop: "4rem",
  }
});

export const LeftStack = styled(Stack)({
  flex: "1",
  [theme.breakpoints.down("sm")]: {
    width: "100%", 
    alignItems: "center", 
    textAlign: "center", 
  }
});

export const RightStack = styled(Stack)({
  flex: "1.5",
  [theme.breakpoints.down("sm")]: {
    flex: "1",
  }
});

export const StyledTitle = styled("p")({
  fontSize: "33px",
  color: 'white',
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  }
});

export const SubTitle = styled("p")({
  fontSize: "15px",
  color: 'white',
  fontWeight: "300",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  }
});

export const StyledButton = styled(Button)({
  background: "white",
  color: "#212134",
  border: "1px solid #C0C0CF",
  width: "170px",
  height: "50px",
  [theme.breakpoints.down("sm")]: {
    width: "140px",
    height: "45px",
  }
});

export const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "200px",
    marginTop:"2rem"
  },
});
