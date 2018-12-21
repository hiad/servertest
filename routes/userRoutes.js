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
    var query = req.query;
    User.findById(req.params.userid, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
          console.log(user);
        res.json(user);
      }
    });
  });

  app.post("/", (req, res) => {
    var user = new User(req.body);
    user.save();
    res.status(201).send(user);
  });

  app.post("/:userid", (req, res) => {
    User.findById(req.params.userid, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(user);
      }
    });
  });
};
