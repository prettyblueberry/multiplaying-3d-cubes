
export default (server) => {
    const io = require('socket.io').listen(server)
    io.on('connection', function(socket){
        socket.emit('yourSid', socket.id);
        io.emit('createCube', socket.id);
        socket.on('move', function(buttonKey, moveDistance, rotateAngle){
            io.emit('move', socket.id, buttonKey, moveDistance, rotateAngle);
        })
        socket.on('disconnect', function(){
            console.log('disconnected!!!');
            io.emit('remove', socket.id);
        })
        socket.broadcast.emit("askPosition", socket.id);

        socket.on("answerPosition", function(sid, position, color){
            console.log(position);
            socket.to(sid).emit('answerPosition', socket.id, position, color);
        })
    });
    
}

