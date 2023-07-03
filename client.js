const net = require('net')
const readline = require('readline')
const client = new net.Socket()

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let nickName = ''
input.question('enter your nickname : ', name => {
    nickName = name
    client.connect(4000, "127.0.0.1", () => {
        exec("clear")
        console.log(nickName, "connected !")
        input.addListener('line', line => client.write(`${nickName}: ${line}`))
        client.on('data', data => console.log(data.toString()))
    })
})
