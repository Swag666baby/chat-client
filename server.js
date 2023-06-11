const net = require('net')
const express = require("express")
const app = express()
let sockets = []

app.get("/", (req, res)=>{
    res.send({"stats": "running"})
})

function send(message){
    sockets.forEach(connection => {
        connection.write(message)
    })
}

const handleConnection = socket => {
    send("alguem entrou no chat")
    sockets.push(socket)
    socket.on('end', () =>{
        send("um usuario se desconectou :/")
        sockets.splice(sockets.indexOf(socket), 1)
    })
    socket.on('data', data=> {
        send(data.toString())
    })
}

const server = net.createServer(handleConnection)
server.listen(4000, () => console.log("servidor iniciado."))
app.listen(4001)