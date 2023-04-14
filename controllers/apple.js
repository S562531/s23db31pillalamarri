var Apple = require('../models/apple');
// List of all apples
exports.apple_list = async function(req, res) {
    try{
    theapples = await Apple.find();
    res.send(theapples);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific apple.
exports.apple_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: apple detail: ' + req.params.id);
};
// Handle apple create on POST.

exports.apple_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Apple();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"apple_name":"Green apple", "apple_price":12, "apple_weight":65}
    document.apple_name = req.body.apple_name;
    document.apple_price = req.body.apple_price;
    document.apple_weight = req.body.apple_weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle apple delete form on DELETE.
exports.apple_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: apple delete DELETE ' + req.params.id);
};
// Handle apple update form on PUT.
exports.apple_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: apple update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.apple_view_all_Page = async function(req, res) {
    try{
    theapples = await Apple.find();
    res.render('apple', { title: 'Apple Search Results', results: theapples });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };