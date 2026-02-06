const MODULES = [
  {
    name: 'Documents',
    desc: 'Centralized import documentation, pre-alerts, and compliance tracking in one secure repository.',
  },
  {
    name: 'Inventory',
    desc: 'Real-time shipment monitoring, automated stock updates, and warehouse location management.',
  },
  {
    name: 'CRM & Sales',
    desc: 'Inquiry management, automated quotations, and seamless customer communication workflows.',
  },
  {
    name: 'Accounting',
    desc: 'Automated billing, invoice generation, and real-time financial reconciliation tied to operations.',
  },
];

const WORKFLOW_STEPS = [
  { step: '01', title: 'Pre-Alert Received', desc: 'Automated document ingestion and validation.' },
  { step: '02', title: 'Shipment Tracked', desc: 'Real-time inventory updates linked to container status and customs clearance.' },
  { step: '03', title: 'CSR Coordination', desc: 'Automatic alerts to the CSR team; all communications logged and searchable.' },
  { step: '04', title: 'Delivery Completed', desc: 'Automated billing and accounting entries; customer notified in real-time.' },
];

export default function ERPSpotlight() {
  return (
    <section id="erp" className="section-padding bg-primary text-white">
      <div className="container-max">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          ERP Client Spotlight
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Transforming Logistics with SaaS&nbsp;ERP
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          A comprehensive automation solution for a Philippine logistics
          company, covering import operations, sales workflows, and
          operational&nbsp;excellence.
        </p>

        {/* Key metrics */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-3xl font-bold text-accent">&#8369;1.5&ndash;2M</p>
            <p className="mt-1 text-sm text-gray-400">Projected Annual Savings</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-3xl font-bold text-accent">20&ndash;30%</p>
            <p className="mt-1 text-sm text-gray-400">Efficiency Gains</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-3xl font-bold text-accent">2&ndash;3 Mo</p>
            <p className="mt-1 text-sm text-gray-400">Deployment Timeline</p>
          </div>
        </div>

        {/* Challenge / Solution */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">The Challenge</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                Paper-based import documentation and shipment tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                Siloed data across CSR, accounting, and operations teams
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                Container penalties of &#8369;2,000&ndash;&#8369;6,000/day due to processing delays
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                Hours lost to manual data re-entry and reconciliation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">The Solution</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A SaaS ERP platform that integrates all operations — from pre-alert to
              delivery, inquiry to billing — providing real-time visibility
              across every process. The platform includes enterprise-grade
              encryption, multi-factor authentication, automated backups, and
              role-based access control.
            </p>
          </div>
        </div>

        {/* Modules */}
        <div className="mt-16">
          <h3 className="mb-6 text-lg font-semibold">Platform Modules</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{m.name}</h4>
                <p className="mt-2 text-sm text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-16">
          <h3 className="mb-6 text-lg font-semibold">
            Automated Workflow: Pre-Alert to Delivery
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((w) => (
              <div key={w.step} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {w.step}
                </span>
                <div>
                  <p className="font-medium text-white">{w.title}</p>
                  <p className="mt-1 text-sm text-gray-400">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-bold">
            Interested in ERP for your business?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
            We help SMEs evaluate, implement, and optimize SaaS ERP solutions
            with significantly lower total cost of ownership compared to
            traditional platforms.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Talk to Us About ERP
          </a>
        </div>
      </div>
    </section>
  );
}
