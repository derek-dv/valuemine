// src/CommentSection.js
import React, { useState } from 'react';
import {
    Box,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CommentSection = () => {
    const [comments] = useState([
        { text: 'This is the first comment!', date: '2024-06-14 10:00:00' },
        { text: 'Here is another comment.', date: '2024-06-14 10:05:00' },
        { text: 'And a third one.', date: '2024-06-14 10:10:00' }
    ]);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 600,
                bgcolor: 'background.paper',
                margin: '0 auto',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2
            }}
        >
            <Typography variant="h6" gutterBottom>
                Comments
            </Typography>
            <List>
                {comments.map((comment, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={comment.text}
                            secondary={comment.date}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default CommentSection;
