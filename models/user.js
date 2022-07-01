import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  admin: Boolean,
  lastname: String,
  firstname: String,
  birthday: Date,
  password: String,
  email: String

})

const Users = mongoose.model('users', userSchema);

export default Users