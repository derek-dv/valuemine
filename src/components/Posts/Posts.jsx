import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Pagination, Typography } from "@mui/material";
import { AddTwoTone } from "@mui/icons-material";
import {StyledContainer , PostsWrapper, StyledStack,StyledWrapper} from "./PostsStyling";
import Post from "./Post";
import AllPosts from "./dummyData";

function Posts() {
  const navigate = useNavigate();

  const userCheck = () => {
    navigate("/support/create-post");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = AllPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledStack>
          <Button
            onClick={userCheck}
            size="large"
            sx={{ fontSize: "15px" }}
            variant="contained"
            startIcon={
              <AddTwoTone
                sx={{
                  backgroundColor: "white",
                  color: "#212134",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                  fontSize: "10px",
                }}
              />
            }
          >
            Create Post
          </Button>
          <Typography
            sx={{
              fontSize: "16px",
              color: "primary.textGray",
              fontWeight: "600",
            }}
          >
            {AllPosts.length} Posts Published
          </Typography>
        </StyledStack>
        <PostsWrapper spacing={3}>
          {currentPost.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </PostsWrapper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "1rem",
            width: "90%",
          }}
        >
          {AllPosts.length > 5 && (
            <Pagination
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(AllPosts.length / postsPerPage)}
              page={currentPage}
              onChange={paginate}
              size="small"
              sx={{
                "& .MuiButtonBase-root": {
                  fontSize: "15px",
                  marginRight: "15px",
                },
              }}
            />
          )}
        </Box>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Posts;
