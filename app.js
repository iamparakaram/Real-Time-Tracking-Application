const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const path=require('path');
const server = http.createServer(app);
const io=socketio(server);


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection",function(socket){
  socket.on("send-location", function(data)
{
  io.emit("receive-location",{id:socket.id ,...data});

  
});
console.log("connected");

});




app.get('/', function (req, res)  {
  res.render("index");
});

server.listen(2000, () => {
  console.log("Server is running...");
});
