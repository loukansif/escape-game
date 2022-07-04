import express from 'express'
import {getSalles, getOneSalle} from '../controllers/salle.js'
const routerSalle = express.Router()
routerSalle.use(express.json())
routerSalle.use(express.urlencoded({ extended: true }))

routerSalle.get('/', async (req, res) => {
    let salles = await getSalles()
    res.json(salles);
})

routerSalle.get('/:_id', async (req, res) => {
    let salle = await getOneSalle(req.params._id)
    res.json(salle)
})

routerSalle.post('/', async (req, res) => {
    const newSalle = await createSalle(req.body)
    res.send('ok')
})

// routerToys.put('/:name', async (req, res) => {
//     console.log(req.params.name);
//     let updateOneToy = await updateToy(req.params.name,req.body)
//     res.send(updateOneToy)
//         });


// routerToys.delete('/:id', function (req, res) {
//     let deletOne= deleteOneToy(req.params.id)
// })
export default routerSalle
