const express = require('express');//Requerimos el modulo express
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//app.use(express.static('public'));//La carpeta public puede ser accedida desde el mismo navaegador

//Settings
app.set('appname','My first express app');
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Configurar cabeceras y cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

//Routes
app.get("/", (req, res) =>{
    res.send("<h1>Bienvenido a la apit con node y mysql</h1>");
});

app.use('/api/',require('./routes/employees'));



//Iniciamos el servidor
app.listen(app.get('port'),()=>{
    console.log(app.get('appname'));
    console.log(`listening on port ${app.get('port')}`);
})