import React, { useState } from 'react';
import { Zap, Shield, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Safe",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Grow & Save
              <span className="block bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                With Wallet Wise
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

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-300/30 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
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
    </div>
  );
};

export default Hero;
