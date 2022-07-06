import Salles from '../models/salle.js'

export async function getSalles(){
    const salleList = await Salles
      .find()
    
      return salleList
}

export async function getOneSalle(_id){
  const oneSalle = await Salles
    .findOne({_id: _id})

    return oneSalle
}

export async function updateSalle(_id){
  const upSalle = await Salles
    .updateOne({_id: _id})

    return upSalle
}


