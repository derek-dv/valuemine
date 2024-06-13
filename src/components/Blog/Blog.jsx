import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledImage, StyledWrapper } from "./BlogStyling";
import { Box, Button, Stack, Typography, styled } from "@mui/material";

const ImageContainer = styled(Box)({
  borderRadius: "15px",
  width: "100%",
  overflow: "none",
});

function Blog({ id, image, title, date, width }) {
  const navigate = useNavigate();

  const handleBlogClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <StyledWrapper
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleBlogClick}
    >
      <Stack
        spacing={2}
        sx={{
          width: "98%",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 8px rgba(196, 196, 196, 0.25)",
          borderRadius: "15px ",
          overflow: "none",
          border: "1px solid #C0C0CF ",
          borderTop: "none",
        }}
        pb={4}
      >
        <ImageContainer>
          <StyledImage src={image} alt="articles" />
        </ImageContainer>
        <Stack spacing={1} pl={2} sx={{ flex: "1", justifyContent: "center" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "12px",
              color: "primary.textGray",
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="p"
            fontWeight="500"
            sx={{ fontSize: "20px" }}
            color="#181826"
          >
            {title}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0.2}
          alignItems="flex-end"
          pb={1}
          pl={2}
          flex="1"
        >
          <Button
            variant="outlined"
            sx={{
              border: "1px solid #12A55C",
              borderRadius: "5px",
              color: "#12A55C",
              background: "#EDFDF5",
              "&: hover": {
                background: "#12A55C",
                color: "white",
              },
            }}
          >
            Read more
          </Button>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
}

export default Blog;
