const express = require("express");

var User = require("../models/Users.js");

module.exports = app => {
  app.get("/", (req, res) => {
    var query = req.query;
    User.find(query, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
          console.log(user);
        res.json(user);
      }
    });
  });
  app.get("/:userid", (req, res) => {
    var query = req.params.userid;
    User.findById(req.params.userid, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(user);
        res.json(user);
      }
    });
  });

  app.post("/:userid", (req, res) => {
    console.log(req.params.userid);
    User.findById(req.params.userid, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        var userdb = new User(req.body);
        user.votepositive = userdb.votepositive;
        user.votenegative = userdb.votenegative;
        user.save();
        res.json(user);
      }
    });
  });
};
