'use strict';

const fs = require('fs');
const express = require('express');
const authRouter = express.Router();

const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer')
const permissions = require('./middleware/acl.js')



authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  try{
      const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
  }catch(error){
    console.log(`Error found ${error}`);
  }

});

authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  try{
      const users = await User.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
  }catch(error){
    console.log(`Error found ${error}`);
  }
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  try{
      res.status(200).send('Welcome to the secret area')
  }catch(error){
    console.log(`Error found ${error}`);
  }
});


module.exports = authRouter;
