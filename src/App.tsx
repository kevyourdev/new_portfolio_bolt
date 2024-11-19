import React from 'react';
import { Contact } from './components/Contact';
import NavBar from './components/NavBar';
import { Projects } from './components/Projects';
import { Section } from './components/Section';
import { Skills } from './components/Skills';
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content with Top Padding to Account for Fixed Navbar */}
      <div className="pt-16">
        <Section id="home" title="Home">
          <Skills />
        </Section>
        <Section id="about" title="About">
          <Skills />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
        {/* Add Footer here if needed */}
      </div>
    </div>
  );
};

export default App;
