import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, ArrowDown, Send } from "lucide-react"


const SkillsSection = () => {
const skills = [
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "React.js", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "Next.js", icon: Code, category: "Framework" },
    { name: "Tailwind CSS", icon: Code, category: "Styling" },
    { name: "Git", icon: Code, category: "Tools" },
    { name: "AWS", icon: Server, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Redux", icon: Code, category: "State Management" },
  ]


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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors" />
                <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default SkillsSection;
