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
    autoGenerateUsername: true,
    scope: ['basic', 'rsvp']
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
    const providerAvatar = req.user.profile._json.photo.thumb_link;
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
                .where('provider_id', providerId);
            }
          });
      })
      .then((identities) => {
        res.cookie('providerId', identities[0].provider_id);
        res.cookie('userId', identities[0].user_id);
        res.cookie('loggedIn', 'true');
        res.redirect('/');
      })
      .catch((err) => {
        next(err);
      });
});

router.get('/meetup/events', (req, res, next) => {
  request('https://api.meetup.com/Learn-Code-Seattle/events?&sign=true&photo-host=public&page=2')
    .then((events) => {
      res.send(events)
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('providerId');
  res.clearCookie('userId');
  res.clearCookie('loggedIn');
  res.redirect('/');
});


module.exports = router;
