
import React, { useState, useEffect } from 'react';

interface TerminalSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const TerminalSearch: React.FC<TerminalSearchProps> = ({ 
  placeholder = "$ search glug --team --events --gallery",
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="glass-strong rounded-lg p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 font-mono">
          <span className="text-glug-green font-semibold">$</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-500 font-mono"
          />
          <span className={`text-glug-green font-bold ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            █
          </span>
        </div>
      </form>
    </div>
  );
};

export default TerminalSearch;
