
import React from 'react';
import Navigation from '../components/Navigation';
import TerminalSearch from '../components/TerminalSearch';
import Footer from '../components/Footer';

const Index = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-glug-blue rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-glug-green rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-glug-blue/50 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        <div className="text-center z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-glug-blue to-glug-green bg-clip-text text-transparent animate-fade-in">
            GLUG
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-tech animate-slide-in">
            Jorhat Engineering College
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Exploring Open Source. Building Together.
          </p>
          
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <TerminalSearch onSearch={handleSearch} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <button className="glass-strong px-8 py-4 rounded-lg font-mono text-glug-green border border-glug-green/30 hover:border-glug-green hover:shadow-lg hover:shadow-glug-green-glow transition-all duration-300">
              > join --team
            </button>
            <button className="glass-strong px-8 py-4 rounded-lg font-mono text-glug-blue border border-glug-blue/30 hover:border-glug-blue hover:shadow-lg hover:shadow-glug-blue-glow transition-all duration-300">
              > explore --events
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white">About GLUG</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                GNU/Linux Users Group at Jorhat Engineering College is a community of passionate developers, 
                designers, and tech enthusiasts dedicated to promoting open-source software and collaborative learning.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We organize workshops, hackathons, and tech talks to foster innovation and knowledge sharing 
                among students. Join us in our mission to explore the endless possibilities of open-source technology.
              </p>
            </div>
            <div className="glass-strong p-8 rounded-2xl">
              <div className="space-y-4 font-mono text-sm">
                <div className="text-glug-green">
                  <span className="text-gray-400">user@glug:</span>
                  <span className="text-white">~$ cat mission.txt</span>
                </div>
                <div className="text-gray-300 pl-4">
                  • Promote open-source culture<br/>
                  • Build technical skills<br/>
                  • Foster collaboration<br/>
                  • Create innovative solutions
                </div>
                <div className="text-glug-green">
                  <span className="text-gray-400">user@glug:</span>
                  <span className="text-white">~$ </span>
                  <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
