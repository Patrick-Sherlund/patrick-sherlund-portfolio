interface TechChipsProps {
  tags: string[];
}

export function TechChips({ tags }: TechChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1.5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-lg text-xs uppercase tracking-wide text-[#111111]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
