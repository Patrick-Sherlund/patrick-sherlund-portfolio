import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackLink() {
  return (
    <Link href="/" className="back-to-projects">
      <ArrowLeft size={20} strokeWidth={2} />
      <span>Back to Projects</span>
    </Link>
  );
}
