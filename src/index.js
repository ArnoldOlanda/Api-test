const express = require('express');//Requerimos el modulo express
const morgan = require('morgan');//Morgan muestra en consolo los estados de las peticiones
const cors = require('cors'); //El modulo cors implementa la configuracion de cors para acceder a la api

const app = express();


//Settings
app.set('appname','My first express api');
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.get("/", (req, res) =>{
    res.send("Conected succesfully");
});

app.use('/api/employees',require('./routes/employees'));


//Iniciamos el servidor
app.listen(app.get('port'),()=>{
    console.log(app.get('appname'));
    console.log(`listening on port ${app.get('port')}`);
})

//app.use(express.static('public'));//La carpeta public puede ser accedida desde el mismo navaegador