const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Expense = require('../models/Expense');

// ✅ GET /api/expenses
router.get('/', authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});


router.post('/', authMiddleware, async (req, res) => {
  const { amount, category, description, date, isRecurring } = req.body;

  if (!amount || !category) {
    return res.status(400).json({ message: 'Amount and category are required' });
  }

  try {
    const expense = new Expense({
      user: req.user._id,
      amount,
      category,
      description,
      date: date || Date.now(),
      isRecurring
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add expense', error: error.message });
    console.error('Error in POST /api/expenses:', error);
 
  }
});

// ❌ Delete an expense
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await Expense.deleteOne({ _id: expense._id }); // ✅ Fix applied

    res.status(200).json({ message: 'Expense deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete expense' });
  }
});



module.exports = router;
