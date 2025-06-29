
import React from 'react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="/team" className="text-gray-400 hover:text-white transition-colors">Team</a>
            <a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a>
            <a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
            <a href="/sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm">
              Built with ♥ by GLUG, JEC
            </p>
            <p className="text-glug-green font-mono text-xs mt-1">
              glug@jec:~$
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
