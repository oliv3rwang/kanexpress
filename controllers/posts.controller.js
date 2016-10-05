const postsController = {};

  postsController.GET = (req, res) => {
    console.log('post GET');
    res.json({
      message: 'post GET'
    })
  },

  postsController.POST = (req, res) => {
    console.log('post POST');
    console.log('req.body = ', req.body);
    res.json({
      message: 'post POST'
    })
  }

module.exports = {
  postsController: postsController
}
