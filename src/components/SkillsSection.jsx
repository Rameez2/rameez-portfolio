import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, ExternalLink, Code,
  Database, Server, Smartphone, ArrowDown, Send
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "React.js", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "Python", icon: Code, category: "Language" },
    { name: "Next.js", icon: Code, category: "Framework" },
    { name: "Tailwind CSS", icon: Code, category: "Styling" },
    { name: "Git", icon: Code, category: "Tools" },
    { name: "AWS", icon: Server, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Redux", icon: Code, category: "State Management" },
    { name: "Firebase", icon: Server, category: "Backend-as-a-Service" },
    { name: "Appwrite", icon: Server, category: "Backend-as-a-Service" },
    { name: "Vercel", icon: Server, category: "Deployment" },
    { name: "ChatGPT Prompt Engineering", icon: Code, category: "AI/Tools" }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCount = 4; // initially show first 4
  const visibleSkills = showAll ? skills : skills.slice(0, visibleCount);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <motion.div
          layout // animate grid layout changes
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6"
        >
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="cursor-pointer px-6 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md transition-all duration-300 ease-in-out hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:scale-105"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
