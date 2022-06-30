import Salles from '../models/salle.js'

export async function getSalles(){
    const salleList = await Salles
      .find()
    
      return salleList
}