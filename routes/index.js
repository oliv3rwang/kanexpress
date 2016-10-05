const express = require('express');
const usersRouter = require('./users.router').usersRouter;
const postsRouter = require('./posts.router').postsRouter;
const albumsRouter = require('./albums.router').albumsRouter;
const rootRouter = express.Router();

rootRouter.use('/users', usersRouter);
rootRouter.use('/posts', postsRouter);
rootRouter.use('/albums', albumsRouter)

module.exports = {
  rootRouter: rootRouter
}
