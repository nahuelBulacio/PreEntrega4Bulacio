import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRoute from './routes/views.js'
import { Server } from "socket.io";

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use('/', viewsRoute);

const server = app.listen(8080, () => {
    console.log('Server ON')
})

const socketServer = new Server(server);

const logs = [];

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('message1', data => {
        socketServer.emit('log', data);
    });

    socket.on('message2', data => {
        logs.push({ socketId: socket.id, message: data })
        socketServer.emit('log', { logs });
    });
});

