import React from 'react';

const ExperienceCard = ({ experience }) => {
  const {
    status,
    statusColor,
    period,
    title,
    company,
    companyColor,
    description,
    highlights,
    skills,
    timelineColor,
    side,
  } = experience;

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${side === 'left' ? '' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 hidden md:block`}
        style={{ backgroundColor: timelineColor === 'blue' ? '#2563eb' : timelineColor === 'orange' ? '#ea580c' : '#2563eb' }}
      ></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
        <div
          className={`rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
            timelineColor === 'blue' ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'bg-white border border-gray-100'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusColor === 'green' ? 'bg-green-100 text-green-800' : statusColor === 'orange' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {status}
            </span>
            <span className="text-gray-500 text-sm">{period}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <h4
            className={`text-lg font-semibold mb-3 ${
              companyColor === 'blue' ? 'text-blue-600' : companyColor === 'orange' ? 'text-orange-600' : 'text-gray-900'
            }`}
          >
            {company}
          </h4>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2 mb-4">
            {highlights.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-700"
              >
                <div
                  className={`w-2 h-2 rounded-full mr-3`}
                  style={{ backgroundColor: timelineColor === 'blue' ? '#2563eb' : '#ea580c' }}
                ></div>
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded text-xs ${
                  timelineColor === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for alignment */}
      <div className="w-full md:w-1/2"></div>
    </div>
  );
};

export default ExperienceCard;
