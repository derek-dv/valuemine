import { Box, Stack, styled } from "@mui/material";
import theme from "../../theme/theme";

// Container for the hero section
export const StyledContainer = styled(Box)({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  padding: "1rem 2.5rem",
  alignItems: "center",
  backgroundColor: "#F6F6F9",
  "&::-webkit-scrollbar": {
    display: "none !important",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    padding: "2rem 1.2rem",
    marginTop: "0",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "2.5rem 0.8rem",
  },
});

// Left-side stack for text content
export const LeftStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "2.5rem",
  flex: "1",
  padding: "2rem 0",
  overflow: "hidden",
  "&::-webkit-scrollbar": {
    display: "none !important",
  },
  [theme.breakpoints.down("md")]: {
    gap: "2.5rem",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 0",
  },
});

// Container for text descriptions and headings
export const DescWrapper = styled(Stack)({
  width: "95%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.8rem",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    gap: "1rem",
    width: "90%",
    
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1.5rem",
    width: "100%",
    alignItems: "center",
  },
});

// Main heading styling
export const StyledHeading = styled("h2")({
  fontSize: "40px",
  fontWeight: "600",
  lineHeight: "52px",
  fontFamily: "'Open Sans', sans-serif",
  color: theme.palette.primary.textDark,
  [theme.breakpoints.down("md")]: {
    fontSize: "34px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    textAlign: "center",
    lineHeight: "1.3",

  },
});

// Subheading styling
export const SubHeading = styled("p")({
  fontSize: "16px",
  color: "#666687",
  fontWeight: "400",
  fontFamily: "'Open Sans', sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    textAlign: "center",
  },
});


export const Line = styled("p")({
  width: "100%",
  height: "1px",
  background: "#8E8EA9",
  marginTop: "3rem !important",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

});

// Button styling
export const StyledButton = styled("div")(({ theme }) => ({
  width: "190px",
  padding: "0 20px",
  height: "65px",
  marginTop: "3rem",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  borderRadius: "48px",
  background: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "55px",
    padding: "0 15px",
    marginTop: "10px",
    width: "160px",
    justifyContent: "space-between",
  },
}));

// Right-side stack for images
export const RightStack = styled(Box)({
  flex: "1",
  position: "relative",
  marginTop: "1rem",
  overflowY: "hidden",
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide image on mobile
  },
});

// Image styling
export const StyledImage = styled("img")({
  objectFit: "contain",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    transform: "scale(1)",
  },
});

// Styling for the text within the button
export const ButtonText = styled("p")({
  fontSize: "16px",
  color: theme.palette.primary.textWhite,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "12px",
  },
});

// Styling for the icon within the button
export const ButtonIcon = styled("img")({
  width: "33px",
  objectFit: "contain",
  [theme.breakpoints.down("xs")]: {
    width: "20px",
  },
});
