const express = require('express');
const albumsRouter = express.Router();
const albumsController = require('../controllers').albumsController;

albumsRouter.get('/', albumsController.GET)
albumsRouter.get('/', albumsController.POST)

module.exports = {
  albumsRouter: albumsRouter
}
