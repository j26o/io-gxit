import { useState } from 'react';

const INITIAL = { name: '', email: '', company: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    // Placeholder submit handler — replace with backend integration
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm(INITIAL);
    setErrors({});
  }

  const fieldClass = (name) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-accent focus:ring-1 focus:ring-accent dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-accent ${
      errors[name] ? 'border-red-400' : 'border-gray-300 dark:border-gray-600'
    }`;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Let&rsquo;s Talk About Your&nbsp;Project
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Whether you need a full digital transformation roadmap, a new web
              platform, or an ERP evaluation &mdash; we&rsquo;re here to&nbsp;help.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white">Email</dt>
                <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="mailto:hello@gxit.io"
                    className="transition-colors hover:text-accent"
                  >
                    hello@gxit.io
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white">Phone</dt>
                <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="tel:+639171558339"
                    className="transition-colors hover:text-accent"
                  >
                    +63 917 155 8339
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white">Location</dt>
                <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">Manila, Philippines</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white">LinkedIn</dt>
                <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href="https://linkedin.com/in/rolandbaldovino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    /in/rolandbaldovino
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form side */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center dark:border-green-800 dark:bg-green-900/20">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-green-700 dark:text-green-400">
                    Thank you for reaching out. We&rsquo;ll get back to you
                    within 24&nbsp;hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={fieldClass('name')}
                    placeholder="Juan dela Cruz"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={fieldClass('email')}
                    placeholder="juan@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    className={fieldClass('company')}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={fieldClass('message')}
                    placeholder="Tell us about your project or what you need help with..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
