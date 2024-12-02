import mongoose, { model } from 'mongoose'
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
    name : {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    images:[],
    reviews:[],
    category:{
        type:String,
        required:true,
    }
})

const Food = mongoose.model('Food',foodSchema);

export default Food;