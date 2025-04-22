const mongoose = require("mongoose")


const connectDatabase = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/commerce") 
        console.log("Database Connected...")
      
       

    }catch(err){
        console.log(err)
    }
   
  
}


module.exports = connectDatabase;



