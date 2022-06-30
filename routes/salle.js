import express from 'express'
import {getSalles} from '../controllers/salle.js'
const routerSalle = express.Router()
routerSalle.use(express.json())
routerSalle.use(express.urlencoded({ extended: true }))

routerSalle.get('/', async (req, res) => {
    let salles = await getSalles()
    res.json(salles);
})

// routerToys.get('/:name', async (req, res) => {
//     let toyName = await showOneToy(req.params.name)
//     res.json(toyName)
// })

// routerToys.post('/', async (req, res) => {
//     const newToy = await createToy(req.body)
//     res.send('ok')
// })

// routerToys.put('/:name', async (req, res) => {
//     console.log(req.params.name);
//     let updateOneToy = await updateToy(req.params.name,req.body)
//     res.send(updateOneToy)
//         });


// routerToys.delete('/:id', function (req, res) {
//     let deletOne= deleteOneToy(req.params.id)
// })
export default routerSalle
