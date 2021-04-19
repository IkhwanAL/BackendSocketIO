const Sequelize = require('sequelize');

function getConn() {
    const sequelize = new Sequelize('chatapp', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

    sequelize.authenticate().then(() => { console.log('es') }).catch((er) => { console.error(er) });
    console.log("Established");
    return sequelize;
}

const sq = getConn();

module.exports = { sq }
