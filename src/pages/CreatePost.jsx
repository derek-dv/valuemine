import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header/Header";
import PageHeader from "../components/PageHeader";
import images from "../../assets/images";
import { StyledContainer } from "../GlobalStylings/Global";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "1.5rem",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0B6ED0",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#005BB5",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginBottom: "0.5rem",
  "&::after": {
    content: '"*"',
    color: theme.palette.error.main,
    marginLeft: "4px",
  },
}));

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hash, setHash] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    const axiosInstance = axios.create({
      headers: {
        "x-auth-token": `${token}`,
        "Content-Type": "application/json",
      },
    });

    axiosInstance
      .post("https://val-0rnm.onrender.com/api/posts/create", {
        title,
        content,
        hashTags: hash,
      })
      .then((response) => {
        navigate("/support");
        toast.success("Success");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
        console.error("Error:", error);
      });
    console.log({ title, content, hash });
  };
  return (
    <>
      <Header />
      <StyledContainer sx={{ flexDirection: "column" }}>
        <PageHeader
          title="Support"
          currentPage="Create Post"
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Support", path: "/support" },
            { label: "Create Post", path: "/support/create-post" },
          ]}
        />
        <Box sx={{ width: "100%", maxWidth: "80%", mt: 4 }}>
          <Typography variant="h4" fontWeight="600" sx={{ mb: 3 }}>
            Create Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <Label>Title</Label>
              <StyledTextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                required
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Label>Content</Label>
              <StyledTextField
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
                required
                multiline
                rows={15}
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Hashtags
              </Typography>
              <StyledTextField
                value={hash}
                onChange={(e) => setHash(e.target.value)}
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <StyledButton type="submit" variant="contained">
                Upload Post
              </StyledButton>
            </Box>
          </form>
        </Box>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default CreatePost;
