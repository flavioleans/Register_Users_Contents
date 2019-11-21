//chamando a conexão com o banco
const db = require('./db')

const User = db.sequelize.define('users', {
    name: {
        type: db.Sequelize.STRING
    },
    lastname: {
        type: db.Sequelize.STRING
    },
    age: {
        type: db.Sequelize.INTEGER
    },
    mail: {
        type: db.Sequelize.STRING
    }
})

module.exports = User