const albumsController = {};

  albumsController.GET = (req, res) => {
    console.log('album GET');
    res.json({
      message: 'album GET'
    })
  },

  albumsController.POST = (req, res) => {
    console.log('album POST');
    console.log('req.body = ', req.body);
    res.json({
      message: 'album POST'
    })
  }

module.exports = {
  albumsController: albumsController
}
