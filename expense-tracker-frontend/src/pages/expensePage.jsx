// src/pages/Expenses.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenses,
  addExpense,
  deleteExpense
} from '../redux/expenseSlice';
import { Link } from 'react-router-dom';

const Expenses = () => {
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expense);

  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: '',
    isRecurring: false
  });

  // Fetch expenses on first render
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category) {
      alert('Amount and category are required');
      return;
    }
    await dispatch(addExpense(formData));
    dispatch(fetchExpenses()); // 🔁 auto-refresh
    setFormData({ amount: '', category: '', description: '', date: '', isRecurring: false }); // reset form
  };

  const handleDelete = async (id) => {
    await dispatch(deleteExpense(id));
    dispatch(fetchExpenses()); // 🔁 auto-refresh
  };



 return (
  <div className='min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-8 px-4'>
    <Link
  to="/profile"
  className="inline-block bg-gradient-to-r from-green-500 to-yellow-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-yellow-500 transition-all duration-300"
>
  Go to Dashboard
</Link>
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-2 my-2'>

      {/* Form Section */}
      <div className='bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-green-200/50'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Add New Expense</h2>
        <form onSubmit={handleSubmit} className='space-y-4 mb-6'>
          <label className="block text-gray-700 text-sm font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className='w-full px-3 py-2 bg-white/70 border border-green-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
            required
          />

          <label className="block text-gray-700 text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 bg-white/70 border border-green-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Utilities">Utilities</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Education">Education</option>
            <option value="Rent">Rent</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Other">Other</option>
          </select>

          <label className="block text-gray-700 text-sm font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Optional"
            className='w-full px-3 py-2 bg-white/70 border border-green-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
          />

          <label className="block text-gray-700 text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className='w-full px-3 py-2 bg-white/70 border border-green-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
          />

          <label className='flex items-center space-x-2 text-gray-700'>
            <input
              type="checkbox"
              name="isRecurring"
              checked={formData.isRecurring}
              onChange={handleChange}
              className='form-checkbox h-5 w-5 text-green-600'
            />
            <span>Recurring?</span>
          </label>

          <button
            type="submit"
            className='w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300'
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Expense List Section */}
      <div>
        <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center md:text-left'>Your Expenses</h2>

        {loading && <p className='text-center text-gray-600'>Loading expenses...</p>}
        {error && <p className='text-center text-red-600'>{error}</p>}

        {expenses.length === 0 ? (
          <p className='text-center text-gray-500'>No expenses recorded yet.</p>
        ) : (
          <ul className='space-y-3 max-h-[70vh] overflow-y-auto pr-2'>
            {expenses.map((exp) => (
              <li
                key={exp._id}
                className='flex justify-between items-center bg-white/70 border border-green-300/50 p-4 rounded-xl shadow-sm hover:shadow-md transition'
              >
                <span className='text-gray-700'>
                  ₹{exp.amount} – <span className='font-medium'>{exp.category}</span><br />
                  <span className='text-sm text-gray-500'>
                    {new Date(exp.date).toLocaleDateString()}
                    {exp.description && `: ${exp.description}`}
                  </span>
                </span>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="ml-4 p-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

};

export default Expenses;
