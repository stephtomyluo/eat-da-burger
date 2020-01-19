const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");
router.get('/', (req, res) => {
    burger.all(function(burger_data){
        console.log(burger_data)
    })
    res.render('index')
})

module.exports = router;
