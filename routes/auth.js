'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys } = require('humps');

const jwt = require('jsonwebtoken');

const passport = require('passport');
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;

passport.use(new MeetupStrategy({
    clientID: process.env.MEETUP_KEY,
    clientSecret: process.env.MEETUP_SECRET,
    callbackURL: "http://localhost:8000/auth/meetup/callback"
  }, function (accessToken, refreshToken, profile, done) {
    return profile;
}));

router.get('/login/meetup', passport.authenticate('meetup'));

router.get('/login/meetup/callback', passport.authenticate('meetup', {
  failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
