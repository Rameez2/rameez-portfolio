
const Nav = () => {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

    return (
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

    );
}

export default Nav;
