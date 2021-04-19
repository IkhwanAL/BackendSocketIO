const exp = require('express');
const app = exp();
const http = require('http');
const LoginRouter = require('./Route/Login/login');
const { sq } = require('./Sequelize/conn');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use('/auth', LoginRouter);

app.get('/', (req, res) => {
    const Conn = sq;

    res.sendFile(__dirname + '/index.html');
})



io.on('connection', (socket) => {
    console.log(socket.handshake);

    socket.on('name User', (msg) => {
        socket.username = msg;
        socket.broadcast.emit('name User', `${msg} is Connected`);
    });

    socket.on('typing', () => {
        const msg = `${socket.username} is Typing...`;
        socket.broadcast.emit('typing', msg);
    })

    socket.on('remove', () => {
        socket.broadcast.emit('remove');
    })

    socket.on('chat message', (msg) => {
        const mes = `${socket.username}: ${msg}`
        io.emit('chat message', mes);
    })
    socket.on('disconnect', () => {
        const msg = `${socket.username} is Disc`;
        socket.broadcast.emit('disc', msg);
    })

});

server.listen(3000, () => {
    console.log("Server Listen *:3000");
})