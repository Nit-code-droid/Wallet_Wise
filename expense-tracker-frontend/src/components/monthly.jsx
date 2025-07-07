// components/MonthlyStats.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const MonthlyStats = () => {
  const { data: user } = useSelector((state) => state.user);
  const { expenses } = useSelector((state) => state.expense);

  const monthlyBudget = user?.monthlyBudget || 0;

  // Calculate current month total expenses
  const currentMonthTotal = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const now = new Date();
    const isSameMonth =
      date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();

    return isSameMonth ? acc + Number(expense.amount) : acc;
  }, 0);

  const remaining = monthlyBudget - currentMonthTotal;
  const usagePercent = monthlyBudget > 0
    ? Math.min((currentMonthTotal / monthlyBudget) * 100, 100).toFixed(1)
    : 0;

  return (
    <div className='bg-white/70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-green-200/50'>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Monthly Budget Overview</h3>

      <div className="mb-4">
        <div className="text-sm text-gray-700 mb-1">
          Spent: ₹{currentMonthTotal.toLocaleString()} / ₹{monthlyBudget.toLocaleString()}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              usagePercent >= 100 ? 'bg-red-400' : 'bg-green-400'
            }`}
            style={{ width: `${usagePercent}%` }}
          ></div>
        </div>
        <div className="text-sm mt-1 text-gray-600">
          {remaining >= 0
            ? `₹${remaining.toLocaleString()} left this month`
            : `Over budget by ₹${Math.abs(remaining).toLocaleString()}`}
        </div>
      </div>
    </div>
  );
};

export default MonthlyStats;
