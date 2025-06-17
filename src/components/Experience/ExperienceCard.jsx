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
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"
        style={{ backgroundColor: timelineColor }}
      ></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
        <div
          className={`rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
          style={{
            background: timelineColor === '#2563eb' ? 'linear-gradient(to right, #eff6ff, #f5f3ff)' : '#ffffff',
            border: timelineColor === '#2563eb' ? 'none' : '1px solid #f3f4f6',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: statusColor.bg,
                color: statusColor.text,
              }}
            >
              {status}
            </span>
            <span className="text-gray-500 text-sm">{period}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <h4 className="text-lg font-semibold mb-3" style={{ color: companyColor }}>
            {company}
          </h4>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2 mb-4">
            {highlights.map((point, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-700">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: timelineColor }}
                ></div>
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: `${timelineColor}20`, // 20% opacity for light background
                  color: timelineColor,
                }}
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
