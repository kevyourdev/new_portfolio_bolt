import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Brain, Briefcase, User } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            John Doe
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="w-8 h-8 hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.header>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with 5 years of experience building web applications.
              I specialize in React, Node.js, and modern web technologies. When I'm not coding,
              you can find me contributing to open-source projects or writing technical blog posts.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Code className="w-8 h-8 mb-4" />, title: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS'] },
            { icon: <Brain className="w-8 h-8 mb-4" />, title: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL'] },
            { icon: <Briefcase className="w-8 h-8 mb-4" />, title: 'Tools', skills: ['Git', 'Docker', 'AWS'] },
            { icon: <User className="w-8 h-8 mb-4" />, title: 'Soft Skills', skills: ['Communication', 'Leadership', 'Problem Solving'] }
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-featured e-commerce platform built with React and Node.js"
            image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
            technologies={['React', 'Node.js', 'MongoDB']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            technologies={['React', 'Firebase', 'Tailwind']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="AI Chat Application"
            description="An AI-powered chat application using OpenAI's GPT-3"
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
            technologies={['Next.js', 'OpenAI API', 'TypeScript']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@example.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send me an email
          </motion.a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;