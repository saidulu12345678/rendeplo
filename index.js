const express = require("express")
const app = express()

app.get("/",(req,res)=>{

    res.send("root element api")
})

app.post('/product',(req,res)=>{
    res.send("product api")
})

var port = 3000;
app.listen(port,()=>{
    console.log('server reunning');
    
})