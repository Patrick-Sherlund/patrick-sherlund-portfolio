import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackToProjects.css';

export function BackToProjects() {
  return (
    <Link to="/" className="back-to-projects">
      <ArrowLeft size={20} strokeWidth={2} />
      <span>Back to Projects</span>
    </Link>
  );
}
