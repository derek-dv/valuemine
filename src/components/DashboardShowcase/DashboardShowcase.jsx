import { styled } from '@mui/material'
import React from 'react'
import Desktop from '../../../assets/images/rectangle.png'
import theme from '../../theme/theme';



const StyledContainer = styled('div')({
    display: 'flex',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding:"2rem 0",
    height: '100vh',
    // backgroundImage: 'linear-gradient(to bottom, #F6F6F9 0%, #F6F6F9 100%)',
    [theme.breakpoints.down("sm")]: {
      height: '30vh',
      padding:"0",
     
    },
  });

const StyledWrapper = styled("div")({
    width:'75%',
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("sm")]: {
      height: '40vh',
      width:'100%',
     
    },
})
const StyledImage = styled("img")({
   objectFit:"contain",
   width:"100%"

})

function DashboardShowcase() {
  return (
    <StyledContainer>
        <StyledWrapper>
           <StyledImage src={Desktop} alt='IMG' />
        </StyledWrapper>
    </StyledContainer>
  )
}

export default DashboardShowcase