import { Stack, styled } from "@mui/material";
import theme from "../../theme/theme";


export const StyledContainer = styled("div")({
  width:"100vw",
  [theme.breakpoints.down("sm")]: {
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
  
    marginLeft:"-1.5rem"
    

  }
})
export const StyledWrapper = styled("div")({
  width:"95%",
  display:"flex",
  flexDirection:"column",
  gap:"10px",
  display:"flex",
  alignItems:"flex-start",
  justifyContent:'center',
  marginTop:"2rem",
  [theme.breakpoints.down("sm")]: {
      width:"100%",
     
     alignItems:"center",
  //    marginLeft:'-3rem'
      
  
    }
  
})
export const StyledStack = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent:'center'
  },
});

export const PostsWrapper = styled(Stack)({
  width: "90%",
  marginTop: "2rem !important",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
   
  },
});

export const PostWrapper = styled(Stack)({
  width: "100%",
  border: "1.5px solid #C0C0CF",
  borderRadius: "15px",
  padding: "30px 2rem",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    padding: "25px 1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 1rem",
  },
  [theme.breakpoints.down("xxs")]: {
    padding: "15px 0.5rem",
    width:'70%',

  },
});

export const PostTags = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

export const Tag = styled("p")({
  fontWeight: "500",
  color: theme.palette.primary.textDark,
});

export const PostFooter = styled(Stack)({
  alignItems: "center",
  justifyContent: "space-between",
});
