import { Box } from "@mui/material"

const StyledImage = ({width, src,objectFit}) => {

    return (
   <>
   <Box component="img" src={src} sx={{width:{width}, objectFit:{objectFit}}} />
   </>
    )
  }
  
  export default StyledImage