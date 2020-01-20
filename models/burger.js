const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
