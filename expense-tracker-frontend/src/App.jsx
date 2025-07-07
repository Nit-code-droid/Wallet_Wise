import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Expenses from './pages/expensePage';
import Dashboard from './components/Userstats';
import Landing from './pages/landing';
import DashboardPage from './pages/dashboardPage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<DashboardPage />} />
        <Route path='/expense' element={<Expenses/>}/>

      </Routes>
    </Router>
  );
};

export default App;

