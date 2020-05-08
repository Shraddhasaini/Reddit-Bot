require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

const streamOpts = {
    subreddit: 'testingground4bots',
    results: 25
};

const comments = client.CommentStream(streamOpts);
comments.on('comment', (comment) => {
  if (comment.body === 'nice') {
  comment.reply('very nice');
}
});
