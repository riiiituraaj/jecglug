
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Sponsors', path: '/sponsors' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="floating-nav glass-strong rounded-full px-4 md:px-6 py-3 shadow-2xl">
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* GLUG Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img 
            src="/lovable-uploads/0af0e1ac-0b00-4ec7-9345-8b9c530df949.png" 
            alt="GLUG Logo" 
            className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg transition-all duration-300 hover:scale-110"
          />
        </Link>
        
        {/* Navigation Links */}
        <div className="flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-glug-blue text-white shadow-lg shadow-glug-blue-glow'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
