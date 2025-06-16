"use client"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import ExperienceSection from "@/components/ExperienceSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Nav from "@/components/Nav"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
        <Nav/>
      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
        <AboutSection/>

      {/* Experience Section */}
      <ExperienceSection/>

      {/* Skills Section */}
      <SkillsSection/>

      {/* Projects Section */}
      <ProjectsSection/>
      {/* Contact Section */}
      <ContactSection/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
