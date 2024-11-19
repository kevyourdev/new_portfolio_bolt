import React from 'react';

export const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      link: 'https://github.com/yourusername/project-two',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
