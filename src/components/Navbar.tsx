import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1a2332] text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BarChart2 className="h-8 w-8 text-[#00ff44]" />
          <span className="text-xl font-bold">DataInsights</span>
        </Link>
        
        <div className="flex space-x-8">
          <Link 
            to="/" 
            className={`hover:text-[#00ff44] transition-colors ${
              location.pathname === '/' ? 'text-[#00ff44]' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`hover:text-[#00ff44] transition-colors ${
              location.pathname === '/services' ? 'text-[#00ff44]' : ''
            }`}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className={`hover:text-[#00ff44] transition-colors ${
              location.pathname === '/portfolio' ? 'text-[#00ff44]' : ''
            }`}
          >
            Portfolio
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-[#00ff44] transition-colors ${
              location.pathname === '/about' ? 'text-[#00ff44]' : ''
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;