import React, { useState } from 'react';
import ExperienceCard from './Experience/ExperienceCard';

const ExperienceSection = () => {

const [experiences] = useState([
  {
    id: 1,
    status: 'Contract',
    statusColor: { bg: '#d1fae5', text: '#065f46' }, // green
    period: 'Jan 2025 - Jan 2026',
    title: 'MERN Stack Developer',
    company: 'Inostrik',
    companyColor: '#065f46', // green
    description:
      'Working as a contract-based MERN stack developer delivering scalable web applications and collaborating with remote teams.',
    highlights: [
      'Built real-time dashboards and internal tools for clients',
      'Integrated third-party APIs and improved system reliability',
      'Delivered features with rapid turnaround in agile sprints',
    ],
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Git', 'Appwrite'],
    timelineColor: '#10b981', // green-500
    side: 'left',
  },
  {
    id: 2,
    status: '2 Months',
    statusColor: { bg: '#dbeafe', text: '#1e3a8a' }, // blue
    period: 'Aug 2024 - Sep 2024',
    title: 'Backend Intern',
    company: 'CodeVista Technologies',
    companyColor: '#1e3a8a', // blue
    description:
      'Interned as a backend developer focusing on building and optimizing APIs, databases, and authentication systems.',
    highlights: [
      'Built secure RESTful APIs with Node.js and Express',
      'Worked with PostgreSQL and optimized DB queries',
      'Wrote unit tests and learned backend architecture principles',
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'GraphQL'],
    timelineColor: '#2563eb', // blue-600
    side: 'right',
  },
  {
    id: 3,
    status: '2 Months',
    statusColor: { bg: '#ffedd5', text: '#c2410c' }, // orange
    period: 'Jan 2023 - Feb 2023',
    title: 'Frontend Intern',
    company: 'Skills4U',
    companyColor: '#c2410c', // orange
    description:
      'Kickstarted my career as a frontend intern, learning real-world application of HTML, CSS, and JavaScript in team environments.',
    highlights: [
      'Built responsive UI components and landing pages',
      'Learned React basics and version control workflows',
      'Collaborated in weekly sprints and reviews',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Git'],
    timelineColor: '#ea580c', // orange-500
    side: 'left',
  },
]);


  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey as a MERN stack developer, building scalable applications
            and leading development teams
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Companies Worked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
