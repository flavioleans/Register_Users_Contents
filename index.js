const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

//config template Egine handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//connection DB
const sequelize = new Sequelize('register_users', 'root', 'admin', {
    host: "localhost",
    dialect: 'mysql'
})

//Rotas
app.get('/register', function(req, res){
    res.render('layouts/form')
})

app.post('/postlist', function(req, res){
    res.send("Texto: "+req.body.title+" Comentário: "+req.body.content)
})

//Models
const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    mail: {
        type: Sequelize.STRING
    }
})

app.listen(8081, function(){
    console.log("connected to server http://localhost:8081")
})