import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridsFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'


Grid.mongo=mongoose.mongo

//app config

const app=express()
const port=process.env.PORT || 9000

//middlewares

app.use(bodyParser.json())
app.use(cors())

//db config

const mongoURI='mongodb+srv://avishak_10:<password>@project350v1.kmy5r.mongodb.net/feed?retryWrites=true&w=majority'

const conn=mongoose.createConnection(mongoURI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once('open',()=>{
    console.log('DB connceted')
})

conn.once('open',()=>{
    console.log('DB connected')
})



//api routes
app.get('/',(req,res)=>res.status(200).send('hello'))

/*app.post('/upload/image',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file)
})*/


//listen 

app.listen(port,()=>console.log(`port ${port} is running`))