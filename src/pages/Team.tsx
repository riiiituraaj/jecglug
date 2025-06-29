import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const Team = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'Club Head': true
  });

  const teamData: TeamSection[] = [
    {
      title: 'Club Head',
      members: [
        { name: 'Abhilash Kashyap', role: 'Club-Head', bio: 'Leading GLUG into the future with passion for open source' }
      ]
    },
    {
      title: 'Co-Heads',
      members: [
        { name: 'Ashish Saikia', role: 'Co-Head', bio: 'Driving innovation and collaboration' },
        { name: 'Dorothy Gogoi', role: 'Co-Head', bio: 'Fostering community growth and engagement' },
        { name: 'Ritu Raj Bora', role: 'Co-Head & Design Lead', bio: 'Creative visionary and design expert' }
        { name: 'Ishan Bhardwaj', role: 'Co-Head', bio: 'Fostering community growth and engagement' },
      ]
    },
    {
      title: 'Technical Team',
      members: [
        { name: 'Abhimanyu Saikia', role: 'Tech Lead', bio: 'Full-stack developer and technical mentor' },
        { name: 'Sivanuj Dutta', role: 'Coordinator', bio: 'Backend development and system architecture' },
        { name: 'Rittam Dutta', role: 'Coordinator', bio: 'Frontend development and UI/UX' },
        { name: 'Kaushik Ranjan Rajkumar', role: 'Coordinator', bio: 'DevOps and cloud infrastructure' }
      ]
    },
    {
      title: 'Design Team',
      members: [
        { name: 'Ritu Raj Bora', role: 'Design Lead', bio: 'UI/UX designer and creative director' },
        { name: 'Arnold Saikia', role: 'Coordinator', bio: 'Visual design and brand identity' },
        { name: 'Ayushman Lahon', role: 'Coordinator', bio: 'Graphic design and illustrations' },
        { name: 'Nibir Kalita', role: 'Coordinator', bio: 'Motion graphics and animation' }
      ]
    },
    {
      title: 'Management Team',
      members: [
        { name: 'Bishal Ranjan Nath', role: 'Management Lead', bio: 'Event planning and team coordination' },
        { name: 'Priyam Nath', role: 'Coordinator', bio: 'Project management and logistics' },
        { name: 'Arindom Mahanta', role: 'Coordinator', bio: 'Budget management and resources' },
        { name: 'Ananya Das', role: 'Coordinator', bio: 'Partnership and collaboration' },
        { name: 'Sumanta Bhargab', role: 'Coordinator', bio: 'Operations and workflow management' }
      ]
    },
    {
      title: 'Social Media Team',
      members: [
        { name: 'Tushar Haloi', role: 'Social Media Lead', bio: 'Content strategy and community building' },
        { name: 'Koustab Saikia', role: 'Coordinator', bio: 'Content creation and engagement' },
        { name: 'Bivamoni Amchi', role: 'Coordinator', bio: 'Social media analytics and campaigns' },
        { name: 'Jyotismita Saikia', role: 'Coordinator', bio: 'Creative content and storytelling' }
      ]
    }
  ];

  const generalCoordinators = [
    'Rajdeep Dutta', 'Dreamsea Dutta', 'Mriganka Mahanta', 'Pranjal Nath'
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      <div className="pt-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-glug-blue bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Meet the passionate individuals who drive GLUG's mission of promoting open-source culture and innovation.
            </p>
            <div className="glass-strong rounded-lg p-4 max-w-md mx-auto">
              <p className="text-glug-green font-mono text-sm">
                Session 2025–2026
              </p>
            </div>
          </div>

          {/* Team Sections */}
          <div className="space-y-8">
            {teamData.map((section, sectionIndex) => (
              <div key={section.title} className="glass-strong rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <span className="text-glug-blue text-2xl">
                    {expandedSections[section.title] ? '−' : '+'}
                  </span>
                </button>
                
                {expandedSections[section.title] && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.members.map((member, memberIndex) => (
                        <div
                          key={member.name}
                          className="glass p-6 rounded-xl hover:border-glug-blue/30 transition-all duration-300 group animate-fade-in"
                          style={{animationDelay: `${memberIndex * 0.1}s`}}
                        >
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-glug-blue to-glug-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {getInitials(member.name)}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-glug-blue transition-colors">
                                {member.name}
                              </h3>
                              <p className="text-glug-green font-mono text-sm">{member.role}</p>
                            </div>
                          </div>
                          {member.bio && (
                            <p className="text-gray-400 text-sm">{member.bio}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* General Coordinators */}
            <div className="glass-strong rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">General Coordinators</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {generalCoordinators.map((member, index) => (
                  <div
                    key={member}
                    className="glass p-4 rounded-lg text-center hover:border-glug-green/30 transition-all duration-300 animate-fade-in"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-glug-green to-glug-blue rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {getInitials(member)}
                    </div>
                    <p className="text-white text-sm font-medium">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
