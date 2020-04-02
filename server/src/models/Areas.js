const mongoose = require('mongoose')

const AreaSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    countPeople:{
        type:Number,
        require:true,
        default:0
    }
});

module.exports = mongoose.model("Area", AreaSchema)