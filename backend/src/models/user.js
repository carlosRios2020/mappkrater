//Schema users
const {Schema , model} = require('mongoose');


const UserSchema = new Schema({
    Name: String,
    LastName : String,
    Email: String,
    avatar: String
})


//exporst users
module.exports = model('User', UserSchema)