import { Github, Linkedin, Mail, ArrowDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import social_links from "@/data/socialLinks";

const HeroSection = () => {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

    return (
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full w-[150px] h-[150px] object-cover mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Syed Rameez Shah
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack MERN Developer passionate about creating scalable web applications and bringing innovative ideas
            to life through clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href={social_links.github_link} target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href={social_links.linkedin_link} target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href={social_links.mail_link} target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </section>
    );
}

export default HeroSection;
