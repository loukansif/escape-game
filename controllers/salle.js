import Salles from '../models/salle.js'

export async function getSalles(){
    const salleList = await Salles
      .find()
    
      return salleList
}

export async function getOneSalle(id){
  const oneSalle = await Salles
    .findOne({_id: id})
    return oneSalle
}

