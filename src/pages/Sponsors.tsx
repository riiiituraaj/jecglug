import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  event: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  website?: string;
}

const Sponsors = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Frint.in',
      logo: 'F',
      event: 'GLUG 2025-26 Session',
      tier: 'gold',
      website: 'https://frint.in'
    },
    {
      id: 2,
      name: 'Saurabhi Media',
      logo: 'SM',
      event: 'GLUG 2025-26 Session',
      tier: 'gold',
      website: 'https://saurabhimedia.com'
    },
    {
      id: 3,
      name: 'TechCorp Solutions',
      logo: 'T',
      event: 'HackVita 3.0',
      tier: 'platinum',
      website: 'https://techcorp.com'
    },
    {
      id: 4,
      name: 'DevForce Labs',
      logo: 'D',
      event: 'Linux Workshop Series',
      tier: 'silver',
      website: 'https://devforce.com'
    },
    {
      id: 5,
      name: 'CloudNine Systems',
      logo: 'C',
      event: 'Cybersecurity Awareness',
      tier: 'silver',
      website: 'https://cloudnine.com'
    },
    {
      id: 6,
      name: 'InnovateTech',
      logo: 'I',
      event: 'Open Source Drive',
      tier: 'bronze',
      website: 'https://innovatetech.com'
    },
    {
      id: 7,
      name: 'StartupHub',
      logo: 'S',
      event: 'Git Masterclass',
      tier: 'bronze',
      website: 'https://startuphub.com'
    },
    {
      id: 8,
      name: 'CodeCraft',
      logo: 'CC',
      event: 'Python Workshop',
      tier: 'bronze',
      website: 'https://codecraft.com'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'from-slate-200 to-slate-400';
      case 'gold':
        return 'from-yellow-400 to-yellow-600';
      case 'silver':
        return 'from-gray-300 to-gray-500';
      case 'bronze':
        return 'from-amber-600 to-amber-800';
      default:
        return 'from-glug-blue to-glug-green';
    }
  };

  const getTierGlow = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'shadow-slate-400/30';
      case 'gold':
        return 'shadow-yellow-400/30';
      case 'silver':
        return 'shadow-gray-400/30';
      case 'bronze':
        return 'shadow-amber-600/30';
      default:
        return 'shadow-glug-blue/30';
    }
  };

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      <div className="pt-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-glug-blue bg-clip-text text-transparent">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are grateful to our sponsors who support GLUG's mission and help us organize amazing events for the community.
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-12">
            {['platinum', 'gold', 'silver', 'bronze'].map((tier) => {
              const tierSponsors = sponsors.filter(sponsor => sponsor.tier === tier);
              if (tierSponsors.length === 0) return null;

              return (
                <div key={tier} className="glass-strong rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getTierColor(tier)} bg-clip-text text-transparent capitalize`}>
                      {tier} Sponsors
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-current to-transparent mx-auto opacity-30"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tierSponsors.map((sponsor, index) => (
                      <div
                        key={sponsor.id}
                        className={`glass p-6 rounded-xl border transition-all duration-500 cursor-pointer group animate-fade-in hover:shadow-2xl ${getTierGlow(sponsor.tier)}`}
                        style={{animationDelay: `${index * 0.1}s`}}
                        onMouseEnter={() => setHoveredSponsor(sponsor.id)}
                        onMouseLeave={() => setHoveredSponsor(null)}
                      >
                        <div className="text-center">
                          {/* Logo */}
                          <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getTierColor(sponsor.tier)} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                            {sponsor.logo}
                          </div>

                          {/* Sponsor Name */}
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glug-blue transition-colors">
                            {sponsor.name}
                          </h3>

                          {/* Event */}
                          <p className="text-gray-400 mb-4">
                            Supported: <span className="text-glug-green">{sponsor.event}</span>
                          </p>

                          {/* Tier Badge */}
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${getTierColor(sponsor.tier)} text-white`}>
                            {tier.toUpperCase()}
                          </div>

                          {/* Terminal Command on Hover */}
                          {hoveredSponsor === sponsor.id && (
                            <div className="mt-4 glass rounded-lg p-3 font-mono text-sm animate-fade-in">
                              <span className="text-glug-green">$ </span>
                              <span className="text-white">visit --{sponsor.name.toLowerCase().replace(/\s+/g, '').replace('.', '')}</span>
                              <span className="text-glug-green animate-pulse ml-1">█</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="glass-strong p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Partner with GLUG
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Join our mission to promote open-source culture and support the next generation of developers. 
                Partner with us to make a lasting impact on the tech community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="glass px-8 py-4 rounded-lg font-mono text-glug-blue border border-glug-blue/30 hover:border-glug-blue hover:shadow-lg hover:shadow-glug-blue-glow transition-all duration-300">
                  {'>'} become --sponsor
                </button>
                <button className="glass px-8 py-4 rounded-lg font-mono text-glug-green border border-glug-green/30 hover:border-glug-green hover:shadow-lg hover:shadow-glug-green-glow transition-all duration-300">
                  {'>'} contact --partnership
                </button>
              </div>

              <div className="mt-8 font-mono text-sm text-gray-500">
                <p>glug@jec:~$ echo "Thank you for supporting innovation!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
