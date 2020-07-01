var express = require('express')

var app = express()

// app.get('/',function(req,res){
//     res.send("Hello World from server.js")
// })

app.use(express.static(__dirname+'/public/'))//__dirname automatically gets current dir

app.listen(3000)
console.log("Server up and running on 3000")

