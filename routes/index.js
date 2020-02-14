var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("knowledge", { title: "Express" });
});
router.get("/:title", function(req, res, next) {
  var title = req.params.title;
  res.render("index", { title: title });
});

router.get("/about", function(req, res, next) {
  res.render("about", { title: "Express" });
});

router.get("/history", function(req, res, next) {
  res.render("history", { title: "Express" });
});

router.get("/philosophy", function(req, res, next) {
  res.render("philosophy", { title: "Express" });
});
/////////////////////philosophy articles///////////////////////////
router.get("/knowledge", function(req, res, next) {
  res.render("knowledge", { title: "Express" });
});

router.get("/politics", function(req, res, next) {
  res.render("politics", { title: "Express" });
});

router.get("/science", function(req, res, next) {
  res.render("science", { title: "Express" });
});

router.get("/economics", function(req, res, next) {
  res.render("economics", { title: "Express" });
});

module.exports = router;
