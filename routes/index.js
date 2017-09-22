var express = require('express');
var router = express.Router();

/* GET home page. */
var GitHubApi = require("github");
var GitHub = require('github-api');

router.get('/followers/:user', function(req, res, next) {

    var github = new GitHubApi({});
    var gh = new GitHub();

// check our rate-limit status
// since we're unauthenticated the limit is 60 requests per hour
    gh.getRateLimit().getRateLimit()
        .then(function(resp) {
            console.log('Limit remaining: ' + resp.data.rate.remaining);
            // date constructor takes epoch milliseconds and we get epoch seconds
            console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000));
        }).catch(function(error) {
        console.log('Error fetching rate limit', error.message);
    });


    github.users.getFollowingForUser({
        username: req.params.user
    }, function(err, data) {
        res.json(data)
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
