import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Stack, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Custom styling for dots
const CustomDots = styled('ul')({
  display: 'flex !important',
  justifyContent: 'center',
  padding: 0,
  listStyle: 'none',
  margin: '20px 0 0 0',

  '& li': {
    width: 33,
    height: 6,
    borderRadius: '5px',
    margin: '0 8px',
    backgroundColor: '#E0E0E0',
    cursor: 'pointer',

    '&.slick-active': {
      backgroundColor: '#0B6ED0',
    },
  },
});

const Image = styled("img")({
    width:'100%',
    objectFit:"cover"
})

const teamMembers = [
  {
    name: "John Doe",
    position: "Co Founder",
    imgSrc: "https://images.pexels.com/photos/20497382/pexels-photo-20497382/free-photo-of-portrait-of-brunette-man-in-suit.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Jane Williams",
    position: "Manager",
    imgSrc: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "John Doe",
    position: "Co Founder",
    imgSrc: "https://images.pexels.com/photos/20497382/pexels-photo-20497382/free-photo-of-portrait-of-brunette-man-in-suit.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Jane Williams",
    position: "Manager",
    imgSrc: "https://images.pexels.com/photos/6953851/pexels-photo-6953851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "John Doe",
    position: "Co Founder",
    imgSrc: "https://images.pexels.com/photos/20497382/pexels-photo-20497382/free-photo-of-portrait-of-brunette-man-in-suit.jpeg?auto=compress&cs=tinysrgb&w=600",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Jane Williams",
    position: "Manager",
    imgSrc: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=6001",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
 
];

const TeamSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMedium ? 2 : 3,
    slidesToScroll: isMedium ? 2 : 3,
    customPaging: i => (
      <div style={{
        width: 33,
        height: 6,
        borderRadius: '5px',
        margin: '0 10px',
        backgroundColor: '#E0E0E0',
        cursor: 'pointer'
      }}>
      </div>
    ),
    appendDots: dots => (
      <CustomDots>{dots}</CustomDots>
    ),
  };

  return (
    <Box sx={{ width: '100%', padding: {sm:'20px',xxs:"2px" }}}>
      {isMobile ? (
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xxs={12} key={index}>
              <Box sx={{ position: 'relative', borderRadius: "15px" }}>
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  sx={{ width: '100%', height: '400px', mb: 2, borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    color: 'white',
                    p: 3,
                    pb: 5,
                  }}
                >
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle2">{member.position}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <a href={member.social.facebook} style={{ color: 'white' }}><FacebookIcon /></a>
                    <a href={member.social.twitter} style={{ color: 'white' }}><TwitterIcon /></a>
                    <a href={member.social.linkedin} style={{ color: 'white' }}><LinkedInIcon /></a>
                    <a href={member.social.instagram} style={{ color: 'white' }}><InstagramIcon /></a>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <Box key={index} sx={{ padding: '10px', position: 'relative', borderRadius: "15px" }}>
              <Image
                src={member.imgSrc}
                alt={member.name}
                sx={{ width: '100%', height: '400px', mb: 2, borderRadius: "15px" }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  color: 'white',
                  p: 3,
                  pb: 5,
                }}
              >
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2">{member.position}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <a href={member.social.facebook} style={{ color: 'white' }}><FacebookIcon /></a>
                  <a href={member.social.twitter} style={{ color: 'white' }}><TwitterIcon /></a>
                  <a href={member.social.linkedin} style={{ color: 'white' }}><LinkedInIcon /></a>
                  <a href={member.social.instagram} style={{ color: 'white' }}><InstagramIcon /></a>
                </Stack>
              </Box>
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default TeamSlider;
