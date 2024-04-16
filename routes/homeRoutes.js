const express = require("express");
const router = express.Router();

const Book = require("../models/bookModel")
const User = require("../models/userModel")

//let books = await Book.countDocuments()

router.get('/api/bookcount', async (req, res) => {
    try {
      const bookCount = await Book.countDocuments();
      const userCount = await User.countDocuments();
      
      res.json({ bookCount: bookCount, userCount: userCount,  });
    } catch (error) {
      console.error('Error counting books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;

