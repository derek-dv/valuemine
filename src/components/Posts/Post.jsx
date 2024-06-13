import React from 'react';
import { PostFooter, PostTags, PostWrapper, Tag } from './PostsStyling';
import { Avatar, Stack, Typography } from '@mui/material';
import { ChatBubbleOutline, TurnedInNot } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Post({ post }) {
  const navigate = useNavigate();
  return (
    <PostWrapper onClick={() => navigate(`/post/${post.id}`)}>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Avatar sx={{ height: "60px", width: "60px" }} alt={post.author} src={post.imageUrl} />
        <Stack spacing={0.8}>
          <Typography variant="p" sx={{ fontSize: { xxs: "18px", sm: "20px", md: "24px" }, color: "primary.textGray" }}>
            {post.author}
          </Typography>
          <Typography variant="p" sx={{ fontSize: { xxs: "12px", sm: "14px", md: "16px" }, color: "#666687" }}>
            {post.date}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} mt={2}>
        <Typography variant="p" sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, fontWeight: "500", color: "primary.textDark" }}>
          {post.title}
        </Typography>
        <PostTags>
          {post.tags.map(tag => (
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
