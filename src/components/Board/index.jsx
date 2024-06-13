import React from 'react'
import { StyledContainer, StyledHeader } from '../../GlobalStylings/Global'
import { Stack, Typography } from '@mui/material'
import BoardSlider from './BoardSlider'

function Board() {
  return (
    <StyledContainer sx={{marginTop:"2rem"}}>
        <Stack spacing={2} sx={{width:"85%",}}>
       
        <Typography variant="h4" align="center"sx={{ marginBottom:"2rem !important", fontSize:'26px' }} fontWeight="500">
         BOARD
        </Typography>
        <BoardSlider />
        </Stack>
    </StyledContainer>
  )
}

export default Board