
export default (server) => {
    const io = require('socket.io').listen(server)
    io.on('connection', function(socket){
        console.log(socket.id);
    });
}

