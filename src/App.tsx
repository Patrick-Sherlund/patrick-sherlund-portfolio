import './App.css'
import HeroSection from './components/HeroSection'
import ProjectPage from './components/ProjectPage'
import AerotVideoOverlay from './components/AerotVideoOverlay'
import BishopVideoOverlay from './components/BishopVideoOverlay'
import SpartaGifOverlay from './components/SpartaGifOverlay'
import RaiderGifOverlay from './components/RaiderGifOverlay'
import ExodusVideoOverlay from './components/ExodusVideoOverlay'
import CrusaderVideoOverlay from './components/CrusaderVideoOverlay'
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
        projectImage={<AerotVideoOverlay />}
        device="laptop"
      />

      <ProjectPage
        number="02"
        title="BISHOP"
        subtitle="SAR Video Intelligence"
        description="Transforms hours of mission footage into actionable intelligence in minutes using edge-optimized computer vision for Search and Rescue."
        techStack="C++, TypeScript, React, Drogon, ONNX"
        buttonLink="https://example.com/bishop"
        projectImage={<BishopVideoOverlay />}
        device="ipad"
      />

      <ProjectPage
        number="03"
        title="SPARTA"
        subtitle="Maritime Radar Tracker"
        description="Cross-platform radar tracking application that integrates commercial drones to automate maritime target acquisition and data forwarding for 450+ users."
        techStack="Java, Kotlin, Spring, TypeScript, React"
        buttonLink="https://example.com/sparta"
        projectImage={<SpartaGifOverlay />}
        device="iphone"
      />

      <ProjectPage
        number="04"
        title="RAIDER"
        subtitle="RF Alerting Plugin"
        description="Windows TAK plugin that automates signal violation detection, reducing analysis time from days to seconds through real-time event processing."
        techStack="C#, .NET, WinTAK, Hardware APIs"
        buttonLink="https://example.com/raider"
        projectImage={<RaiderGifOverlay />}
        device="mmc"
      />

      <ProjectPage
        number="05"
        title="EXODUS"
        subtitle="Biometric Identity Tool"
        description="On-device computer vision pipeline that processes identity documents in sub-second speeds for field operations without relying on cloud connectivity."
        techStack="Java, Kotlin, Android SDK, ONNX, OCR"
        buttonLink="https://example.com/exodus"
        projectImage={<ExodusVideoOverlay />}
        device="apple-display"
      />

      <ProjectPage
        number="06"
        title="CRUSADER"
        subtitle="Radar Control & Tracking"
        description="Full-stack radar control system with predictive tracking, clutter filtering, and target detection algorithms for Navico and Furuno hardware integration."
        techStack="TypeScript, React, C++, Drogon"
        buttonLink="https://example.com/crusader"
        projectImage={<CrusaderVideoOverlay />}
        device="apple-display"
      />
    </>
  )
}

export default App