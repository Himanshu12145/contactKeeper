const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all user contacts from the DB
// @access Public

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc Add a contact to the DB
// @access Private

router.post("/", (req, res) => {
  res.send("Add Contacts");
});

// @route PUT api/contacts/:id
// @desc Update  contact in the DB
// @access Private

router.put("/:id", (req, res) => {
  res.send("UPDATE contacts");
});
// @route DELETE api/contacts/:id
// @desc DELETE contacts from the DB
// @access Private

router.delete("/", (req, res) => {
  res.send("DELETE contacts");
});

module.exports = router;
