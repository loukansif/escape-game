import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  iduser: String,
  idRoom: String,
  dayReservation: String,
  players: Array
})

const Reservations = mongoose.model('Reservations', reservationSchema);

export default Reservations