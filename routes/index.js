var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
require('../models/Points');

router.get('/', function(req,res,next) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return res.render(body) // Show the HTML for the Google homepage.

      var newPoint = new Points({ id: 1239,
        name: "test",
        type: "type",
        location: { latitude: 123.343,
          longitude: -34.454
        },
        metrics:[{  id:"this_is_my_id",
          name: "name"},
          {  id: "is",
            name: "nam"}

        ],
        classes: ["one",
          "two",
          "three" ] });


      db.Points.insert(P);
    }
  })});



module.exports = router;
