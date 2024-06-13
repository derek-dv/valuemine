import { Stack, styled } from "@mui/material"


export const StyledWrapper = styled("div")({
 width:"90%",
 display:'flex',
 alinItems:"center",
 marginTop:'5rem',
 padding:"3rem",
})

export const LeftStack = styled(Stack)({
    flex:"1",
    alignItems:"center",
    justifyContent:"center",
})

export const RightStack = styled(Stack)({
    flex: "2",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
