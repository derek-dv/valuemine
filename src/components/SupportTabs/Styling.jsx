import { Stack, styled } from "@mui/material";
import theme from "../../theme/theme";

export const StyledContainer = styled("div")({
    width:"100vw",
 


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
export const StyledStack= styled(Stack)({
    width:"90%",
    marginLeft:'-2rem',
    [theme.breakpoints.down("sm")]: {

       alignItems:"center",
 
        
    
      }
    
})




export const HeaderText = styled("p")({
    fontSize:"26px",
    color:"#181826",
    fontWeight:"600",
    [theme.breakpoints.down("sm")]: {
        width:"100%",
        fontSize:"20px",
        
    
      }
})

export const MainText = styled("p")({
color:"#666687",
fontSize:"17px",
[theme.breakpoints.down("sm")]: {
    fontSize:"14px",
    

  }

})
export const TopText = styled("p")({
    color:"#666687",
    fontSize:"16px",
    
    })

export const Span = styled("span")({
   color:' #212134',
   fontWeight:"600"
})

export const Wrapper = styled(Stack)({
    display:"flex",
    flexDirection:"column",
    marginTop:'2rem !important',
    justifyContent:"center",
})


export const ExtraText = styled(Stack)({
   width:"100%",
   alignItems:"center",
   marginTop:'3rem !important',
   display:"flex",
   flexDirection:"column",
    
 })
 