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
switch(comment.body) {
  case 'nice':
    comment.reply('very nice');
    break;
  case ':(':
    comment.reply(':)');
    break;
	case 'Press F to pay respect':
		comment.reply('F');
		break;
	case 'Are you a bot?':
		comment.reply('Yes, I am a bot!');
		break;
	case 'Happy cake day':
		comment.reply('Happy Cake Day!');
}
})
