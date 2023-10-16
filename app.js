const express = require('express');
const app = express();
const PORT = 3030;
const path=require('path');

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>console.log(`Server esta corriendo en http://localhost:${PORT}`));


app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
//app.get('/home',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
