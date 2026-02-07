import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

const contactMethods = [
  { value: "", label: "Select preferred contact method" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "in-person", label: "In Person" },
];

const contactInfo = [
  { icon: Mail, label: "Email us", value: "hello@brightweb.com" },
  { icon: Phone, label: "Call us", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Visit us", value: "Remote-first, worldwide" },
];

const inputClasses =
  "mt-1.5 block w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all duration-200 focus:border-[var(--color-amber)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/10";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      {/* Header */}
      <div className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-12 pt-32 md:pb-16 md:pt-36">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
          <FadeIn>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-[var(--color-text-secondary)]">
              Tell us about your business and what you need. We'll get back to
              you within 24 hours with a personalized proposal.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact info sidebar */}
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-amber-glow)] text-[var(--color-amber)]">
                      <info.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <FadeIn direction="none">
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
                  <CheckCircle
                    size={48}
                    className="mx-auto text-green-400"
                  />
                  <h2 className="mt-4 font-display text-2xl font-bold">
                    Message sent!
                  </h2>
                  <p className="mt-2 text-[var(--color-text-secondary)]">
                    Thanks for reaching out. We'll review your message and get
                    back to you within 24 hours.
                  </p>
                  <Link
                    to="/"
                    className="mt-6 inline-block rounded-full bg-[var(--color-amber)] px-6 py-3 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    Back to Home
                  </Link>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--color-text-secondary)]"
                      >
                        Email address <span className="text-[var(--color-amber)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[var(--color-text-secondary)]"
                      >
                        Phone number <span className="text-[var(--color-amber)]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[var(--color-text-secondary)]"
                      >
                        Company name <span className="text-[var(--color-amber)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Your Business Name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-sm font-medium text-[var(--color-text-secondary)]"
                      >
                        Preferred contact{" "}
                        <span className="text-[var(--color-amber)]">*</span>
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        required
                        defaultValue=""
                        className={inputClasses + " appearance-none"}
                      >
                        {contactMethods.map((m) => (
                          <option
                            key={m.value}
                            value={m.value}
                            disabled={!m.value}
                          >
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-text-secondary)]"
                    >
                      Message <span className="text-[var(--color-amber)]">*</span>
                    </label>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                      Tell us about your business and the kind of website you
                      need.
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project..."
                      className={inputClasses + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                  >
                    Send Message
                    <Send
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </form>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
