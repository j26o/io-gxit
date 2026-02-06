import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'ERP', href: '#erp' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );

  function toggle() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  }

  return { dark, toggle };
}

function ThemeToggle({ dark, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      {dark ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerBg = scrolled
    ? 'bg-primary/95 backdrop-blur-sm shadow-lg'
    : 'bg-primary';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-max flex items-center justify-between px-5 py-3 md:px-8 lg:px-16">
        {/* Logo */}
        <a href="#" aria-label="GenX IT Solutions home">
          <img
            src="/gx-it-white.png"
            alt="GenX IT Solutions"
            className="h-10 w-10 rounded object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <ThemeToggle dark={dark} toggle={toggle} />
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle dark={dark} toggle={toggle} />
          <button
            type="button"
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-primary px-5 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-gray-300 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Book a Call
          </a>
        </nav>
      )}
    </header>
  );
}
