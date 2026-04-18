interface ArtifactCardProps {
  title: string;
  caption: string;
  tag: string;
  demonstrates: string;
}

export function ArtifactCard({ title, caption, tag, demonstrates }: ArtifactCardProps) {
  return (
    <div className="p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
      {/* Thumbnail placeholder */}
      <div className="aspect-[16/10] bg-[rgba(17,17,17,0.08)] rounded-xl mb-4 flex items-center justify-center border border-[rgba(17,17,17,0.1)] group-hover:border-[rgba(17,17,17,0.2)] transition-colors">
        <div className="text-xs text-[#4b5563]">Artifact preview</div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base">{title}</h3>
          <span className="px-2 py-1 bg-white/80 border border-[rgba(17,17,17,0.15)] rounded text-xs uppercase tracking-wider text-[#4b5563] whitespace-nowrap">
            {tag}
          </span>
        </div>
        
        <p className="text-sm text-[#4b5563]">{caption}</p>
        
        <div className="pt-2 border-t border-[rgba(17,17,17,0.1)]">
          <small className="text-[#4b5563]">
            <strong>Demonstrates:</strong> {demonstrates}
          </small>
        </div>
      </div>
    </div>
  );
}
