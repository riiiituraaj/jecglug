
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
    <nav className="floating-nav glass-strong rounded-full px-6 py-3 shadow-2xl">
      <div className="flex space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-glug-blue text-white shadow-lg shadow-glug-blue-glow'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
