import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link";
import social_links from "@/data/socialLinks";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Syed Rameez Shah
          </div>
          <p className="text-gray-400 mb-6">Full-Stack MERN Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link href={social_links.github_link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href={social_links.linkedin_link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href={social_links.mail_link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© {new Date().getFullYear()} Syed Rameez Shah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
