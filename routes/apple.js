// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('apple', { title: 'Search Results Apple' });
// });

// module.exports = router;
var express = require('express');
const apple_controlers= require('../controllers/apple');
var router = express.Router();
/* GET apples */
// GET request for one apple.
router.get('/', apple_controlers.apple_detail);

router.get('/detail', apple_controlers.apple_view_one_Page);
/* GET create apple page */
router.get('/create', apple_controlers.apple_create_Page);

router.get('/update', apple_controlers.apple_update_Page);

router.get('/delete', apple_controlers.apple_delete_Page);

module.exports = router;

