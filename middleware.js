'use strict';

const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;

const checkAuth = function(req, res, next) {
  jwt.verify(req.cookies.accessToken, tokenSecret, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.token = decoded;
    next();
  });
};

module.exports = checkAuth;
