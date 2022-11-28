const express = require("express");
const apiRoutes = express.Router();
const load = require("../instruction-db/load.json");
const store = require("../instruction-db/store.json");
const al = require("../instruction-db/a-and-l.json");
const branch = require("../instruction-db/branch.json");
const comparison = require("../instruction-db/comparison.json");
const constManip = require("../instruction-db/const-manip.json");
const dataMov = require("../instruction-db/data-movement.json");
const ei = require("../instruction-db/e-and-i.json");
const jump = require("../instruction-db/jump.json");

apiRoutes.route("/load/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in load) {
    if (key == myquery._operation) {
      return res.json(load[key]);
    }
  }

  return res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/store/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in store) {
    if (key == myquery._operation) {
      return res.json(store[key]);
    }
  }
  return res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/al/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in al) {
    if (key == myquery._operation) {
      return res.json(al[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/branch/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in branch) {
    if (key == myquery._operation) {
      return res.json(branch[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/comparison/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in comparison) {
    if (key == myquery._operation) {
      return res.json(comparison[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/constManip/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in constManip) {
    if (key == myquery._operation) {
      return res.json(constManip[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/dataMov/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in dataMov) {
    if (key == myquery._operation) {
      return res.json(dataMov[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});

apiRoutes.route("/ei/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in ei) {
    if (key == myquery._operation) {
      return res.json(ei[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});
apiRoutes.route("/jump/:operation").get(function (req, res) {
  let myquery = { _operation: req.params.operation };
  for (var key in jump) {
    if (key == myquery._operation) {
      return res.json(jump[key]);
    }
  }
  res.json("a corresponding instruction does not exist");
});
module.exports = apiRoutes;
