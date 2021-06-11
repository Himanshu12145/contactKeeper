const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Get a loggedIn  user
// @access Private

router.get("/", (req, res) => {
  res.send("Get a logged in user displayed here ");
});

// @route POST api/auth
// @desc Auth User and get token
// @access Public

router.post("/", (req, res) => {
  res.send("Login User ");
});

module.exports = router;
