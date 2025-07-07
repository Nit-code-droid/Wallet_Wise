import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';
import { Filter } from 'lucide-react';
import { Calendar, Plus, TrendingUp, TrendingDown, DollarSign, CreditCard, Home, Car, ShoppingCart, Utensils, Heart, Gamepad2, Search, Download, Eye } from 'lucide-react';
import CategoryPieChart from './piechart';
import MonthlyComparisonChart from './monthlycomparision';
import MonthlyStats from './monthly';


const ExpenseList = () => {
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expense);

  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30');






  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  useEffect(() => {
    let filtered = expenses;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(expense => expense.category === selectedCategory);
    }

    // Filter by time range
    const now = new Date();
    const daysAgo = new Date(now.getTime() - (parseInt(selectedTimeRange) * 24 * 60 * 60 * 1000));
    filtered = filtered.filter(expense => new Date(expense.date) >= daysAgo);

    setFilteredExpenses(filtered);
  }, [expenses, selectedCategory, selectedTimeRange]);

  // Category options dynamically
  const categories = [...new Set(expenses.map(e => e.category))].map(name => ({ name }));

  // Total
  const total = filteredExpenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  // Category-wise
  const categoryWise = filteredExpenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

//datewise aggregator
  const getMonthlyComparison = (expenses) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const lastYear = currentYear - 1;

  const monthlyTotals = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2000, i).toLocaleString('default', { month: 'short' }),
    current: 0,
    previous: 0,
  }));

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const amount = Number(expense.amount);

    if (year === currentYear) {
      monthlyTotals[month].current += amount;
    } else if (year === lastYear) {
      monthlyTotals[month].previous += amount;
    }
  });

  return monthlyTotals;
};

 const monthlyComparison = getMonthlyComparison(expenses); 


  return (
    <div>
      <MonthlyStats/>
      {/* Filters */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-green-200/50">
      
        <div className="flex flex-wrap gap-4 items-center">
     
         

          <div className="flex items-center">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filters:</span>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/70 border border-green-300/50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="bg-white/70 border border-green-300/50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="365">Last year</option>
          </select>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">Your Expenses</h2>

     

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div>
          {/* Total */}
          <div className="text-lg font-semibold bg-white/70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-green-200/50">
            Total Expense: ₹{total}
          </div>

           <CategoryPieChart data={categoryWise} />

          <MonthlyComparisonChart data={monthlyComparison} />


          {/* All Filtered Expenses */}
          <div className='bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-green-200/50'>
            <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
            <button className="text-green-600 hover:text-green-700 flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              View All
            </button>

          </div>
          <div className="space-y-4">
<ul className="space-y-4">
  {filteredExpenses.map((expense) => (
    <li
      key={expense._id || expense.id}
      className="flex justify-between items-start p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300 shadow-sm"
    >
      {/* Left: Description and metadata */}
      <div>
        <p className="text-base font-medium text-gray-800">{expense.description}</p>
        <p className="text-sm text-gray-600">
          {expense.category} • {new Date(expense.date).toLocaleDateString()}
        </p>
        {expense.isRecurring && (
          <p className="text-xs text-green-600">Recurring</p>
        )}
      </div>

      {/* Right: Amount */}
      <div className="text-right">
        <p className="text-base font-semibold text-gray-900">
          ₹{expense.amount.toFixed(2)}
        </p>
      </div>
    </li>
  ))}
</ul>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
