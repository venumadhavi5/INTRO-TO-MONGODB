const mongoose = require("mongoose");

let conectToMDB = async ()=>{

    try{
        await mongoose.connect("mongodb+srv://madhavi:divyalahari5@batch2408cluster.k2jcj.mongodb.net/?retryWrites=true&w=majority&appName=Batch2408Cluster");

        console.log("Connected to MDB Successfully");

    }catch(err){
     
        console.log("Unable to Connect to MDB");
    }

   };
   
conectToMDB();
