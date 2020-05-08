const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'some-description',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const stream = new CommentStream(r, { subreddit: "all", results: 25 });

stream.on("item", comment => {
  if (comment.body === 'nice') {
  comment.reply('very nice');
}
})
