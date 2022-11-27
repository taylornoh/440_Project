const e = require("express");
const express = require("express");
const apiRoutes = express.Router();
const load = require("../instruction-db/load.json");
const store = require("../instruction-db/store.json");
const al = require("../instruction-db/a-and-l.json");

apiRoutes.route("/load/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  console.log(myquery._operation);
  for (var key in load) {
    if (key == myquery._operation) {
      return res.json(load[key]);
    }
  }

  return res.json("a corresponding load instruction does not exist");
});

apiRoutes.route("/store/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  console.log(myquery._operation);
  for (var key in store) {
    if (key == myquery._operation) {
      return res.json(store[key]);
    }
  }
  return res.json("a corresponding store instruction does not exist");
});

apiRoutes.route("/al/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  console.log(myquery._operation);
  for (var key in al) {
    if (key == myquery._operation) {
      return res.json(al[key]);
    }
  }
  res.json("a corresponding store instruction does not exist");
});

module.exports = apiRoutes;
