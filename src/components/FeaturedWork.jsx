const CLIENTS = [
  { name: 'Singapore Airlines', region: 'SG' },
  { name: 'Singapore Tourism Board', region: 'SG' },
  { name: 'Asian Development Bank', region: 'PH' },
  { name: 'Philippine Airlines', region: 'PH' },
  { name: 'Coca-Cola FEMSA', region: 'PH' },
  { name: 'Chevron / Caltex', region: 'SEA' },
  { name: 'Chi-X Asia Pacific', region: 'APAC' },
  { name: 'Globe Telecom', region: 'PH' },
  { name: 'Grab', region: 'SEA' },
  { name: 'Mastercard', region: 'SEA' },
  { name: 'Abbott', region: 'SEA' },
  { name: 'ARC.xyz', region: 'SG' },
  { name: 'Nexus International School', region: 'SG' },
  { name: 'Hei', region: 'SG' },
];

const HIGHLIGHTS = [
  {
    client: 'Singapore Airlines',
    work: 'Led front-end technical delivery for the full website revamp, bringing SQ-level class and experience to every traveller touchpoint.',
    tags: ['Web Development', 'Vue.js', 'WCAG', 'DevOps'],
  },
  {
    client: 'Asian Development Bank',
    work: 'Built the Intelligent Integrity Due Diligence (I2D2) platform — an aggregator application serving as single source of truth for investigative work, checklists, and document management.',
    tags: ['Digital Transformation', 'UX/UI', 'Node.js', 'Vue.js'],
  },
  {
    client: 'Coca-Cola FEMSA',
    work: 'Developed the GT Wingman audit application that replaced paper-based retail compliance audits, providing real-time data for supply chain and marketing decisions.',
    tags: ['App Development', 'Digital Transformation', 'Node.js'],
  },
  {
    client: 'Chi-X Asia Pacific',
    work: 'Created Project Palantir — an intelligent search platform consolidating JIRA, RedMine, Confluence, and intranet data into a single source of truth for the APAC tech support hub.',
    tags: ['Digital Transformation', 'AI', 'Web Development'],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Track Record
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Featured Work &amp; Clients
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Our team has delivered digital solutions for airlines, banks,
          government institutions, FMCG brands, and startups across the
          Philippines, Singapore, and the wider APAC&nbsp;region.
        </p>

        {/* Highlight cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.client}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{h.client}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {h.work}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client badge grid */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Trusted By Organizations Across APAC
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-accent/30 hover:bg-accent/5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-accent/40"
              >
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
