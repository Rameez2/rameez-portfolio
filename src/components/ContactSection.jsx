import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, ArrowDown, Send } from "lucide-react"
import Link from "next/link";
import social_links from "@/data/socialLinks";

const ContactSection = () => {
    
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">syedrameezshahpesh@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">+92 305 1088666</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Link
                    href={social_links.github_link} target="_blank"
                    className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={social_links.linkedin_link} target="_blank"
                    className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href={social_links.mail_link} target="_blank"
                    className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Me a Message</h3>
              <p className="text-gray-600 mb-6">I'll get back to you as soon as possible!</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactSection;
