const express = require("express");
const app = express();
const middleware = function (req, res, next) {
    console.log("Yeni bir istek geldi.");
    next();
  };
app.get("/",middleware,function(req,res){
    res.send("Merhaba get isteği attınız.");
});

app.post("/hello",function(req,res){
    res.send("Merhaba post isteği attınız.");
});

app.put("/",function(req,res){
    res.send("Merhaba put isteği attınız.");
});

app.delete("/",function(req,res){
    res.send("Merhaba delete isteği attınız.");
});
app.listen(3003);

