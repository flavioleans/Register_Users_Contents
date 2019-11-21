const Sequelize = require('sequelize')

//connection DB
const sequelize = new Sequelize('register_user', 'root', 'admin', {
    host: "localhost",
    dialect: 'mysql'
})

//exportando arquivos de conexão
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

