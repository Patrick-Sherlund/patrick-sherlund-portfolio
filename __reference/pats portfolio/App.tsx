import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { usePreloadImages } from './hooks/usePreloadImages';
import Home from './pages/Home';
import BishopCaseStudy from './pages/BishopCaseStudy';

function AppContent() {
  usePreloadImages();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bishop" element={<BishopCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}