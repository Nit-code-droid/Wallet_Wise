const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  isRecurring: { type: Boolean, default: false }  // you can add this if you want recurring expenses
});

module.exports = mongoose.model('Expense', ExpenseSchema);
