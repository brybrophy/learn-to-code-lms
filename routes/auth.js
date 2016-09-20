'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys } = require('humps');

const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

const strategy = new OAuth2Strategy({
    authorizationURL: '	https://secure.meetup.com/oauth2/authorize',
    tokenURL: 'https://secure.meetup.com/oauth2/access',
    scope: 'ageless',
    clientID: process.env.MEETUP_KEY,
    clientSecret: process.env.MEETUP_SECRET,
    callbackURL: "http://localhost:8000/auth/meetup/callback"
  }, (accessToken, refreshToken, profile, done) => {
    done(null, {});
});

passport.use(strategy);

router.get('/meetup', passport.authenticate('oauth2'));

router.get('/meetup/callback', passport.authenticate('oauth2', {
  failureRedirect: '/login',
  successRedirect: '/',
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
