var express = require('express');
var router = express.Router();
var gitHubApi = require ("github");


router.get('/getFollowers/:user', function(){


  var github = new GitHubApi({});

  github.users.getFollowersForUser({
    username:req.params.user}, function ( err, data) {
      res.json(data);
  });

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
