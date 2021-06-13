const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route GET api/contacts
// @desc Get all user contacts from the DB
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/contacts
// @desc Add a contact to the DB
// @access Private

router.post(
  "/",
  [auth, check("name", "Name is Required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

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
