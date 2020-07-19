// server.js
const express = require('express');
const path = require('path');

const app = express();

// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }

// app.use(forceSSL());

app.use(express.static('./dist/notes-app'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/notes-app'});
});
