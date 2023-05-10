const mongoose = require('mongoose');

let url = `mongodb+srv://mainuser:eBcBwkAtqUXUBMoQ@ccluster0.5fbdspu.mongodb.net/codecommunity?retryWrites=true&w=majority`;



mongoose.connect(url);

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error Connectiong to Database!"));

db.once('open', function(){
    console.log("Successfully Connected to DB!");
});

module.exports = db;