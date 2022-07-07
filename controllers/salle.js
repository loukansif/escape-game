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

export async function updateSalle(_id, body){
  const upSalle = await Salles
    .findOneAndUpdate({_id: _id},{...body})

    return upSalle
}


