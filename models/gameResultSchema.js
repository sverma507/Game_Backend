const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({ 
    name:String,
    date:Date,
    result:Number,
    gameId:String,
    code:String,
}) 
 
module.exports = mongoose.model('gameResults', gameResultSchema)