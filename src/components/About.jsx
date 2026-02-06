export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Enterprise-Grade Tech, SME-Friendly&nbsp;Pricing
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                GenX IT Solutions was founded by a group of unconventional technologists from
                conventional industries. Having built platforms for airlines, banks, and
                multinationals across APAC, we saw a gap: small and medium enterprises in the
                Philippines needed the same cutting-edge solutions &mdash; but at a price
                that actually made&nbsp;sense.
              </p>
              <p>
                We leverage the latest in cloud-native architecture, AI-driven automation, and
                modern frameworks to deliver results that rival what the big consultancies charge
                five times more for. Our lean team, open-source-first philosophy, and Manila-based
                operations mean you get state-of-the-art technology without the enterprise
                price&nbsp;tag.
              </p>
              <p>
                The bottom line: world-class technology shouldn&rsquo;t be a luxury.
                We make it accessible, practical, and&nbsp;affordable.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">Our Approach</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Open-source-first stack &mdash; cutting-edge tools without licensing bloat
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Cloud-native on GCP, AWS, or Azure &mdash; pay only for what you use
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  AI and automation built in from day one, not added as an afterthought
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Transparent, fixed-scope pricing &mdash; no surprise invoices
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">Core Strengths</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Digital Transformation',
                  'Project Management',
                  'Web & App Development',
                  'Cloud Infrastructure',
                  'AI & Automation',
                  'ERP Implementation',
                  'Creative Technology',
                  'Cybersecurity',
                  'Data Analytics & SEO',
                  'CRM & MarTech',
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
