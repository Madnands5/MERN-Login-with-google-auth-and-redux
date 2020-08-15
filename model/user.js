const mongoose= require('mongoose');
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:2,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:2
       
    }
});
module.exports=mongoose.model('User',UserSchema);