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
app.post("/api/movie", (req, res) =>{
    console.log(req.params);
    console.log(req.body);
    res.send("Datos recibidos");
});
app.use('/api/',require('./routes/employees'));



//Iniciamos el servidor
app.listen(app.get('port'),()=>{
    console.log(app.get('appname'));
    console.log(`listening on port ${app.get('port')}`);
})