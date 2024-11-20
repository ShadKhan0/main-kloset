const {Schema, model} = require('../config')

const mySchema = new Schema({
    name: {type:String, required:true},
    email:{type:String, unique:true },
    password:{type:String, required:true},
    createdAt:{type:Date , default:Date.now}
});



module.exports = model('users', mySchema);