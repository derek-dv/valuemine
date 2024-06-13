import { Stack, styled } from "@mui/material";
import theme from "../../theme/theme";


export const StyledWrapper = styled(Stack)({
    width:"90%",
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
    padding:'7rem 0',
     gap:"24px",
    [theme.breakpoints.down("sm")]: {
       padding:'3rem 0',
       gap:"15px",
     
    },
 
})

export const Span = styled("span")({
  color:theme.palette.primary.main,
  
})

export const StyledText = styled("p")({
  fontSize:"22px",
  color:theme.palette.primary.textDark,
  textAlign:"center",
  [theme.breakpoints.down("sm")]: {
    fontSize:"15px"
  
 },
})

export const GridWrapper = styled(Stack)({
   alignItems:"center",
   textAlign:"center"
})
export const StyledImage = styled("img")({
   objectFit:'contain',
  width:"49px",
  [theme.breakpoints.down("sm")]: {
    width:"60px"
  
 },
})