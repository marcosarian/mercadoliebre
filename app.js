const express= require('express');
const path= require ("path");



const app=express();
app.use(express.static('public'));


app.listen(3007,()=>{console.log(" servidor corriendo")});

app.get('/', (req,res)=>{res.sendFile (path.join (__dirname,"view/home.html"))})
app.get('/login', (req,res)=>{res.sendFile (path.join (__dirname,"view/login.html"))})
