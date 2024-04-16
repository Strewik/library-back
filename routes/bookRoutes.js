const express = require("express");
const router = express.Router();

const Book = require("../models/bookModel")
// Routes for books
router.get("/api/books", (req, res) => {
  Book.find()
    .then((item) => {
      console.log(item);
      res
        .status(201)
        .json({ message: "books Fetched Successfully!", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  Book.find({ _id: id })
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

router.post("/api/books", (req, res) => {
  const newBook = new Book(req.body);
  newBook
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

router.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  Book.findByIdAndUpdate(id, req.body, { new: true })
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

router.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  Book.findByIdAndRemove(id)
    .then((item) => {
      res.status(203).json({ message: "Deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

module.exports = router;
