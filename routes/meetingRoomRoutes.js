// routes/meetingRoomRoutes.js

const express = require('express');
const router = express.Router();
const meetingRoomController = require('../controllers/meetingRoomController');

// Route to fetch and display available meeting rooms
router.get('/meeting-rooms', meetingRoomController.getAvailableMeetingRooms);

// Route to make a reservation for a meeting room
router.post('/meeting-rooms/:roomId/reserve', meetingRoomController.reserveMeetingRoom);

module.exports = router;
