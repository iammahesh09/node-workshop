const express = require('express');

const routes = express.Router();

const userCtrl = require('../controllers/users.ctrl');

routes.get('/userslist', userCtrl.getusers)

module.exports = routes;