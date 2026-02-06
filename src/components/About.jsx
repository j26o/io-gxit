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
              Built to Deliver for Manila&nbsp;SMEs
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                GenX IT Solutions is founded by Roland Baldovino, a technology leader
                with over 20 years of experience spanning digital strategy, full-stack
                development, and project management across the Philippines and Singapore.
              </p>
              <p>
                Roland&rsquo;s career includes leadership roles at TBWA\Group Singapore,
                where he delivered digital solutions for Singapore Airlines, Singapore Tourism
                Board, and Caltex. As Co-Founder and CTO of Curious Lab, he led projects
                for the Asian Development Bank, Coca-Cola FEMSA, Chi-X Asia Pacific, and
                Wyeth Philippines. As Customer Success Director at Sutrix Group, a global
                systems integrator, he led integration projects involving Salesforce, Adobe AEM,
                and AWS for clients including Globe&nbsp;Telecom.
              </p>
              <p>
                GenX IT Solutions brings that APAC-grade delivery capability to small and
                medium enterprises in Manila. We believe digital transformation shouldn&rsquo;t
                require enterprise budgets &mdash; just the right expertise, practical
                methodology, and a partner who&nbsp;delivers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">Our Approach</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Agile delivery with Design Thinking &mdash; we solve the right problems first
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Full-stack capability from strategy through deployment and training
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Cloud-native architecture on GCP, AWS, or Azure
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Security and compliance baked in, not bolted on
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
