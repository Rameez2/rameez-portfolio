

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">MERN Stack Specialist</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With over 3 years of experience in full-stack development, I specialize in the MERN stack (MongoDB,
                            Express.js, React.js, Node.js). I'm passionate about creating seamless user experiences and robust
                            backend architectures.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I enjoy tackling complex problems and turning ideas into reality through clean, maintainable code. When
                            I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                            sharing knowledge with the developer community.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Problem Solver</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Team Player</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Quick Learner</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Adaptable to New Tech</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Critical Thinker</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                            <h4 className="text-xl font-semibold mb-4">Quick Stats</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Projects Completed</span>
                                    <span className="font-bold">25+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Years of Experience</span>
                                    <span className="font-bold">3+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Technologies Mastered</span>
                                    <span className="font-bold">15+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Coffee Consumed</span>
                                    <span className="font-bold">∞</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
