const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});



// const mongoose = require("mongoose")
// const db = mongoose.connection;

// async function main(){
//     await mongoose.connect(process.env.MONGO_URI)


// db.on('error', (error) => {
//     console.log(error.message);
// })

// db.on('connected', () => {
//     console.log("mongo connection")
// })

// db.on('disconnected', () => {
//     console.log("mongo disconnected")
// })
// }
// db.on('open', () => {
//     console.log("connection made")
// })
// module.exports = main