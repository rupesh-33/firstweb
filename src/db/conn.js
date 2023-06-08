const mongoose = require("mongoose");

// creating database
mongoose.connect("mongodb+srv://VoidCreator:VoidCreator123@cluster0.ktfg6i0.mongodb.net/DynaWeb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to database");
}).catch((error)=>{
    console.log(error);
})