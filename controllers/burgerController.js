const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get('/', (req, res) => {

 
    burger.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
})

router.put('/burgers/update', function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result)
    res.redirect('/')
  })
})

router.post('burgers/create', function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/')
  })
})


module.exports = router;
