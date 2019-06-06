//require
const app = require ('./app');
const {connect} = require('./database');

async function main(){

    //database conection
    await connect()
    //run server
    await app.listen(4000);
    console.log('Run in port 4000');
}


main();