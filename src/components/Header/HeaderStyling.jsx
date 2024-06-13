import { Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme/theme";
export const StyledContainer = styled(Box)({
  width: "100vw",


  });
  
  
  
  export const TopBar = styled(Box)({
    width: "100%",
    height: "95px",
    display: "flex",
    alignItems: "center",
    overflowY: "hidden",
    justifyContent: "space-between",
    padding: '2rem',
    marginLeft: "1rem",
    position: 'relative', // Add this for the blue line
  
    
  
    [theme.breakpoints.down("sm")]: {
      padding: '2rem 0',
      height: "85px",
      marginBottom: "12px",
      margin: "0 5px ",
     
     
    }
    })


export const StyledText = styled('p')({
  color: theme.palette.primary.textDark,
  fontSize: "16px",
  fontWeight:"500",
  cursor: "pointer",
  '&: hover': {
    color: theme.palette.secondary.main,
    transition:"0.2s ease"
  }
})
  
export const StyledImage = styled('img')({
  width: "150px",
  objectFit: "contain",
  
  [theme.breakpoints.down("sm")]: {
    transform: 'scale(0.9)', 
    width: "130px", 

  }
});


export const StyledButton = styled(Button)({
  width: "150px",
  height: "50px",
  padding:'0.7rem 0',
  color: "white",
  borderRadius: "26px",
  fontSize: "15px",
  fontWeight:"bold", 
  flex: "1",
 
})

export const StyledLink = styled(Link)({
  textDecoration:"none"
})

export const MenuStyling = {
  fontSize: "16px",
  padding:"5px 10px",

}

export const DropText = styled('p')({
  fontSize: "12px",
  padding: " 3px 10px",
  color: theme.palette.primary.textDark,
  fontWeight: "400",
  letterSpacing: "0.5px",
  textTransform:"uppercase"
})

export const Sup = styled('sup')({
  color: "orange",
  fontSize:"9px",
})