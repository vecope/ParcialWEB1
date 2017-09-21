var express = require('express');
var router = express.Router();

/* GET home page. */
var GitHubApi = require("github");

router.get('/followers/:user', function(req, res, next) {

    var github = new GitHubApi({});

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
