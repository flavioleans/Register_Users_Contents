const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//config template Egine handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas
app.get('/register', function(req, res){
    res.render('layouts/form')
})

app.post('/postlist', function(req, res){
    res.send("Title: "+req.body.title+" Description: "+req.body.comment)
})


// Server Doors
app.listen(8081, function(){
    console.log("connected to server http://localhost:8081")
})