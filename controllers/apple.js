var apple = require('../models/apple');
// List of all apples


    
exports.apple_list = async function(req, res) {
    try{
    theapples = await apple.find();
    res.send(theapples);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific apple.
/*
exports.apple_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: apple detail: ' + req.params.id);
};*/
// Handle apple create on POST.

exports.apple_create_post = async function(req, res) {
    console.log(req.body)
    let document = new apple();
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
    theapples = await apple.find();
    res.render('apple', { title: 'apple Search Results', results: theapples });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // for a specific apple.
exports.apple_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await apple.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    //Handle apple update form on PUT.
    exports.apple_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await apple.findById( req.params.id)
    // Do updates of properties
    if(req.body.apple_name)
    toUpdate.apple_name = req.body.apple_name;
    if(req.body.apple_price) toUpdate.apple_price = req.body.apple_price;
    if(req.body.apple_weight) toUpdate.apple_weight = req.body.apple_weight;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle apple delete on DELETE.
    exports.apple_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await apple.findByIdAndDelete( req.params.id)
    console.log("Removed " + result) 
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
    exports.apple_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await apple.findById( req.query.id)
    res.render('appledetail',
    { title: 'apple Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };  

    // Handle building the view for creating a apple.
// No body, no in path parameter, no query.
// Does not need to be async
exports.apple_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('applecreate', { title: 'apple Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);}};

    exports.apple_update_Page = async function(req, res) {
        console.log("update view for item "+req.query.id)
        try{
        let result = await apple.findById(req.query.id)
        res.render('appleupdate', { title: 'apple Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };

        exports.apple_delete_Page = async function(req, res) {
            console.log("Delete view for id " + req.query.id)
            try{
            result = await apple.findById(req.query.id)
            res.render('appledelete', { title: 'apple Delete', toShow:
            result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
       