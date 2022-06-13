var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log(req)
    res.json({ name: "boy" })
});
router.get('/about', function(req, res, next) {
    //   res.send('sid');
    console.log(req)
    res.json({ name: "unknown person" })
});

module.exports = router;