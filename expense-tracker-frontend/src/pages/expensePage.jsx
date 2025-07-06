// src/pages/Expenses.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenses,
  addExpense,
  deleteExpense
} from '../redux/expenseSlice';

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
    <div  >
      <div className='max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-8'>
      <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>Add New Expense</h2>
      <form onSubmit={handleSubmit}  className='space-y-4 mb-6'>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
        <select name="category" value={formData.category} onChange={handleChange} required>
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
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <label className='flex items-center space-x-2 text-gray-700'>
          <input
            type="checkbox"
            name="isRecurring"
            checked={formData.isRecurring}
            onChange={handleChange}
            className='form-checkbox h-5 w-5 text-blue-600 rounded'
          />
          <span>Recurring?</span>
        </label>
        <br />
        <button type="submit" className='w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'>Add Expense</button>
      </form>
    </div>

      <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>Your Expenses</h2>
      {loading && <p className='text-center text-gray-600'>Loading expenses...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {expenses.length === 0 ? (
        <p className='text-center text-gray-500'>No expenses recorded yet.</p>
      ) : (
        <ul className='space-y-3'>
          {expenses.map((exp) => (
            <li className='flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm' key={exp._id}>
              <span className='text-gray-800'> 
              ₹{exp.amount} - {exp.category} ({new Date(exp.date).toLocaleDateString()})
              {exp.description && `: ${exp.description}`}
              </span>
              <button onClick={() => handleDelete(exp._id)} style={{ marginLeft: '10px' }} className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expenses;
