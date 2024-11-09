const express = require('express');
const mongoose = require('mongoose');
const{Schema} = require('mongoose')
const app = express()
 
mongoose.connect('mongodb://localhost:27017').then(()=>console.log('mongodb is coneted'))

app.use (express.json())

const BookScheema= new Schema({
    tittle:String,
    auther:String,
    genre:String,
    publication_year:Number,
    pages: Number,
    read:Boolean
})
const Book = mongoose.model('Book',BookScheema)
app.post('/book',(req,resp)=>{
    const data = req.body
    const object = new Book (data)
    object.save()
    resp.json({'message':'object is created',object})
})

app.listen(3000, () => console.log('Server running on port '))