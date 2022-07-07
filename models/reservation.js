import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  idUser: String,
  nameRoom: String,
  dayReservation: Date,
  players: Array
})

const Reservations = mongoose.model('Reservations', reservationSchema);

export default Reservations