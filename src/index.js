const express = require('express');//Requerimos el modulo express
const morgan = require('morgan');
const app = express();

//app.use(express.static('public'));//La carpeta public puede ser accedida desde el mismo navaegador

//Settings
app.set('appname','My first express app');
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.post("/", (req, res) =>{
    res.send("<h1>Bienvenido a la apit con node y mysql</h1>");
});

app.use('/api/',require('./routes/employees'));



//Iniciamos el servidor
app.listen(app.get('port'),()=>{
    console.log(app.get('appname'));
    console.log(`listening on port ${app.get('port')}`);
})