const express = require('express');
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public')); /* #Para mostrar contenido estatico html en este caso si entramos a localhost:3000 mostrar el index para mostrar el home debemos entrar a localhost:3000/home.html */

//Se carga el path de los parciales
hbs.registerPartials(__dirname + '/views/partials')
    // EXPRESS HBS ENGINE
app.set('view engine', 'hbs'); //se carga el motor de templatespor defecto




app.get('/', (req, res) => {
    res.render('home', {
        name: "axel correa"
    }); //se renderiza el archivo .hbs que se llama home
})


app.get('/about', (req, res) => {
        res.render('about'); //se renderiza el archivo .hbs que se llama home
    })
    /* app.get('/', (req, res) => {
            let salida = {
            nombre: 'Axel',
            edad: 23,
            url: req.url
        }

        res.send(salida);

        })
         */
    /* EJEMPLO DE RESPUESTA JSON CON express */

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));



// nodemon app -e js,hbs,html,css       #para que nodemon este pendiente a los cambio que se producen en los archivos con esa extension

//para subir el proyecto a HEROKU se debe crear el script start en el package.json, se debe inicializar el proyecto en git y hacer los commit necesarios, se debe ejecutar si es por primera vez el comando: heroku login #para logearnos
// luego se debe ejecutar heroku git:remote -a <nombreProyHeroku> para asociar el repo de heroku, y al final hacer push heroku master
//luego para abrir la pagina hacer heroku open

//heroku git:clone -a <nombreProyHeroku> si queremos clonar el proyecto que subimos