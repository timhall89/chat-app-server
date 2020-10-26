import express from 'express';
import http from 'http';
import Io from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = Io(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => console.log('listening on port 3001'));
