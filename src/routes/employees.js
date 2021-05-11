const express = require('express');
const router = express.Router();
//Requerimos el modulo database 
const mysqlConnection = require('../database');

router.get('/',(req, res) => {//Solicitar todos los registros de la tabla de la base de datos

    mysqlConnection.query('SELECT * FROM employees',(err,rows,fields) => {//.query recibe un callback
        if(!err) res.json(rows);
        else console.log(err);
    });
});

router.get('/:id',(req, res) => {//Solicitar solo un registro de la db

    const { id } = req.params;

    mysqlConnection.query('SELECT * FROM employees where id=?',[id],(err,rows,fields) => {
        if(!err) res.json(rows[0]);
        else console.log(err);
    });
});

router.post('/add',(req, res) => {//Envia un json con los datos para ingresar en la db

    const {name,salary} = req.body;

    mysqlConnection.query('INSERT INTO employees (name, salary) VALUES (?, ?)',[name,salary],(err) => {
        if(!err) res.json({title:"Data inserted"});
        else res.json(err);
    });
    
});

router.put('/update/:id',(req, res) => { //Actualizar un registro

    const id = req.params.id;
    const {name,salary} = req.body;

    mysqlConnection.query('UPDATE employees SET name = ?, salary = ? WHERE id = ?',[name,salary,id],(err) => {
        if(!err) res.json({title:"Updated"});
        else res.json(err);
    });

});
router.delete('/delete/:id',(req, res) =>{ //Eliminar un registro
    
    const id = req.params.id;

    mysqlConnection.query('DELETE from employees WHERE id=?',[id],(err) => {
        if(!err) res.json({title:"Deleted"});
        else res.json(err);
    });

});


module.exports = router;
