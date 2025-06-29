
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  status: 'upcoming' | 'past';
  image?: string;
  tags: string[];
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'HackVita 4.0',
      date: '2024-03-15',
      description: 'Annual hackathon focusing on innovative solutions using open-source technologies.',
      status: 'upcoming',
      tags: ['hackathon', 'coding', 'innovation']
    },
    {
      id: 2,
      title: 'Linux Workshop Series',
      date: '2024-02-20',
      description: 'Comprehensive workshop covering Linux fundamentals, shell scripting, and system administration.',
      status: 'upcoming',
      tags: ['workshop', 'linux', 'learning']
    },
    {
      id: 3,
      title: 'Open Source Contribution Drive',
      date: '2024-01-10',
      description: 'Month-long initiative to encourage students to contribute to open-source projects.',
      status: 'upcoming',
      tags: ['opensource', 'contribution', 'github']
    },
    {
      id: 4,
      title: 'HackVita 3.0',
      date: '2025-03-30',
      description: 'Successfully concluded hackathon with 200+ participants and innovative project showcases.',
      status: 'past',
      tags: ['hackathon', 'success', 'innovation']
    },
    {
      id: 5,
      title: 'Git & GitHub Masterclass',
      date: '2023-10-25',
      description: 'Intensive session on version control systems and collaborative development workflows.',
      status: 'past',
      tags: ['git', 'github', 'collaboration']
    },
    {
      id: 6,
      title: 'Cybersecurity Awareness',
      date: '2023-09-15',
      description: 'Educational event covering cybersecurity best practices and ethical hacking fundamentals.',
      status: 'past',
      tags: ['security', 'hacking', 'education']
    }
  ];

  const filteredEvents = events.filter(event => event.status === activeTab);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTerminalCommand = (event: Event) => {
    return `> ${event.title.toLowerCase().replace(/\s+/g, '')} --recap`;
  };

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      <div className="pt-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-glug-green bg-clip-text text-transparent">
              Events
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our upcoming events and explore the exciting activities we've organized for the community.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-strong rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-glug-blue text-white shadow-lg shadow-glug-blue-glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-glug-green text-white shadow-lg shadow-glug-green-glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="glass-strong rounded-2xl overflow-hidden hover:border-glug-blue/30 transition-all duration-500 group cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Event Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-glug-blue/20 to-glug-green/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {event.status === 'upcoming' ? '🚀' : '✅'}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' 
                        ? 'bg-glug-blue/20 text-glug-blue border border-glug-blue/30'
                        : 'bg-glug-green/20 text-glug-green border border-glug-green/30'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-glug-blue transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-mono">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Terminal Command */}
                  {hoveredEvent === event.id && (
                    <div className="glass rounded-lg p-3 font-mono text-sm animate-fade-in">
                      <span className="text-glug-green">$ </span>
                      <span className="text-white">{getTerminalCommand(event)}</span>
                      <span className="text-glug-green animate-pulse ml-1">█</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="glass p-8 rounded-2xl max-w-md mx-auto">
                <p className="text-gray-400 text-lg">
                  No {activeTab} events found.
                </p>
                <p className="text-sm text-gray-500 mt-2 font-mono">
                  $ check --later
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
