export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary px-5 py-12 md:px-8 lg:px-16">
      <div className="container-max">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/gx-it-white.png"
              alt="GenX IT Solutions"
              className="h-8 w-8 rounded object-contain"
            />
            <span className="text-sm font-semibold text-white">
              GenX IT Solutions, Inc.
            </span>
          </div>

          {/* Social placeholders */}
          <div className="flex gap-6">
            <a
              href="mailto:hello@gxit.io"
              aria-label="Email"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="https://gxit.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {year} GenX IT Solutions, Inc. &middot; Manila, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
