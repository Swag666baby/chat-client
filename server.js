const net = require('net')

let sockets = []
function send(message){
    sockets.forEach(connection => {
        connection.write(message)
    })
}

const handleConnection = socket => {
    send("someone joined the chat")
    sockets.push(socket)
    socket.on('end', () =>{
        send("someone disconnected :/")
        sockets.splice(sockets.indexOf(socket), 1)
    })
    socket.on('data', data=> {
        send(data.toString())
    })
}

const server = net.createServer(handleConnection)
server.listen(4000, () => console.log("server running."))
