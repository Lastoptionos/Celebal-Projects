const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    mongoose.connect('mongodb://localhost:27017/expense', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('Database connect successfully'.bgCyan.white))
    .catch( (error)=> {
        console.log("issue in db connection");
        console.error('${error}'.bgRed);
        process.exit(1);
    } );

};

module.exports = connectDb;