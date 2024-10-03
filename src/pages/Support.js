import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Paper,
  InputAdornment
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';

// Mock Data
const chatList = [
  {
    id: 1,
    name: 'Support Nura',
    message: 'We serve in this region...',
    time: '5 Minutes',
    avatar: '/path/to/avatar1.jpg', // Replace with your actual avatar URL
    active: false
  },
  {
    id: 2,
    name: 'Support Nura',
    message: 'Check out our available plans...',
    time: '30 Minutes',
    avatar: '/path/to/avatar2.jpg',
    active: true
  },
  {
    id: 3,
    name: 'Support Nura',
    message: 'You can make the payment...',
    time: '1 Day',
    avatar: '/path/to/avatar3.jpg',
    active: false
  }
];

const messages = [
  {
    id: 1,
    user: 'Support Nura',
    text: 'Would you like to know about our services?',
    time: '10:05 AM',
    avatar: '/path/to/avatar_support.jpg'
  },
  {
    id: 2,
    user: 'You',
    text: 'Yes, I would like to know the coverage in the state of São Paulo.',
    time: '10:06 AM',
    sent: true,
    avatar: '/path/to/your_avatar.jpg'
  },
  {
    id: 3,
    user: 'Support Nura',
    text: 'Our coverage in the state of São Paulo is complete. The entire metropolitan region of São Paulo is covered by our Fiber Broadband.',
    time: '10:08 AM',
    avatar: '/path/to/avatar_support.jpg'
  },
  {
    id: 4,
    user: 'You',
    text: 'Great, I will sign up for a plan. Thank you very much.',
    time: '10:10 AM',
    sent: true,
    avatar: '/path/to/your_avatar.jpg'
  },
  {
    id: 5,
    user: 'Support Nura',
    text: 'No problem, feel free to reach out if you have any questions. Have a good day.',
    time: '10:15 AM',
    avatar: '/path/to/avatar_support.jpg'
  },
  {
    id: 6,
    user: 'You',
    text: 'Thanks, you too.',
    time: '10:15 AM',
    sent: true,
    avatar: '/path/to/your_avatar.jpg'
  }
];

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(chatList[1]); // Default selected chat
  const [newMessage, setNewMessage] = useState('');

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Logic to send a message
      setNewMessage('');
    }
  };

  // Set background color on component mount
  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
    <Grid container sx={{ height: '100vh', mb: 10, border: 1, borderColor: '#ddd', mt: 3 , backgroundColor: '#fff'}}>
      
      {/* Sidebar - Chat List */}
      <Grid
        item
        xs={3}
        sx={{
          backgroundColor: '#fff',
          borderRight: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* Search Bar */}
        <Box sx={{ padding: '10px' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>

        {/* Chat List */}
        <List sx={{ flexGrow: 1, overflowY: 'auto'}}>
          {chatList.map((chat) => (
            <ListItem
              button
              key={chat.id}
              selected={selectedChat.id === chat.id}
              onClick={() => setSelectedChat(chat)}
              sx={{
                backgroundColor: chat.active ? '#E6E8FF' : 'transparent'
              }}
            >
              <ListItemAvatar>
                <Avatar src={chat.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={chat.message}
                primaryTypographyProps={{ fontWeight: chat.active ? 'bold' : 'normal' }}
              />
              <Typography variant="body2" color="textSecondary">
                {chat.time}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>

      {/* Chat Area */}
      <Grid
        item
        xs={9}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            padding: '10px',
            borderBottom: '0px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={selectedChat.avatar} />
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant="h6">{selectedChat.name}</Typography>
              <Typography variant="body2" color="textSecondary">Finance</Typography>
            </Box>
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* Chat Messages */}
        {/* Message Input */}
        <Box
          sx={{
            padding: '10px',
            borderTop: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFF' 
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            sx={{ marginLeft: '10px' }}
          >
            Send <SendIcon sx={{ marginLeft: '5px' }} />
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#FFF',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.user === 'You' ? 'flex-end' : 'flex-start',
                marginBottom: '10px',
                backgroundColor: '#FFF'
                
              }}
            >
              <Avatar
                src={message.avatar}
                sx={{
                  marginRight: message.user === 'You' ? 0 : '10px',
                  marginLeft: message.user === 'You' ? '50px' : 0
                }}
              />
              <Paper
                sx={{
                  padding: '10px',
                  marginLeft: '10px',
                  backgroundColor: message.user === 'You' ? '#7367EF' : '#fff',
                  color: message.user === 'You' ? '#fff' : '#000',
                  maxWidth: '70%',
                }}
              >
                <Typography>{message.text}</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'flex',
                    justifyContent: message.user === 'You' ? 'flex-end' : 'flex-start',
                    marginTop: '5px'
                  }}
                >
                  {message.sent && (
                    <CheckIcon fontSize="small" sx={{ marginRight: '5px' }} />
                  )}
                  {message.time}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        
      </Grid>
    </Grid>
  );
};

export default ChatPage;
