const http = require('http');


/* http.createServer((req, res) => {
    res.write('HOLA MUNDO');
    res.end();
}).listen(8080)


console.log('ESCUCHANDO EN {EL PUERTO 8080: 'application/json'} */

/* #Ejemplo de respuesta de una pagina web */

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: 'Axel',
            edad: 23,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    }).listen(8080)
    /* EJEMPLO DE UNA RESPUESTA EN FORMATO JSON  */


console.log('ESCUCHANDO EN EL PUERTO 8080')