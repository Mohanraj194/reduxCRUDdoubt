const mongodb = require("mongodb")
const cors = require("cors")
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

const mongoClient = mongodb.MongoClient;
const ObjectId = require('mongodb').ObjectId; 



app.use(express.json());
app.use(cors());



var mongourl = "mongodb://127.0.0.1:27017/"

app.get("/",(req,res)=>{
    res.json({
        "Title": "Student-Mentor api endpoints reference",
        });
    res.end();
});

app.get("/liststudent", async(req, res)=>{
    
    
    try{
        let client = await mongoClient.connect(mongourl)
        let db = client.db("testcrud");
        let query = await db.collection("student").find().toArray();
        res.status(200).json({
            query
        })
        client.close()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Could not find any students",
            data: error.message
        })
    }
});
app.get("/singlestudent/:id", async(req, res)=>{
    
    
    try{
        let client = await mongoClient.connect(mongourl)
        let db = client.db("testcrud");
        let query = await db.collection("student").findOne({_id:mongodb.ObjectId(req.params.id)});
        res.status(200).json({
            query
        })
        client.close()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Could not find any students",
            data: error.message
        })
    }
});


app.post("/add-student",async(req,res)=>{
    try{
        let client = await mongoClient.connect(mongourl)
        let db = client.db("testcrud")
        let result = await db.collection("student").insertOne(req.body)
        res.status(200).json({
            message :"Student record inserted"
        })
        client.close()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error while adding the student"
        })
    }
})


app.put("/update-student/:id", async(req, res)=>{
    
    try{
       // console.log(req)
        
      //  console.log(studentId);
        let client = await mongoClient.connect(mongourl)
        let db = client.db("testcrud");
        let query = await db.collection("student").updateOne({_id :mongodb.ObjectId(req.params.id) }, {$set: {mob:req.body.mob}}) ;
        //console.log(query)
        res.status(200).json({
            message : "updated the records !!",
            data : query
        })
        //console.log(query)
        client.close()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "error updating the records",
            data: error.message
        })
    }
});

app.delete("/delete-student/:id", async(req, res)=>{
    
    try{
        console.log(req.params.id)
      let client = await mongoClient.connect(mongourl)
        let db = client.db("testcrud");
        let query = await db.collection("student").deleteOne({_id :mongodb.ObjectId(req.params.id) }) ;
        
        res.status(200).json({
            message : "deleted the records !!",
            data : query
        })
        //console.log(query)
        client.close()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "error updating the records",
            data: error.message
        })
    }
});




app.listen(PORT,()=>console.log(`Student-Mentor Api server is running at port ${PORT}`))