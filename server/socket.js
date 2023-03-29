
export default (server) => {
    const io = require('socket.io').listen(server)
    io.on('connection', function(socket){
        io.emit('createCube', socket.id);
        socket.on('move', function(data){
            io.emit('move', socket.id, data);
        })
        socket.on('disconnect', function(){
            console.log('disconnected!!!');
            io.emit('remove', socket.id);
        })
    });
}

