import React from 'react'
import { styled } from '@mui/material';


const LeftIllustrationStyle = styled("img")(() => ({
    left: 0,
    bottom: 0,
    zIndex: 8,
    margin: "auto",
    position: "absolute",
  }));
  const RightIllustrationStyle = styled("img")(() => ({
    right: 0,
    bottom: 0,
    zIndex: 8,
    margin: "auto",
    position: "absolute",
    top: 0,
    height: "100%",
  }));

function BlueCard() {
  return (
    <>
    <Box
    sx={{
      bgcolor: "#0B6ED0",
      p: 5,
      borderRadius: 2,
      my: 5,
      pl: 8,
      pr: 8,
      mt: 5,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <LeftIllustrationStyle
      alt="hero"
      src="/assets/images/left-illustration.png"
    />
    <RightIllustrationStyle
      alt="hero"
      src="/assets/images/right-illustration.png"
    />
    <Box
      sx={{
        textAlign: "center",
        width: "80%",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Box
        sx={{
          mb: 3,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "#fff", textAlign: "center", fontSize: "24px" }}
        >
          “ We provide cloud-based software and storage services (SaaS),
          covering a wide spectrum of critical financial and
          non-financial workflows (solutions), through an integrated
          enterprise resource planning system (Valuemine ERP). ”
        </Typography>
      </Box>

      <Box>
        <Button
          size="large"
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: 30,
            bgcolor: "#fff",
            color: "primary.textDark",
          }}
        >
          Get Started
        </Button>
      </Box>
      </Box>
      </Box>
      </>
);
}


export default BlueCard