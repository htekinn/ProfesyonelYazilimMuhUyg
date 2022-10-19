const express = require("express");
const app = express();
const middleware = function (req, res, next) {
    console.log("Yeni bir istek geldi.");
    next();
};
const middleware2= function (req, res, next){
    console.log("Post isteği için istek gönderildi.");
    next();
};
app.get("/hello",middleware,function(req,res){
    res.send("Merhaba get isteği attınız.");
});

app.post("/hello",middleware2,middleware,function(req,res){
    res.send("Merhaba post isteği attınız.");
});

app.put("/hello",middleware,function(req,res){
    res.send("Merhaba put isteği attınız.");
});

app.delete("/hello",middleware,function(req,res){
    res.send("Merhaba delete isteği attınız.");
});
app.listen(3000);

