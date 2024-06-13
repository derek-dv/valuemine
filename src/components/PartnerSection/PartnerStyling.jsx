import { Stack, styled } from "@mui/material";
import theme from "../../theme/theme";


export const StyledWrapper = styled(Stack)({
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    gap:"24px",
    [theme.breakpoints.down("sm")]: {
        width:"97%",
        gap:"10px",
    
      },
})

