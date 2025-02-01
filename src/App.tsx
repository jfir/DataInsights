import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import EcommerceDashboard from './portfolio/ecommerce-dashboard';
import PredictiveSales from './portfolio/predictive-sales';
import HealthcareIntegration from './portfolio/healthcare-integration';
import FinancialRisk from './portfolio/financial-risk';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a2332]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/ecommerce-dashboard" element={<EcommerceDashboard />} />
          <Route path="/portfolio/predictive-sales" element={<PredictiveSales />} />
          <Route path="/portfolio/healthcare-integration" element={<HealthcareIntegration />} />
          <Route path="/portfolio/financial-risk" element={<FinancialRisk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;