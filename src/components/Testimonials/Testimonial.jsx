import React from 'react'
import { StyledContainer, StyledHeader, SubHeading } from '../../GlobalStylings/Global'
import { LeftStack, RightStack, StyledWrapper } from './TestimonialStyling'
import { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material'
import { data } from './dummyData';

function Testimonial() {

    const carouselRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(1);
  
    const handlePrevious = () => {
      carouselRef.current.slickPrev();
    };
    const handleNext = () => {
      carouselRef.current.slickNext();
    };

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentIndex(next),
      
      };


  return (
    // <StyledContainer>
    //     <StyledWrapper>
    //         <LeftStack spacing={2}>
    //             <StyledHeader>
    //             OUR TESTIMONIALS
    //             </StyledHeader>
    //             <SubHeading>What Our Clients Say</SubHeading>
    //             <Typography variant='p' sx={{fontSize:"20px", color:"#212134"}}>
    //             “The African SMEs’ preferred digital solutions provider.”
    //             </Typography>
    //         </LeftStack>
    //         <RightStack>
   
    <Box sx={{display:"flex", flexDirection:"column"}}>
            <Slider {...settings} ref={carouselRef}>
            <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
   
            </Slider>
            </Box>
          
    //         </RightStack>
    //     </StyledWrapper>
    // </StyledContainer>
  )
}

export default Testimonial