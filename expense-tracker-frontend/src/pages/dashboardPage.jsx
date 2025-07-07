import React from 'react'
import ExpenseList from '../components/expenseStats'
import { Calendar, Filter, Plus, TrendingUp, TrendingDown, DollarSign, CreditCard, Home, Car, ShoppingCart, Utensils, Heart, Gamepad2, Search, Download, Eye } from 'lucide-react';

import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      <div className="bg-white/80 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                Expense Tracker
              </h1>
              <p className="text-gray-600">Manage your finances efficiently</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <Link to='/expense'>
                <Plus className="w-4 h-4 mr-2" />
                Add Expense
                </Link>
              </button>
              <button className="bg-white/70 text-gray-800 px-4 py-2 rounded-lg border border-green-300/50 hover:bg-white/90 transition-all duration-300 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <ExpenseList/>
        </div>
  </div>
  )
}

export default DashboardPage

