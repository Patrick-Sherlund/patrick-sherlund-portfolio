import './App.css'
import HeroSection from './components/HeroSection'
import ProjectPage from './components/ProjectPage'
import styled from '@emotion/styled'

// Placeholder - replace with actual AeroT screenshot
const SectionHeader = styled.h2`
  font-family: 'Google Sans', sans-serif;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  margin: 80px 0 40px;
  color: #1A1A1A;
  background-color: #E7F4FF;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 60px 0 30px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
    margin: 40px 0 20px;
  }
`

function App() {
  return (
    <>
      <HeroSection />

      <SectionHeader>Professional Projects</SectionHeader>

      <ProjectPage
        number="01"
        title="AEROT"
        subtitle="Signal Training Tool"
        description="From ideation to MVP, AeroT is the friendly force EM training tool for the United States Marine Corps."
        techStack="Full-stack, C++, Typescript, React"
        buttonLink="https://example.com/aerot"
        projectImage={""}
        device="laptop"
      />

      <ProjectPage
        number="02"
        title="BISHOP"
        subtitle="Project Subtitle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        techStack="Technology Stack Here"
        buttonLink="https://example.com/bishop"
        projectImage={""}
        device="ipad"
      />

      <ProjectPage
        number="03"
        title="SPARTA"
        subtitle="Project Subtitle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        techStack="Technology Stack Here"
        buttonLink="https://example.com/sparta"
        projectImage={""}
        device="iphone"
      />

      <ProjectPage
        number="04"
        title="RAIDER"
        subtitle="Project Subtitle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        techStack="Technology Stack Here"
        buttonLink="https://example.com/raider"
        projectImage={""}
        device="mmc"
      />

      <ProjectPage
        number="05"
        title="EXODUS"
        subtitle="Project Subtitle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        techStack="Technology Stack Here"
        buttonLink="https://example.com/exodus"
        projectImage={""}
        device="apple-display"
      />

      <ProjectPage
        number="06"
        title="CRUSADER"
        subtitle="Project Subtitle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        techStack="Technology Stack Here"
        buttonLink="https://example.com/crusader"
        projectImage={""}
        device="apple-display"
      />
    </>
  )
}

export default App
