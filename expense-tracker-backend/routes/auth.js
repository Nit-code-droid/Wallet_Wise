const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');    // ADD THIS
const jwt = require('jsonwebtoken');   // ADD THIS

// Register
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();
    res.json({ msg: 'User registered' });
  } catch (err) {
    console.error(err);  // add console for debugging
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        monthlyBudget: user.monthlyBudget,
      },
    });
  } catch (err) {
    console.error(err);  // add console for debugging
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
