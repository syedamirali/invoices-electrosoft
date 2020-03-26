var PATH=require("path");
var express=require("express");
const PORT=process.env.PORT||8000;

var p=PATH.join(__dirname,"../public");
var app=express();
app.use(express.static(p));

app.get("*",(req,res)=>{
    res.sendFile(PATH.join(p,"index.html"));
})

app.listen(PORT,()=>{
    console.log("I am Up");
});

