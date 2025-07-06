const jwt = require('jsonwebtoken');
const User = require('../models/Users'); // ✅ make sure path is correct

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Fetch full user from DB
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user = user; // ✅ full user object
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
