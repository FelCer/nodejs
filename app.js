const express = require('express');
const app = express();
var arreglo = [
    {'usuario':'angelica','ciudad':'bogota','pais':'colombia'},
    {'usuario':'angelica','ciudad':'bogota','pais':'colombia'}
];

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.send(arreglo);
// });
app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.send(arreglo);
    //res.send('Hola mundo desde el sena');
    });


module.exports = app;