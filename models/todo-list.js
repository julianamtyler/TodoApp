const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({
    todoname: String,
    done: Boolean
    },
{ collection: 'todoItems'}
)
module.exports = mongoose.model('todolist',todoSchema);
