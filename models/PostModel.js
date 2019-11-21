//chamando a conexão com o banco
const db = require('./db')

//Models
const Post = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING
    },
    comment: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post