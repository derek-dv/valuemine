import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme/theme";

export const StyledContainer = styled("div")({
    width:"100vw",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
   
})

export const StyledLink = styled(Link)({
    textDecoration:'none'
})


export const StyledHeader = styled("p")({
    fontSize:"17px",
    fontWeight:"500",
    color:theme.palette.primary.textGray,
    fontFamily:"'Open Sans' sans-serif",
    textAlign:'center',
    textTransform:"uppercase",
    [theme.breakpoints.down("sm")]: {
        fontSize:"15px",
        marginTop:'2rem'
      },
  })

  export const SubHeading = styled("p")({
    fontSize:"45px",
    color:theme.palette.primary.textDark,
    fontWeight:"500",
    textAlign:'center',
    [theme.breakpoints.down("sm")]: {
       fontSize:"22px",
       fontWeight:"600",
        
      
     },
})
  

export const StyledImage = styled("img")({
    width:"100%",
    objeectFit:"contain"
})