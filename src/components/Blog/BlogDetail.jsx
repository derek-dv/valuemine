import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  TextField,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { AllPosts } from "./dummyData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { StyledContainer } from "../../GlobalStylings/Global";
import PageHeader from "../PageHeader";
import images from "../../../assets/images";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const StyledWrapper = styled(Box)({
  padding: "2rem",
});

const MainContent = styled(Box)({
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "10px",
});

const PostStack = styled(Stack)({
  padding: "2rem",
  backgroundColor: "#F6F6F9",
  borderRadius: "10px",
  marginTop: "1rem",
});
const Sidebar = styled(Box)({
  padding: "2rem",
  borderRadius: "10px",
  marginTop: "1rem",
});

const RecentPost = styled(Stack)({
  marginBottom: "1rem",
  "& img": {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
  },
});

const CategoryItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
  "& div": {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "0.5rem",
  },
});

const CommentSection = styled(Box)({
  backgroundColor: "white",
  borderRadius: "10px",
  marginTop: "2rem",
});

const StyledButton = styled(Button)({
  backgroundColor: "#0B6ED0",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#005BB5",
  },
});

const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "10px",
  marginBottom: "1rem",
  height: "300px",
  objectFit: "cover",
});

const TagButton = styled(Button)({
  borderRadius: "10px",
  padding: "0.5rem 1rem",
  marginRight: "0.5rem",
  fontSize: "12px",
  textTransform: "none",
  borderRadius: "18px",
  width: "100px",
  "&:hover": {
    color: "black",
  },
});

const Line = styled("div")({
  height: "0.3px",
  width: "100%",
  background: "#C0C0CF",
});
const BlogDetail = () => {
  const [comments] = useState([
    { text: "This is the first comment!", date: "2024-06-14 10:00:00" },
    { text: "Here is another comment.", date: "2024-06-14 10:05:00" },
    { text: "And a third one.", date: "2024-06-14 10:10:00" },
  ]);
  const [content, setContent] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { id } = useParams();
  const post = AllPosts.find((post) => post.id === parseInt(id));

  const submitComment = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    const axiosInstance = axios.create({
      headers: {
        "x-auth-token": `${token}`,
        "Content-Type": "application/json",
      },
    });

    axiosInstance
      .post(`https://val-0rnm.onrender.com/api/posts/${id}/comment`, {
        name,
        content,
        email,
      })
      .then((response) => {
        navigate("/blog");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <StyledContainer sx={{ flexDirection: "column" }}>
        <PageHeader
          title={post.title}
          currentPage={post.title}
          backgroundImage={images.aboutImage}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "News & Blog", path: "/blog" },
            { label: post.title, path: `/blog/${post.id}` },
          ]}
        />
        <StyledWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <MainContent>
                <StyledImage src={post.image} alt={post.title} />
                <Stack
                  direction="row"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: "17px" }}
                    color="primary.textGray"
                    gutterBottom
                  >
                    By {post.author}
                  </Typography>
                  <Stack direction="row" spacing={1} mt={2} mb={2}>
                    <TagButton
                      sx={{
                        bgcolor: "#DDEDFD",
                        color: "#0854A0",
                        border: "1px solid #0854A0",
                      }}
                    >
                      Software
                    </TagButton>
                    <TagButton
                      sx={{
                        bgcolor: "#FDF4DC",
                        color: "#BE5D01",
                        border: "1px solid #BE5D01",
                      }}
                    >
                      Solution
                    </TagButton>
                  </Stack>
                </Stack>
                <Line sx={{ margin: "1rem 0 !important" }} />
                <Typography
                  variant="body1"
                  color="primary.textGray"
                  paragraph
                  sx={{ fontSize: "16px", marginTop: "2rem !important" }}
                >
                  {post.content}
                </Typography>
                <Line
                  sx={{
                    margin: "1rem 0 !important",
                    marginTop: "2rem !important",
                  }}
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography
                    variant="body2"
                    color="#666687"
                    sx={{ fontSize: "15x" }}
                  >
                    {post.date}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Facebook />
                    <Twitter />
                    <LinkedIn />
                    <Instagram />
                  </Stack>
                </Stack>
                <Line sx={{ margin: "1rem 0 !important" }} />
              </MainContent>

              <Container>
                <CssBaseline />
                <Typography variant="h4" align="left" gutterBottom>
                  Comment Section
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 600,
                    margin: "0",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <List>
                    {comments.map((comment, index) => (
                      <>
                        <ListItem key={index} alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar>
                              <AccountCircleIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={comment.text}
                            secondary={moment(comment.date).format('dddd, MMMM Do YYYY')}
                          />
                        </ListItem>
                        <Typography variant="p">
                          {" "}
                          Elementum curabitur vitae nunc sed velit dignissim
                          sodales. Molestie a iaculis at erat pellentesque
                          adipiscing commodo elit at. Orci dapibus ultrices in
                          iaculis nunc sed. Nam aliquam sem et tortor consequat
                          id porta nibh. Mauris pharetra et ultrices neque
                          ornare aenean euismod elementum. Nascetur ridiculus
                          mus mauris vitae ultricies leo. Semper auctor.
                        </Typography>
                      </>
                    ))}
                  </List>
                  <Line sx={{ margin: "1rem 0 !important" }} />
                </Box>
              </Container>
              <Box mt={4} ml={4}>
                <Typography
                  sx={{
                    color: "primary.textDark",
                    fontWeight: "500",
                    fontSize: "24px",
                  }}
                  gutterBottom
                >
                  Leave a Note
                </Typography>
                <Typography color="primary.textDark" gutterBottom>
                  Fields marked * are mandatory. Your email address will be kept
                  confidential
                </Typography>
                <CommentSection>
                  <form onSubmit={submitComment}>
                    <TextField
                      label="Comment"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      required
                      sx={{
                        marginBottom: "1.5rem",
                        backgroundColor: "transparent",
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        marginBottom: "1.5rem",
                        backgroundColor: "transparent",
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        marginBottom: "1.5rem",
                        backgroundColor: "transparent",
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                    <StyledButton type="submit" variant="contained">
                      Post comment
                    </StyledButton>
                  </form>
                </CommentSection>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Sidebar>
                <Stack direction="row" spacing={2} mb={5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Search keyword..."
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused": {
                          outline: "none",
                        },
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0B6ED0",
                      borderRadius: "4px",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#005BB5" },
                    }}
                  >
                    Search
                  </Button>
                </Stack>
                <PostStack spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px" }}
                    gutterBottom
                  >
                    Latest Posts
                  </Typography>
                  {AllPosts.slice(0, 5).map((post) => (
                    <RecentPost key={post.id} direction="row" spacing={2}>
                      <img src={post.image} alt={post.title} />
                      <Box>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          color="primary.textDark"
                        >
                          {post.title}
                        </Typography>
                        <Typography variant="caption" color="primary.textGray">
                          {post.date}
                        </Typography>
                      </Box>
                    </RecentPost>
                  ))}
                </PostStack>
                <Typography variant="h6" gutterBottom>
                  Categories
                </Typography>
                {[
                  "Business",
                  "Finance",
                  "Software",
                  "Solution",
                  "Technology",
                ].map((category) => (
                  <CategoryItem key={category}>
                    <Box style={{ backgroundColor: "#0B6ED0" }} />
                    <Typography variant="body2">{category}</Typography>
                  </CategoryItem>
                ))}
              </Sidebar>
            </Grid>
          </Grid>
        </StyledWrapper>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default BlogDetail;
