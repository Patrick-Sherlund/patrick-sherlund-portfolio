import { Link } from 'react-router-dom';
import { HomeHero } from '../components/HomeHero';
import { ProfessionalProjectsBanner } from '../components/ProfessionalProjectsBanner';
import { ProjectPage } from '../components/ProjectPage';
import { ThemeToggle } from '../components/ThemeToggle';
import { AerotVideoOverlay } from '../components/AerotVideoOverlay';
import { BishopVideoOverlay } from '../components/BishopVideoOverlay';
import { SpartaVideoOverlay } from '../components/SpartaVideoOverlay';
import { RaiderVideoOverlay } from '../components/RaiderVideoOverlay';
import { ExodusVideoOverlay } from '../components/ExodusVideoOverlay';
import { CrusaderVideoOverlay } from '../components/CrusaderVideoOverlay';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e7f4ff] dark:bg-[#041825]" style={{ transition: 'background-color 0.4s ease-in-out' }}>
      <ThemeToggle />
      <HomeHero />
      
      <ProfessionalProjectsBanner />

      {/* AeroT Project */}
      <div id="aerot-section">
        <ProjectPage 
          number="01"
          title="AEROT"
          subtitle="Signal Training Tool"
          description="From ideation to MVP, AeroT is the friendly force EM training tool for the United States Marine Corps."
          techStack="Full-stack, C++, Typescript, React"
          buttonText="VIEW DETAILS"
          buttonLink="https://patricksherlund.com"
          projectImage={<AerotVideoOverlay />}
        />
      </div>

      {/* Bishop Project */}
      <div id="bishop-section">
        <ProjectPage 
          number="02"
          title="BISHOP"
          subtitle="SAR Video Intelligence"
          description="Transforms hours of mission footage into actionable intelligence in minutes using edge-optimized computer vision for Search and Rescue."
          techStack="C++, TypeScript, React, Drogon, ONNX"
          buttonText="VIEW DETAILS"
          buttonLink="/bishop"
          projectImage={<BishopVideoOverlay />}
          device="ipad"
        />
      </div>

      {/* SPARTA Project */}
      <div id="sparta-section">
        <ProjectPage 
          number="03"
          title="SPARTA"
          subtitle="Maritime Radar Tracker"
          description="Cross-platform radar tracking application that integrates commercial drones to automate maritime target acquisition and data forwarding for 450+ users."
          techStack="Java, Kotlin, Spring, TypeScript, React"
          buttonText="VIEW DETAILS"
          buttonLink="https://patricksherlund.com"
          projectImage={<SpartaVideoOverlay />}
          device="iphone"
        />
      </div>

      {/* RAIDER Project */}
      <div id="raider-section">
        <ProjectPage 
          number="04"
          title="RAIDER"
          subtitle="RF Alerting Plugin"
          description="Windows TAK plugin that automates signal violation detection, reducing analysis time from days to seconds through real-time event processing."
          techStack="C#, .NET, WinTAK, Hardware APIs"
          buttonText="VIEW DETAILS"
          buttonLink="https://patricksherlund.com"
          projectImage={<RaiderVideoOverlay />}
          device="mmc"
        />
      </div>

      {/* EXODUS Project */}
      <div id="exodus-section">
        <ProjectPage 
          number="05"
          title="EXODUS"
          subtitle="Biometric Identity Tool"
          description="On-device computer vision pipeline that processes identity documents in sub-second speeds for field operations without relying on cloud connectivity."
          techStack="Java, Kotlin, Android SDK, ONNX, OCR"
          buttonText="VIEW DETAILS"
          buttonLink="https://patricksherlund.com"
          projectImage={<ExodusVideoOverlay />}
          device="apple-display"
        />
      </div>

      {/* CRUSADER Project */}
      <div id="crusader-section">
        <ProjectPage 
          number="06"
          title="CRUSADER"
          subtitle="Radar Control & Tracking"
          description="Full-stack radar control system with predictive tracking, clutter filtering, and target detection algorithms for Navico and Furuno hardware integration."
          techStack="TypeScript, React, C++, Drogon"
          buttonText="VIEW DETAILS"
          buttonLink="https://patricksherlund.com"
          projectImage={<CrusaderVideoOverlay />}
          device="apple-display"
        />
      </div>
    </div>
  );
}