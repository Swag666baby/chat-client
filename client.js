const net = require('net')
const readline = require('readline')

const client = new net.Socket()

const rdl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

client.connect(4000, "127.0.0.1", () => {

	

	console.log("conectado!")
	rdl.addListener('line', line => {
	client.write(line)
	})
	
})