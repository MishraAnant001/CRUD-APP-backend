import express from 'express'
import mongoose from 'mongoose'
import productRoute from './Routes/product.route.js'

const app = express();

//routes
app.use('/api/products',productRoute)

app.get('/',(req,res)=>{
    res.send("hello world")
})

mongoose.connect("mongodb+srv://anantmanojmishra:kNp8tfu3NJ4SfBXp@backenddb.kuqejt8.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("connected to db");
    app.listen(5000,()=>{
        console.log("App is listening on port 5000")
    })
}).catch((err)=>{
    console.log("error connecting to db",err)
})