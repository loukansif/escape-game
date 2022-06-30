import express from 'express'
import {getUsers, getOneUser} from '../controllers/salle.js'
const routerUser = express.Router()
routerUser.use(express.json())
routerUser.use(express.urlencoded({ extended: true }))

routerUser.get('/', async (req, res) => {
    let users = await getUsers()
    res.json(users);
})

routerUser.get('/:id', async (req, res) => {
    let user = await getOneUser(req.params._id)
    res.json(user)
})

routerUser.post('/', async (req, res) => {
    const newUser = await createUser(req.body)
    res.send('nouveau user créé')
})

// routerToys.put('/:name', async (req, res) => {
//     console.log(req.params.name);
//     let updateOneToy = await updateToy(req.params.name,req.body)
//     res.send(updateOneToy)
//         });


// routerToys.delete('/:id', function (req, res) {
//     let deletOne= deleteOneToy(req.params.id)
// })
export default routerUser
