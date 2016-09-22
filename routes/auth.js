'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const passport = require('passport');
const MeetupStrategy = require('passport-oauth2-meetup').Strategy;
var request = require('request-promise');

const strategy = new MeetupStrategy({
    clientID: process.env.MEETUP_KEY,
    clientSecret: process.env.MEETUP_SECRET,
    callbackURL: "http://localhost:8000/auth/meetup/callback",
    autoGenerateUsername: true
  }, (accessToken, refreshToken, profile, done) => {
    return done(null, { profile, accessToken, refreshToken });
});

passport.use(strategy);

router.get('/meetup',
  passport.authenticate('meetup', {
    session: false
  }), (req, res) => {
    res.json(req.user);
});

router.get('/meetup/callback', passport.authenticate('meetup', {
  failureRedirect: '/login' }), (req, res, next) => {
    const meetupUsername = req.user.profile.username;
    const name = req.user.profile._json.name;
    const providerAvatar = req.user.profile._json.photo.highres_link;
    const providerId = req.user.profile.id;
    const providerRefToken = req.user.refreshToken;
    const providerType = req.user.profile.provider;
    const providerToken = req.user.accessToken;

    knex('users')
      .where('meetup_username', req.user.profile.username)
      .first()
      .then((result) => {
        if (!result) {
          const newUser = {
            meetupUsername,
            name
          }

          const userRow = decamelizeKeys(newUser);

          return knex('users').insert(userRow, '*');
        }

        return result;
      })
      .then((users) => {
        if (users[0]) {
          const newIdentity = {
            providerAvatar,
            providerId,
            providerRefToken,
            providerType,
            providerToken,
            userId: users[0].id
          }

          const identityRow = decamelizeKeys(newIdentity);

          return knex('identities').insert(identityRow, '*');
        }

        return knex('identities')
          .where('user_id', users.id)
          .first()
          .then((users) => {
            if (users) {
              const updateIdentity = {
                providerAvatar,
                providerId,
                providerRefToken,
                providerToken
              }

              const updateRow = decamelizeKeys(updateIdentity);

              return knex('identities')
                .update(updateRow, '*')
                .where('user_id', users.id);
            }
          });
      })
      .catch((err) => {
        next(err);
      });

    res.cookie('loggedIn', 'true');
    res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.cookie('loggedIn', 'false');
  res.redirect('/');
});


module.exports = router;
