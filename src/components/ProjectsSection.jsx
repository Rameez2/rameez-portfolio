import { Github, ExternalLink, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProjectsSection = () => {

  const projects = [
    {
      title: "ResQdex",
      description:
        "Pet adoption platform built with Next.js and Appwrite. Enables adopters to find pets, organizations to list them, and features built-in real-time chat for seamless communication.",
      tech: ["Next.js", "Appwrite", "Tailwind CSS", "Socket.io"],
      image: "/images/resqdex.png",
      github: "#", // Add GitHub link if available
      live: "https://resqdex-nextjs.vercel.app/",
    },
    {
      title: "Story Share",
      description:
        "Social media platform focused on storytelling. Built with the MERN stack and GraphQL. Users can post stories, comment, like, favorite, and follow others for a dynamic content-sharing experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      image: "/images/storyshare.png",
      github: "https://github.com/Rameez2/reactjs-storyshare-graphql",
      live: "https://reactjs-storyshare-graphql-9bqq.vercel.app/",
    },
    {
      title: "Luneva Store",
      description:
        "A sleek and minimalistic online store focused on a single tech product. Designed for productivity enthusiasts, this storefront is built using Next.js and Tailwind CSS for blazing-fast performance and clean UI. It features responsive design, product details, and a smooth user experience.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
      image: "/images/luneva.png", // Replace with actual image path
      github: "https://github.com/Rameez2/luneva-store", // Update if your repo is public
      live: "https://luneva-store.vercel.app/",
    },
    {
      title: "Skillio",
      description:
        "A modern platform to discover, showcase, and sell online courses. Built with Next.js and Tailwind CSS, Skillio delivers a sleek, responsive interface for learners and educators alike.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
      image: "/images/skillio.png", // Replace with actual image path
      github: "https://github.com/Rameez2/skillio", // Replace with your actual repo link
      live: "https://skillio-qgdq.vercel.app/", // Replace with actual deployed link
    }

  ];



  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:border-gray-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default ProjectsSection;
