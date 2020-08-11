const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname,'build')));

app.get("/",(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname,"build","index.html"));
});
app.get("/nosotros",(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname,"build","index.html"));
});
app.get("/contacto",(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname,"build","index.html"));
});
app.get("/propiedad/:id",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"));
})
app.get("/propiedades",(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname,"build","index.html"));
});
app.get("/propiedad/:id",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"));
});
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname,"build","index.html"));
});

app.listen(4200);
