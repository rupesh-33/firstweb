const mongoose = require("mongoose");
const validator = require("validator");

const userschema = mongoose.Schema({
    name:{
        type: 'string',
        required:true,
        minLength:3
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Eail ID")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min: 10,

    },
    message:{
        type: 'string',
        required:true,
        minLength:3
    },
    Date:{
        type: Date,
        default: Date.now
    }
});

// create collection
const user = mongoose.model("user",userschema);

module.exports = user;