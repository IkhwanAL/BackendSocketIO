const express = require('express');
const Router = express.Router();
const { User } = require('../../Sequelize/Modal/user');
const { authLogin } = require('../../utils/check');

Router.get('/login', (req, res) => {
    User.sync();
    res.send('<h1>Hello Wordl</h1>');
})

Router.post('/login', authLogin, (req, res) => {

})

module.exports = Router;