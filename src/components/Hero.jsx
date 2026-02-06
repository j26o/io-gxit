import BackgroundBeams from './BackgroundBeams';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-primary pt-16 overflow-hidden">
      <BackgroundBeams />

      <div className="section-padding container-max relative z-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            GenX IT Solutions, Inc.
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digital Transformation &amp; IT Delivery for SMEs&nbsp;in&nbsp;Manila
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            20 years of hands-on experience turning complex technology into practical
            outcomes. We help small and medium enterprises modernize operations, ship
            faster, and scale with confidence&nbsp;&mdash;&nbsp;without the enterprise
            price&nbsp;tag.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-accent px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Request a Consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
            <span>20+ Years in Digital &amp; IT</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Manila-Based, APAC-Proven</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Agile &amp; Practical Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
