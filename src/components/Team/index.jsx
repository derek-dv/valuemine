import React from 'react'
import { StyledContainer, StyledHeader } from '../../GlobalStylings/Global'
import { Stack, Typography } from '@mui/material'
import TeamSlider from './TeamSlider'

function Team() {
  return (
    <StyledContainer>
        <Stack spacing={2} sx={{width:"85%",}}>
        <StyledHeader>
          Our Team
          </StyledHeader>
        <Typography variant="h4" align="center"sx={{ marginBottom:"2rem !important", fontSize:'26px' }} fontWeight="500">
          MANAGEMENT
        </Typography>
        <TeamSlider />
        </Stack>
    </StyledContainer>
  )
}

export default Team