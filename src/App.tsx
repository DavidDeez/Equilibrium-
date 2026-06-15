import { useState, useEffect } from 'react'
import { ChevronDown, Infinity, Menu, X } from 'lucide-react'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

const navLinks: { label: string; active?: boolean; dropdown?: boolean }[] = [
  { label: 'Home', active: true },
  { label: 'Wellness', dropdown: true },
  { label: 'Routine' },
  { label: 'Our Team' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  /* Close mobile menu on resize past md breakpoint */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* ── Dim overlay for readability on small screens ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10 pointer-events-none" />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 xs:px-5 sm:px-8 py-4 sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
          <Infinity size={20} strokeWidth={1.5} className="sm:w-[22px] sm:h-[22px]" />
          <span>Equilibrium</span>
        </div>

        {/* Nav pill – desktop */}
        <div className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={13} className="mt-px" />}
            </button>
          ))}
        </div>

        {/* CTAs – desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors">
            Log in
          </button>
          <button className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors">
            Begin Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden liquid-glass text-white p-2 rounded-lg"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[25] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile menu ── */}
      <div
        className={`absolute top-[64px] sm:top-[72px] left-3 right-3 xs:left-4 xs:right-4 z-30 md:hidden liquid-glass rounded-2xl p-3 xs:p-4 flex flex-col gap-1 transition-all duration-300 ease-out origin-top ${
          menuOpen
            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            className={`flex items-center justify-between w-full px-3 xs:px-4 py-3 rounded-lg text-sm transition-colors active:bg-white/10 ${
              link.active
                ? 'bg-white/15 text-white'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {link.label}
            {link.dropdown && <ChevronDown size={14} />}
          </button>
        ))}

        <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
          <button className="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors">
            Log in
          </button>
          <button className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 active:bg-white/80 transition-colors">
            Begin Now
          </button>
        </div>
      </div>

      {/* ── Hero content (bottom-left) ── */}
      <div className="absolute bottom-0 left-0 right-0 sm:right-auto z-20 px-4 xs:px-6 sm:px-12 pb-6 xs:pb-8 sm:pb-16 max-w-2xl">
        <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-3 sm:mb-4">
          Live Better, Feel Whole Every Day
        </h1>
        <p className="text-white/60 text-xs xs:text-sm leading-relaxed mb-5 xs:mb-6 sm:mb-7 max-w-sm sm:max-w-md">
          Take charge of how you feel with a companion built for your
          journey—build routines, follow your growth, and unlock tailored
          insights for a steadier, more vibrant life each day.
        </p>
        <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 xs:gap-3">
          <button className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 active:bg-white/80 transition-colors text-center">
            Start Today
          </button>
          <button className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors text-center">
            Discover How
          </button>
        </div>
      </div>
    </div>
  )
}
