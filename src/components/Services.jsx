const SERVICES = [
  {
    title: 'Digital Transformation Consulting',
    description:
      'Strategic roadmaps that align technology with your business goals, from process automation to omnichannel strategy.',
    bullets: [
      'Business process automation & workflow redesign',
      'Agile project management (Scrum, Kanban)',
      'Change management & team enablement',
      'Design Thinking-led problem solving',
    ],
    outcome: 'Up to 80% efficiency improvement and 50% revenue increase for past clients.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Web & Application Development',
    description:
      'Full-stack development for websites, web apps, and e-commerce platforms built on modern frameworks.',
    bullets: [
      'React, Vue.js, Next.js, Angular front-ends',
      'Node.js, PHP, Python back-ends',
      'CMS: WordPress, AEM, Drupal, Sitecore, Payload',
      'E-commerce: Shopify, Magento',
    ],
    outcome: 'Production-ready platforms from marketing sites to complex web applications.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'Scalable, secure cloud architecture on the platforms that fit your business and budget.',
    bullets: [
      'Google Cloud Platform & Firebase',
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'DevOps, CI/CD, and containerization',
    ],
    outcome: 'Well-Architected deployments with reliable uptime and cost optimization.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    title: 'AI & Automation',
    description:
      'Leverage AI and machine learning to automate workflows, generate insights, and unlock new capabilities.',
    bullets: [
      'NLP, RAG, and agentic AI architectures',
      'RPA and cognitive automation',
      'Data analytics & business intelligence',
      'AI-assisted content and process automation',
    ],
    outcome: 'Smarter operations through practical, production-ready AI integration.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that reach your customers wherever they are.',
    bullets: [
      'iOS (Swift) & Android (Kotlin)',
      'Cross-platform: Flutter, React Native',
      'AR/VR/Mixed Reality experiences',
      'IoT and creative technology integrations',
    ],
    outcome: 'Published apps and immersive experiences from concept through app store launch.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'ERP & Systems Integration',
    description:
      'End-to-end ERP implementation and systems integration that unifies your operations on a single platform.',
    bullets: [
      'SaaS ERP deployment (Odoo, Salesforce)',
      'CRM, accounting, and inventory automation',
      'Data migration and legacy system integration',
      'Team training and change management',
    ],
    outcome: 'Unified operations with real-time visibility and measurable cost savings.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          What We Do
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Services &amp; Capabilities
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          End-to-end technology services built for small and medium enterprises.
          From strategy to deployment, we keep things practical, on-budget,
          and&nbsp;results-driven.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {s.description}
              </p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-gray-100 pt-4 text-xs font-medium text-gray-500 dark:border-gray-700">
                {s.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
