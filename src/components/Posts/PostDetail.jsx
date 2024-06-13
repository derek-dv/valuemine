import React from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Avatar,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { Favorite, Share, Comment } from "@mui/icons-material";
import { AllPosts } from "../Blog/dummyData";

const StyledWrapper = styled(Box)({
  padding: "2rem",
});

const MainContent = styled(Box)({
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "10px",
});

const CommentSection = styled(Box)({
  padding: "2rem",
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
  "&:hover": {
    color: "black",
  },
});

const PostDetail = () => {
  const { id } = useParams();
  const post = AllPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <Typography variant="h6">Post not found</Typography>;
  }

  return (
    <StyledWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MainContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="/path/to/avatar.jpg" />
              <Box>
                <Typography variant="h6">{post.author}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {post.date}
                </Typography>
              </Box>
            </Stack>
            <Typography variant="h4" sx={{ marginTop: "1rem" }}>
              {post.title}
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <TagButton>#erp</TagButton>
              <TagButton>#erpsystem</TagButton>
              <TagButton>#hashtags</TagButton>
              <TagButton>#hashtags</TagButton>
              <TagButton>#hashtags</TagButton>
            </Stack>
            <StyledImage src={post.image} alt={post.title} />
            <Typography
              variant="body1"
              color="primary.textGray"
              paragraph
              sx={{ fontSize: "16px", marginTop: "2rem !important" }}
            >
              {post.content}
            </Typography>
            <Box display="flex" gap="1rem" mb="1rem">
              <IconButton>
                <Favorite color="error" />
              </IconButton>
              <IconButton>
                <Share color="primary" />
              </IconButton>
              <IconButton>
                <Comment color="action" />
              </IconButton>
            </Box>
          </MainContent>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Leave a Note
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Fields marked * are mandatory. Your email address will be kept confidential
            </Typography>
            <CommentSection>
              <TextField
                label="Comment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                sx={{ marginBottom: "1.5rem", backgroundColor: "transparent" }}
              />
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                sx={{ marginBottom: "1.5rem", backgroundColor: "transparent" }}
              />
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                required
                sx={{ marginBottom: "1.5rem", backgroundColor: "transparent" }}
              />
              <StyledButton variant="contained">Post comment</StyledButton>
            </CommentSection>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Recent comments
            </Typography>
            {Array.isArray(post.comments) && post.comments.length > 0 ? (
              <Stack spacing={2}>
                {post.comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src="/path/to/avatar.jpg" />
                        <Box>
                          <Typography variant="body2" fontWeight="bold">
                            {comment.user}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {comment.date}
                          </Typography>
                        </Box>
                      </Stack>
                      <Typography
                        variant="body2"
                        color="primary.textGray"
                        sx={{ marginTop: "0.5rem" }}
                      >
                        {comment.comment}
                      </Typography>
                      <Button sx={{ textTransform: "none", color: "#0B6ED0", padding: "0" }}>Reply</Button>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments yet.
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Sidebar can be implemented here if needed */}
        </Grid>
      </Grid>
    </StyledWrapper>
  );
};

export default PostDetail;
