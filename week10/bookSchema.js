let mongoose= require('mongoose')

const bookSchema= new mongoose.Schema({
booktitle:{type:String,required:true},
    PubYear:Number,
    author:String,
    Topic:String,
    formate:String
    })

    module.exports= mongoose.model('Book', bookSchema);
