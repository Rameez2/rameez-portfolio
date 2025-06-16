import React, { useState } from 'react';
import ExperienceCard from './Experience/ExperienceCard';


const ExperienceSection = () => {
const [experiences] = useState([
  {
    id: 1,
    status: 'Current',
    statusColor: 'green',
    period: '2022 - Present',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    companyColor: 'blue',
    description:
      'Leading a team of 5 developers in building enterprise-level web applications using MERN stack. Architected microservices infrastructure serving 100K+ users.',
    highlights: [
      'Built scalable e-commerce platform with 40% performance improvement',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    timelineColor: 'blue',
    side: 'left',
  },
  {
    id: 2,
    status: '6 Months',
    statusColor: 'orange',
    period: '2019',
    title: 'Web Development Intern',
    company: 'Digital Solutions Ltd.',
    companyColor: 'orange',
    description:
      'My first step into the professional world of web development. Gained hands-on experience with modern web technologies and learned industry best practices.',
    highlights: [
      'Assisted in developing company website and landing pages',
      'Learned version control with Git and team collaboration',
      'Participated in code reviews and agile development process',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Git'],
    timelineColor: 'orange',
    side: 'right',
  },
  {
    id: 3,
    status: '2 Years',
    statusColor: 'blue',
    period: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Innovatech Labs',
    companyColor: 'blue',
    description:
      'Developed and maintained multiple web applications, collaborating closely with cross-functional teams to deliver new features and improvements.',
    highlights: [
      'Designed RESTful APIs and integrated third-party services',
      'Optimized application performance leading to 30% faster load times',
      'Collaborated with UX/UI designers to enhance user experience',
    ],
    skills: ['React.js', 'Express.js', 'PostgreSQL', 'Docker', 'Jest'],
    timelineColor: 'blue',
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
