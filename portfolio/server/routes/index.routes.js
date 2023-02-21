const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/portfolio", (req, res, next) => {
  res.json("Here is my portfolio");
});

router.get("/about", (req, res, next) => {
  res.json("About me...");
});

router.get("/contact", (req, res, next) => {
  res.json("Contact me!");
});

module.exports = router;
