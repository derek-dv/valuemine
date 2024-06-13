import React from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../components/Header/Header';
import PageHeader from '../components/PageHeader';
import images from '../../assets/images';
import { StyledContainer } from '../GlobalStylings/Global';
import Footer from '../components/Footer/Footer';

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: '1.5rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0B6ED0',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#005BB5',
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: '0.5rem',
  '&::after': {
    content: '"*"',
    color: theme.palette.error.main,
    marginLeft: '4px',
  },
}));

const CreatePost = () => {
  return (
    <>
      <Header />
      <StyledContainer sx={{ flexDirection: 'column' }}>
        <PageHeader
          title="Support"
          currentPage="Create Post"
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Support', path: '/support' },
            { label: 'Create Post', path: '/support/create-post' },
          ]}
        />
        <Box sx={{ width: '100%', maxWidth: '80%', mt: 4 }}>
          <Typography variant="h4" fontWeight="600" sx={{ mb: 3 }}>
            Create Post
          </Typography>
          <form>
            <Box sx={{ mb:2 }}>
              <Label>Title</Label>
              <StyledTextField
                variant="outlined"
                required
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ mb:2 }}>
              <Label>Content</Label>
              <StyledTextField
                variant="outlined"
                required
                multiline
                rows={15}
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ mb:2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Hashtags
              </Typography>
              <StyledTextField
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <StyledButton variant="contained">Upload Post</StyledButton>
            </Box>
          </form>
        </Box>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default CreatePost;
