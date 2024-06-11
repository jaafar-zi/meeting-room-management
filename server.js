// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const meetingRoomRoutes = require('./routes/meetingRoomRoutes');
const { verifyToken } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/meeting-room-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.use('/auth', authRoutes);
app.use('/api', meetingRoomRoutes);
app.use('/meeting-rooms', verifyToken);
