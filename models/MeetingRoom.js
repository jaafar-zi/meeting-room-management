// models/MeetingRoom.js

const mongoose = require('mongoose');

const meetingRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  equipment: [String], // Array of equipment available in the meeting room
  // Add any other fields you need, such as availability, location, etc.
}, { timestamps: true });

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema);

module.exports = MeetingRoom;
