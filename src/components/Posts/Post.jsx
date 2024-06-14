import React, { useState } from 'react';
import { PostFooter, PostTags, PostWrapper, Tag } from './PostsStyling';
import { Avatar, Stack, Typography } from '@mui/material';
import { ChatBubbleOutline, TurnedInNot } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function Post({ post, AllPosts }) {
  const navigate = useNavigate();
  const [thisPost] = useState(getRandomElement(AllPosts))
  return (
    <PostWrapper onClick={() => navigate(`/post/${post._id}`)}>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Avatar sx={{ height: "60px", width: "60px" }} alt={thisPost.author} src={thisPost.imageUrl} />
        <Stack spacing={0.8}>
          <Typography variant="p" sx={{ fontSize: { xxs: "18px", sm: "20px", md: "24px" }, color: "primary.textGray" }}>
            {thisPost.author}
          </Typography>
          <Typography variant="p" sx={{ fontSize: { xxs: "12px", sm: "14px", md: "16px" }, color: "#666687" }}>
            {moment(post.createAt).format('dddd, MMMM Do YYYY')}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} mt={2}>
        <Typography variant="p" sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, fontWeight: "500", color: "primary.textDark" }}>
          {post.title}
        </Typography>
        <PostTags>
          {thisPost.tags.map(tag => (
            <Tag key={tag} className="tag">#{tag}</Tag>
          ))}
        </PostTags>
        <PostFooter direction="row">
          <Stack direction="row" spacing={1}>
            <ChatBubbleOutline sx={{ color: "primary.textDark" }} />
            <Typography variant="p" color="primary.textGray">
              {post.comments.length}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="p" color="primary.textGray">
              5 mins read
            </Typography>
            <TurnedInNot sx={{ color: "primary.textGray" }} />
          </Stack>
        </PostFooter>
      </Stack>
    </PostWrapper>
  );
}

export default Post;
