const mongoose = require('mongoose');
const db = require('./index.js');

const bookingSchema = mongoose.Schema({
  location_id: { type: Number, unique: true },
  bookings: [{start: Date, end: Date}],
  perNightTotal: [Number],
  starAverage: Number  
})

const Booking = mongoose.model('Booking', bookingSchema);

const roomSchema = mongoose.Schema({
  location_id: { type: Number, unique: true },
  starRatings: [Number],
  perNightAmnt: Number, 
})

const Room = mongoose.model('Room', roomSchema);

module.exports = { Booking, Room }