import React from 'react'
import { GridWrapper, StyledImage } from './ProductReviewStyling'
import { Grid, Stack, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

function GridItem({title, subtitle,Icon}) {
  return (
    <Grid item md={3} xs={12} sx={{marginTop:'3rem'}}>
    <GridWrapper spacing={3} > 
                  <StyledImage src={Icon} alt="icon" />
                   <Typography variant="p" sx={{color:'#181826',
                    fontSize:{sm:"22px",xxs:"18px"},fontWeight:"600",}}>
                     {title}
                   </Typography>
                   <Typography variant="p" sx={{color:"primary.textGray", paddingBottom:'2rem',
                    fontSize:{sm:"16px",xxs:"14px"}}}>
                     {subtitle}
                   </Typography>
                   <Stack alignItems="flex-end">
                   <ArrowForward sx={{fontSize:{sm:"23px",xxs:"28px"}, color:"#212134"}}/>
                   </Stack>
          </GridWrapper>
          </Grid>
  )
}

export default GridItem