const express= require('express');
const cors = require('cors');
const app=express();
const rutas=require('./Routes/routes')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:'*',
    methods:'GET,POST'
}
));
console.log('Servidor en el puerto 3000')
app.use(rutas)
app.listen(3000)