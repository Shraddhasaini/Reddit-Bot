const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
var express = require("express");
var app = express();

const r = new Snoowrap({
	userAgent: 'some-description',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

app.get('/', function (req, res) {
  const stream = new CommentStream(r, { subreddit: "all", results: 25 });
  stream.on("item", res.send);
  //res.send(stream.on("item"));

});



const listener = app.listen(3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});