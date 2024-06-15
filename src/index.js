const express = require('express')

app = express()
const port = process.env.PORT | 8080

app.use((req,res,next)=>{
    const {method, path} = req;
    console.log(`Received a ${method} request on path ${path}`);
    next();
});

app.get('/',(req,res)=>{
    res.send("Hello, world")
})

app.get('/:name',(req,res)=>{
    res.send("Welcome to the dynamic route")
})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})