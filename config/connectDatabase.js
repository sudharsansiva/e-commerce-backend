const mongoose = require("mongoose")


const connectDatabase = async () => {
    try{
        await mongoose.connect("mongodb+srv://sudarsansudar909:MSjatDsOiYjoQjtN@cluster0.0wlpu2x.mongodb.net/commerce?retryWrites=true&w=majority&appName=Cluster0") 
        console.log("Database Connected...")
      
       

    }catch(err){
        console.log(err)
    }
   
  
}


module.exports = connectDatabase;



