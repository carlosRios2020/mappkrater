const mongoose = require('mongoose')
 
async function connect(){
   await mongoose.connect('mongodb://localhost:/usersfludb',{
        useNewUrlParser:true
    });
    console.log('Database conected')
}


module.exports = {connect};