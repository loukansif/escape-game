import Salles from '../models/salle.js'

export async function getSalles(){
    const salleList = await Salles
      .find()
    
      return salleList
}

export async function getOneSalle(id){
  const oneSalle = await Salles
    .findOne({id: id})

    return oneSalle
}

