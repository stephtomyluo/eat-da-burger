const connection = require("../config/connection.js");

const orm = {
    all: function(tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}

module.exports = orm;
