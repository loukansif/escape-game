import Users from '../models/user.js'

export async function getUsers(){
    const userList = await Users
      .find()
    
      return userList
}

export async function getOneUser(id){
  const oneUser = await Users
    .findOne({id: id})

    return oneUser
}

export async function createUser(userData){
    
    const User = await new User(userData)
   
    const result = await User.save()
    
    return result
}