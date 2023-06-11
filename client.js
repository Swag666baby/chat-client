const net = require('net')
const readline = require('readline')
const {exec} = require("child_process")
const client = new net.Socket()

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let nickName = ''
input.question('Digite o seu nickname: ', name => {
    nickName = name
    client.connect(4000, "127.0.0.1", () => {
        exec("clear")
        console.log(nickName, "conectado!")
        input.addListener('line', line => client.write(`${nickName}: ${line}`))
        client.on('data', data => console.log(data.toString()))
    })
})