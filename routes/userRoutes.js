const express = require("express");
const router = express.Router();

const User = require("../models/userModel")

// Routes for Users
router.get("/api/users", (req, res) => {
    User.find()
      .then((item) => {
        console.log(item);
        res
          .status(200)
          .json({ message: "Item fetched successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  });
  
  router.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    User.find({ _id: id })
      .then((item) => {
        console.log(item);
        res
          .status(200)
          .json({ message: "Item fetched successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  });
  
  router.post("/api/users", (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser
      .save()
      .then((item) => {
        console.log(item);
        res.status(201).json({ message: "Item added successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  });
  
  router.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((item) => {
        console.log(item);
        res
          .status(203)
          .json({ message: "Item Fetched Successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  });
  
  router.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove(id)
      .then((item) => {
        console.log(item);
        res
          .status(203)
          .json({ message: "Item Fetched Successfully", data: item });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  });

  module.exports = router;

