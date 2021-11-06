require("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
}).then(() => {
    console.log("connected to db")
}).catch((err) => console.log("no connection",err))