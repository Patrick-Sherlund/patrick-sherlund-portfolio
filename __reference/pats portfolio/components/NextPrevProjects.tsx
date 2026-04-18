import { ArrowRight } from 'lucide-react';

export function NextPrevProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-16 lg:py-24 border-t border-[rgba(17,17,17,0.1)]">
      <div className="mb-12 text-center">
        <h2>Want to see another project?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Previous Project */}
        <div className="group p-8 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-2">Previous</div>
            <h3 className="mb-2">[FILL] Project Name</h3>
            <p className="text-sm text-[#4b5563]">
              [FILL] Brief one-line description of the previous case study project
            </p>
          </div>

          <div className="aspect-[16/9] bg-[rgba(17,17,17,0.08)] rounded-xl mb-6 flex items-center justify-center border border-[rgba(17,17,17,0.1)] group-hover:border-[rgba(17,17,17,0.2)] transition-colors">
            <div className="text-xs text-[#4b5563]">Project preview</div>
          </div>

          <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#111111] group-hover:gap-3 transition-all">
            <span>View details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Next Project */}
        <div className="group p-8 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-2">Next</div>
            <h3 className="mb-2">[FILL] Project Name</h3>
            <p className="text-sm text-[#4b5563]">
              [FILL] Brief one-line description of the next case study project
            </p>
          </div>

          <div className="aspect-[16/9] bg-[rgba(17,17,17,0.08)] rounded-xl mb-6 flex items-center justify-center border border-[rgba(17,17,17,0.1)] group-hover:border-[rgba(17,17,17,0.2)] transition-colors">
            <div className="text-xs text-[#4b5563]">Project preview</div>
          </div>

          <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#111111] group-hover:gap-3 transition-all">
            <span>View details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-16 text-center">
        <p className="text-sm text-[#4b5563]">
          Case Study — Bishop (Template Instance)
        </p>
        <p className="text-xs text-[#4b5563] mt-2">
          Designed in the style of patricksherlund.com portfolio
        </p>
      </div>
    </section>
  );
}