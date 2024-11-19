import React from 'react';

export const Skills: React.FC = () => {
  const skillsList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Django',
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
