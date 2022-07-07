import express from 'express'
import {getReservations, getOneReservation, createReservation} from '../controllers/reservation.js'
const routerReservation = express.Router()
routerReservation.use(express.json())
routerReservation.use(express.urlencoded({ extended: true }))

routerReservation.get('/', async (req, res) => {
    let reservations = await getReservations()
    res.json(reservations);
})

routerReservation.get('/:_id', async (req, res) => {
    let reservation = await getOneReservation(req.params._id)
    res.json(reservation)
})

routerReservation.post('/', async (req, res) => {
    const newReservation = await createReservation(req.body)
    res.send('ok')
})

// routerReservation.put('/:name', async (req, res) => {
//     console.log(req.params.name);
//     let updateOneToy = await updateToy(req.params.name,req.body)
//     res.send(updateOneToy)
//         });


// routerReservation.delete('/:id', function (req, res) {
//     let deletOne= deleteOneToy(req.params.id)
// })
export default routerReservation
