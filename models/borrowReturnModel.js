const mongoose = require('mongoose');

const borrowReturnSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date },
  fineStatus: { type: Boolean, default: false },
  returned: { type: Boolean, default: false }
});

const BorrowReturn = mongoose.model('BorrowReturn', borrowReturnSchema);

module.exports = BorrowReturn;
