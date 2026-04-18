import { Users, Target, AlertCircle, Briefcase, Clock, GitBranch, Compass, Lightbulb, Wrench, Rocket } from 'lucide-react';

export function AtAGlance() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-16 lg:py-24 border-t border-[rgba(17,17,17,0.1)]">
      <div className="mb-16">
        <h2 className="mb-4">At a Glance</h2>
        <p className="text-lg text-[#4b5563] max-w-2xl">
          A comprehensive overview of the Bishop project — from the people we serve to the process we followed.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1: Problem (hero) + Users */}
        
        {/* Featured Problem Card - Takes 2 columns */}
        <div
          className="group relative md:col-span-2 p-8 bg-gradient-to-br from-blue-50/80 to-white/60 border-2 border-blue-500/30 rounded-[24px] shadow-soft-lg bubble-up transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-blue-500/50"
          style={{ animationDelay: '0s' }}
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Target className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-blue-600 mb-3 font-medium">
                Problem
              </div>
              <p className="text-xl text-[#111111] leading-relaxed">
                Locating people efficiently during search & rescue missions
              </p>
            </div>
          </div>
        </div>

        {/* Users Card */}
        <div
          className="group relative p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft bubble-up transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-blue-500/30 hover:bg-blue-50/30"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
            <Users className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
          </div>
          <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-3 font-medium">
            Users
          </div>
          <p className="text-[#111111] leading-relaxed">
            SAR operators + drone pilots
          </p>
        </div>

        {/* Row 2: Timeline, Constraints, Team */}

        {/* Timeline Card - Highlight the number */}
        <div
          className="group relative p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft bubble-up transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-green-500/30 hover:bg-green-50/30"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
            <Clock className="w-6 h-6 text-green-600" strokeWidth={1.5} />
          </div>
          <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-3 font-medium">
            Timeline
          </div>
          <div className="text-3xl text-[#111111] mb-2">6 months</div>
          <p className="text-sm text-[#4b5563]">
            Nov 2024 – Apr 2025
          </p>
        </div>

        {/* Constraints Card - Highlight 72 hours */}
        <div
          className="group relative p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft bubble-up transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-amber-500/30 hover:bg-amber-50/30"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
            <AlertCircle className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
          </div>
          <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-3 font-medium">
            Constraints
          </div>
          <div className="text-3xl text-[#111111] mb-2">72 hrs</div>
          <p className="text-sm text-[#4b5563] leading-relaxed">
            Time-critical window, high-volume video data, [FILL] field conditions, weather dependencies
          </p>
        </div>

        {/* Team Card */}
        <div
          className="group relative p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft bubble-up transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-purple-500/30 hover:bg-purple-50/30"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
            <Briefcase className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
          </div>
          <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-3 font-medium">
            Team + Scope
          </div>
          <p className="text-[#111111] leading-relaxed">
            1 Engineer + 1 Designer — you owned UX + product decisions [FILL] with stakeholder input from SAR coordinators
          </p>
        </div>

        {/* Row 3: Delivery Model spans full 3 columns with visual flow */}

        {/* Delivery Model Card */}
        <div
          className="group relative md:col-span-2 lg:col-span-3 p-8 bg-gradient-to-br from-indigo-50/80 to-white/60 border border-indigo-500/30 rounded-[24px] shadow-soft bubble-up transition-all duration-300 hover:shadow-soft-lg hover:border-indigo-500/50"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
              <GitBranch className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#4b5563] font-medium">
                Delivery Model
              </div>
              <p className="text-sm text-[#4b5563] mt-1">
                Double Diamond + Tanzu loop methodology
              </p>
            </div>
          </div>
          
          {/* Visual Flow */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            {/* Discover */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <Compass className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-[#111111]">Discover</div>
                <div className="text-xs text-[#4b5563]">Research</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center gap-1 text-indigo-400">
              <div className="w-6 h-px bg-indigo-300"></div>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Define */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-[#111111]">Define</div>
                <div className="text-xs text-[#4b5563]">Synthesize</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center gap-1 text-indigo-400">
              <div className="w-6 h-px bg-indigo-300"></div>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Develop */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                <Wrench className="w-6 h-6 text-green-600" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-[#111111]">Develop</div>
                <div className="text-xs text-[#4b5563]">Ideate</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center gap-1 text-indigo-400">
              <div className="w-6 h-px bg-indigo-300"></div>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Deliver */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                <Rocket className="w-6 h-6 text-orange-600" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-[#111111]">Deliver</div>
                <div className="text-xs text-[#4b5563]">Implement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}