// const http = require('http')

// const port = 8080

// const server = http.createServer((request,response) => {
//     response.writeHead(200,{})
//     response.write('Hello World!')
//     response.end()
// })

// server.listen(port, () =>{
//     console.log(`El servidor arranco en el puerto ${port}`)
// })

const http = require('http')

const port = 8080

// Creamor un servidor, usando createServer
const server = http.createServer((request, response) => {
    // le definimos un todo el header, con writeHead
    // response.writeHead(200, {})
    const metodo = request.method;
    console.log(`Metodo: ${metodo}`)

    const url = request.url
    console.log(`URL: ${url}`)

    response.statusCode = 202
    response.setHeader('Content-Type', 'text/plain')

    if (metodo == "GET" && url == "/koder") {
        response.write('Aqui estan los koders')
        console.log("Aqui estan los koders")
    } else if (metodo == "POST" && url == "/koder") {
        response.write('Aqui puedes crear los koders')
        console.log("Aqui puedes crear los koders")
    } else {
        response.statusCode = 400
        response.write('No se que hacer, ayuda')
        console.log("No se que hacer, ayuda")
    }
    // response.write('Hello World!')
    response.end('\nSe termino el programa')
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})