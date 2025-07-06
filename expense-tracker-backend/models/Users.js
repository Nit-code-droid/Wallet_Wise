const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  monthlyIncome: { type: Number, default: 0 },
  monthlySavingGoal: { type: Number, default: 0 },
  monthlyBudgets: [
    {
      category: { type: String },
      budget: { type: Number }
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
