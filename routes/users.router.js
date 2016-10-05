const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers').usersController;

usersRouter.get('/', usersController.GET);
usersRouter.get('/', usersController.POST);

module.exports = {
  usersRouter: usersRouter
}
