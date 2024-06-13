import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import images from '../../../assets/images';
import theme from '../../theme/theme';

const StyledContainer = styled("div")({
  width: "100vw",
  marginBottom: '4rem',
 
});

const SupportContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'center',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '500px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '90%',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    alignItems: 'center',
  },
 
});

const ContactMethod = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});

const ContactIcon = styled('img')({
  width: '50px',
  height: '50px',
  marginRight: '1rem',
});

const ContactText = styled(Typography)({
  fontSize: '16px',
  fontWeight: '400',
  color: theme.palette.primary.textGray,
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

const ContactNumber = styled(Typography)({
  fontSize: '20px',
  color: '#212134',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('xxs')]: {
    fontSize: '14px',
  },
});

const Chat = () => {
  return (
    <>
      <StyledContainer>
        <Box sx={{ width: '100%', maxWidth: '70%' }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              mt: 2,
              color: 'primary.textGray',
              fontWeight: '400',
              fontSize: { xxs: '16px', sm: '20px', },
              textAlign:  'left' ,
            }}
          >
            Reach out for support
          </Typography>
          <SupportContainer>
            <Stack spacing={4}>
              <ContactMethod>
                <ContactIcon src={images.whatsappIcon} alt="WhatsApp" />
                <Stack spacing={2}>
                  <ContactText>WhatsApp</ContactText>
                  <ContactNumber>+234 801 234 5678</ContactNumber>
                </Stack>
              </ContactMethod>
              <ContactMethod>
                <ContactIcon src={images.threeCXIcon} alt="3CX" />
                <Stack spacing={2}>
                  <ContactText>3CX</ContactText>
                  <ContactNumber>+234 801 234 5678</ContactNumber>
                </Stack>
              </ContactMethod>
            </Stack>
          </SupportContainer>
        </Box>
      </StyledContainer>
    </>
  );
};

export default Chat;
