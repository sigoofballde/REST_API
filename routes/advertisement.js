'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');

/* GET advertisement. */
router.get('/', function (req, res) {
    /*API for advertisement. If query is requesting text then we send back URL, if
    **query is requesting image then we send back image. For real world scenario we would
    **do request for text &* image from database and then stream those down.*/
    if (req.query.hasOwnProperty("text")) {
        res.send("https://www.hire_me.com");
    }
    if (req.query.hasOwnProperty("img")) {
        res.sendFile(path.resolve('./public/image/j.jpg'));
    }
});

module.exports = router;