const express = require('express');
const app = express();
const bodyParser = require('body-Parser')
const port = 4000;

// users
// posts
// albums

app.use(bodyParser.json());
//is the same exact thing as:
// app.use(function(req,res,next) {
//   const body = '';
//   req.on('data', function(chunk) {
//     body += chunk;
//   })
//   req.on('end', function(){
//     req.body = JSON.parse(body);
//     next();
//   })
// })

const rootRouter = require('./routes').rootRouter;

app.use('/api', rootRouter);

app.listen(port);
console.log(`server listening on port ${port}`);
