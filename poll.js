const {Schema,model} = require('mongoose');

// Schema
const pollSchema = new Schema({
    title:{
        type:string,
        required:true,
        trim: true,
    },
    description:{
        type:string,
        required:true,
        trim: true,
    },
    totalVote: Number,
    options:{
        type:[{
            name:string,
            vote:Number,
        }]
    }
})

// model
const poll = model('poll',pollSchema);
module.exports = poll;