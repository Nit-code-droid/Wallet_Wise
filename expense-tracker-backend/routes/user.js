const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const authMiddleware = require('../middleware/authMiddleware');

// Get user profile (income, savings, budgets)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

// Update monthly income
router.post('/income', authMiddleware, async (req, res) => {
  try {
    const { monthlyIncome } = req.body;
    const user = await User.findById(req.user);
    user.monthlyIncome = monthlyIncome;
    await user.save();
    res.json({ msg: 'Monthly income updated', monthlyIncome });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update income' });
  }
});

// Update savings goal
router.post('/savings', authMiddleware, async (req, res) => {
  try {
    const { monthlySavingGoal } = req.body;
    const user = await User.findById(req.user);
    user.monthlySavingGoal = monthlySavingGoal;
    await user.save();
    res.json({ msg: 'Savings goal updated', monthlySavingGoal });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update savings goal' });
  }
});

// Update monthly budgets
router.post('/budgets', authMiddleware, async (req, res) => {
  try {
    const { monthlyBudgets } = req.body;  // array of { category, budget }
    const user = await User.findById(req.user);
    user.monthlyBudgets = monthlyBudgets;
    await user.save();
    res.json({ msg: 'Budgets updated', monthlyBudgets });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update budgets' });
  }
});

module.exports = router;
