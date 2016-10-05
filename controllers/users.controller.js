const usersController = {};

  usersController.GET = (req, res) => {
    console.log('users GET');
    res.json({
      message: 'users GET'
    })
  },

  usersController.POST = (req, res) => {
    console.log('users POST');
    console.log('req.body = ', req.body);
    res.json({
      message: 'users POST'
    })

  }

module.exports = {
  usersController: usersController
}
