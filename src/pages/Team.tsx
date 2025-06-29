
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
        { name: 'Arjun Sharma', role: 'President', bio: 'Passionate about Linux kernel development' }
      ]
    },
    {
      title: 'Co-Heads',
      members: [
        { name: 'Priya Devi', role: 'Vice President', bio: 'Open source advocate and web developer' },
        { name: 'Rahul Kumar', role: 'Secretary', bio: 'DevOps enthusiast and cloud architect' }
      ]
    },
    {
      title: 'Technical Team',
      members: [
        { name: 'Sneha Patel', role: 'Tech Lead', bio: 'Full-stack developer and mentor' },
        { name: 'Vikash Singh', role: 'Backend Developer', bio: 'Python and Go enthusiast' },
        { name: 'Anita Boro', role: 'Frontend Developer', bio: 'React and Vue.js specialist' },
        { name: 'Manish Gupta', role: 'System Admin', bio: 'Linux server administration expert' }
      ]
    },
    {
      title: 'Design Team',
      members: [
        { name: 'Ritu Choudhury', role: 'Design Lead', bio: 'UI/UX designer and creative director' },
        { name: 'Akash Jain', role: 'Graphic Designer', bio: 'Brand identity and visual design' }
      ]
    },
    {
      title: 'Management',
      members: [
        { name: 'Deepak Nath', role: 'Event Manager', bio: 'Event planning and coordination' },
        { name: 'Pooja Deka', role: 'Finance Head', bio: 'Budget management and sponsorships' }
      ]
    },
    {
      title: 'Social Media',
      members: [
        { name: 'Amit Baruah', role: 'Social Media Lead', bio: 'Content creation and community building' },
        { name: 'Kavita Roy', role: 'Content Writer', bio: 'Technical writing and documentation' }
      ]
    }
  ];

  const generalMembers = [
    'Rohit Sharma', 'Neha Agarwal', 'Sanjay Kumar', 'Preeti Singh', 'Gaurav Patel',
    'Shreya Devi', 'Varun Gupta', 'Nisha Boro', 'Ravi Kumar', 'Sakshi Jain'
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
      
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-glug-blue bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the passionate individuals who drive GLUG's mission of promoting open-source culture and innovation.
            </p>
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

            {/* General Members */}
            <div className="glass-strong rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">General Members</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {generalMembers.map((member, index) => (
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
