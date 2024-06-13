import { styled, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme/theme";

export const StyledContainer = styled('div')({
  width: "100vw",
  padding:  " 0 2rem 0 0.1rem",
  background:'#181826',

  [theme.breakpoints.down("sm")]: {
    padding:  " 0 2rem 0 0.5rem",
   
  },
  

})
export const StyledWrapper = styled(Box)({
  width: "100%",
  marginTop: "6.5rem",
  marginLeft: "4rem",
  marginBottom: "3rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "1rem",
    marginTop: "4rem",
  },
});

export const StyledLogo = styled("img")({
  width: "180px",
  objectFit: "contain",
  backgroundColor:"white",
  
});
export const StyledImage = styled("img")({
  width: "190px",
  objectFit: "contain",
  
});

export const StyledHeading = styled(Typography)({
  fontSize: "23px",
  fontWeight: "500",
  color: "#FFFFFF",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.primary.textWhite,
  fontSize: "15px",
  fontWeight: "300",
  fontFamily:"Open Sans, Sans-serif"
  
});
export const StyledText = styled(Typography)({
  fontSize: "16px",
  // letterSpacing:"1px",
  color: theme.palette.primary.textWhite,
  fontWeight: "300",
  fontFamily:"Open Sans, Sans-serif"
});

export const StyledBottom = styled(Box)({
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const StyledDivider = styled("div")({
  width: "95%",
  height: "1px",
  backgroundColor: "#444444",
  margin: '0 2rem',
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: '0',
  },
});

export const StyledIcon = {
  fontSize: "30px",
  color: "white",
  '& hover': {
    transform:"scale(1.2)"
  }
}


export const StyledAnchor = styled("a")({
 textDecoration:"none",

})

export const StyledButton = styled(Button)({
   width:"200px",
   height:"50px",
   border:"1px solid #C0C0CF",
   borderRadius:"10px",
   fontSize:"14px",
   color:'white',
   padding:"0 10px",
})

export const OtherLinks= styled(Link)({
  textDecoration: "none",
  color: theme.palette.primary.textWhite,
  fontSize: "14px",
  fontWeight: "600",
  fontFamily:"Open Sans, Sans-serif"
  
});