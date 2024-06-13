import React from 'react'
import { StyledContainer } from '../../GlobalStylings/Global'
import { LeftStack, RightStack, StyledButton, StyledImage, StyledTitle, StyledWrapper, SubTitle } from './Styling'
import { Typography } from '@mui/material'

import Image from '../../../assets/images/stack-image.png'
function MarketResearch() {
  return (
    <StyledContainer>
          <StyledWrapper>
            <LeftStack spacing={3}>
            <StyledTitle >
                Market Research Now Live<br />
                 Participate Today
                </StyledTitle>
               <SubTitle>Provide personal insight by participating in the ongoing market research</SubTitle>
               <StyledButton >Get Started</StyledButton>
            </LeftStack>
            <RightStack>
                <StyledImage src={Image} />
            </RightStack>
          </StyledWrapper>
    </StyledContainer>
  )
}

export default MarketResearch