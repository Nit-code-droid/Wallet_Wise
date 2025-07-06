import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Expenses from './pages/expensePage';
import Dashboard from './components/Userstats';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path='/expense' element={<Expenses/>}/>

      </Routes>
    </Router>
  );
};

export default App;

