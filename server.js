const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true }))
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://socket:12345s@ds159993.mlab.com:59993/heroku_tnvm1j95', 
{ useNewUrlParser: true });

// mongoose.connect('mongodb://localhost/todoListSocket',{useNewUrlParser: true});

require('./sockets/todo-sockets')(io);
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);
server.listen(PORT, ()=>{
    console.log(`Server is listening ${PORT}` )
})