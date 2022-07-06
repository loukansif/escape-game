import Reservations from '../models/reservation.js'

export async function getReservations(){
    const ReservationList = await Reservations
      .find()
    
      return ReservationList
}

export async function getOneReservation(_id){
  const oneReservation = await Reservations
    .findOne({_id: _id})

    return oneReservation
}

export async function createReservation(reservationData){
    
    const Reservation = new Reservations(reservationData)
   
    const result = await Reservation.save()
    
    return result
}