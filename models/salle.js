import mongoose from 'mongoose'

const salleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  capacity: Number,
  img: String,
  description: String,
  price: Number,
  dispo: Array,
  minplayers: Number
})

const Salles = mongoose.model('salles', salleSchema);

export default Salles