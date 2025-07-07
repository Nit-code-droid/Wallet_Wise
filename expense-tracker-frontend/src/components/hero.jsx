import React, { useState } from 'react';
import { Zap, Shield, Users, ArrowRight,Wallet, PieChart, Filter, BarChart4, Smile} from 'lucide-react';

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
     {
    icon: <Wallet className="w-6 h-6 text-green-600" />,
    title: "Effortless Expense Tracking",
    description: "Quickly log your daily expenses and stay in control of your spending habits.",
  },
  {
    icon: <PieChart className="w-6 h-6 text-yellow-500" />,
    title: "Visual Spending Insights",
    description: "Understand where your money goes with beautiful pie charts and trend analysis.",
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-purple-500" />,
    title: "Monthly Budget Progress",
    description: "Set budgets and track how much you've spent or saved each month.",
  },
  {
    icon: <Filter className="w-6 h-6 text-blue-500" />,
    title: "Smart Filters",
    description: "View your expenses by category or time range – last 7 days, 30 days, and more.",
  },
  {
    icon: <Smile className="w-6 h-6 text-pink-500" />,
    title: "Beautiful & Simple UI",
    description: "A clean, calming interface that makes managing money stress-free.",
  },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Track & Grow 
              <span className="block bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                Wallet Wise
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Helps you achieve your financial goals easily
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white/70 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 border border-green-300/50">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

 

<div className="absolute top-10 left-10 w-32 h-36 bg-green-500/60 rounded-full blur-xl animate-pulse z-0" />
<div className="absolute top-32 right-16 w-34 h-34 bg-yellow-400/60 rounded-full blur-xl animate-pulse z-0" />
<div className="absolute bottom-24 left-16 w-32 h-32 bg-pink-500/60 rounded-full blur-xl animate-pulse z-0" />
<div className="absolute bottom-10 right-1/8 w-36 h-36 bg-purple-500/60 rounded-full blur-xl animate-pulse z-0" />
<div className="absolute top-1/4 right-1/4 w-28 h-28 bg-emerald-500/60 rounded-full blur-xl animate-pulse z-0" />
<div className="absolute top-30 left-1/8 w-36 h-36 bg-purple-500/60 rounded-full blur-xl animate-pulse z-0" />


      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Wallet Wise?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dis cover the features that makes us the best platform to get insights to your expense.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-green-200/50 to-yellow-200/50 shadow-lg'
                    : 'bg-white/70 hover:bg-white/90'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
  
  <div className="grid md:grid-cols-3 gap-8 text-left">
    

    <div className="bg-gradient-to-br from-green-200/50 to-yellow-200/50 shadow-lg backdrop-blur-md rounded-2xl p-6 border border-green-200">
      <h3 className="text-xl font-semibold text-green-700 mb-2">1. Register / Login</h3>
      <p className="text-gray-700">Sign up or log in to your Wallet Wise account to get started securely.</p>
    </div>


    <div className="bg-gradient-to-br from-green-200/50 to-yellow-200/50 shadow-lg backdrop-blur-md rounded-2xl  p-6 border border-green-200">
      <h3 className="text-xl font-semibold text-green-700 mb-2">2. Update Expenses</h3>
      <p className="text-gray-700">Easily add your daily expenses with category, amount, and date.</p>
    </div>

    <div className="bg-gradient-to-br from-green-200/50 to-yellow-200/50 shadow-lg backdrop-blur-md rounded-2xl p-6 border border-green-200">
      <h3 className="text-xl font-semibold text-green-700 mb-2">3. Ready Reports & Insights</h3>
      <p className="text-gray-700">View charts, trends, and summaries of your spending. Track, plan, and enjoy financial peace!</p>
    </div>

  </div>
</section>

    </div>
  );
};

export default Hero;
