const mysql = require('mysql');
const mysqlConnection = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'be19873b9859ad',
    password: 'a0b7b6d9',
    database: 'heroku_1afd92976209ef6'
});

// mysqlConnection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }else
//         console.log('Database connected');
// })

module.exports = mysqlConnection;
//Cadena de conexion
//mysql://be19873b9859ad:a0b7b6d9@us-cdbr-east-03.cleardb.com/heroku_1afd92976209ef6?reconnect=true