const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/PostModel')

//config template Egine handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas
app.get('/', function(req, res){
    Post.all().then(function(posts){ //posts -> pode ser qualquer nome
        res.render('home', {postes: posts})
    })
})

app.get('/register', function(req, res){
    res.render('layouts/form')
})

app.post('/postlist', function(req, res){
    Post.create({
        title: req.body.title,
        comment: req.body.comment
    }).then(function(){
       // res.send("comment successfully created")  Sucess Page
       res.redirect('/')
    }).catch(function(erro){
        res.send("Error found"+erro)
    }) 
})


// Server Doors
app.listen(8081, function(){
    console.log("connected to server http://localhost:8081")
})