import { ChevronDown, Infinity } from 'lucide-react'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

const navLinks: { label: string; active?: boolean; dropdown?: boolean }[] = [
  { label: 'Home', active: true },
  { label: 'Wellness', dropdown: true },
  { label: 'Routine' },
  { label: 'Our Team' },
]

export default function App() {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* ── Dim overlay for readability ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10 pointer-events-none" />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-8 py-3 sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-white font-medium text-xs sm:text-base shrink-0">
          <Infinity size={16} strokeWidth={1.5} className="sm:w-[22px] sm:h-[22px]" />
          <span>Equilibrium</span>
        </div>

        {/* Nav pill – always visible */}
        <div className="flex liquid-glass items-center gap-0 sm:gap-1 rounded-lg sm:rounded-xl px-1 sm:px-2 py-1 sm:py-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`flex items-center gap-0.5 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-sm transition-colors whitespace-nowrap ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={10} className="sm:w-[13px] sm:h-[13px] mt-px" />}
            </button>
          ))}
        </div>

        {/* CTAs – always visible */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button className="liquid-glass text-white text-[10px] sm:text-sm font-medium px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors whitespace-nowrap">
            Log in
          </button>
          <button className="bg-white text-black text-[10px] sm:text-sm font-medium px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full hover:bg-white/90 active:bg-white/80 transition-colors whitespace-nowrap">
            Begin Now
          </button>
        </div>
      </nav>

      {/* ── Hero content (bottom-left) ── */}
      <div className="absolute bottom-0 left-0 right-0 sm:right-auto z-20 px-4 sm:px-12 pb-6 sm:pb-16 max-w-2xl">
        <h1 className="text-white text-2xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-2 sm:mb-4">
          Live Better, Feel Whole Every Day
        </h1>
        <p className="text-white/60 text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-7 max-w-sm sm:max-w-md">
          Take charge of how you feel with a companion built for your
          journey—build routines, follow your growth, and unlock tailored
          insights for a steadier, more vibrant life each day.
        </p>
        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
          <button className="bg-white text-black text-xs sm:text-base font-medium px-4 sm:px-7 py-2 sm:py-3 rounded-full hover:bg-white/90 active:bg-white/80 transition-colors">
            Start Today
          </button>
          <button className="liquid-glass text-white text-xs sm:text-base font-medium px-4 sm:px-7 py-2 sm:py-3 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors">
            Discover How
          </button>
        </div>
      </div>
    </div>
  )
}
