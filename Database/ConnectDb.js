const mongoose = require("mongoose")

const getConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("database connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

getConnect()