import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const contactMethods = [
  { value: "", label: "Select preferred contact method" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "in-person", label: "In Person" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header area */}
      <div className="bg-gray-50 pb-12 pt-32 dark:bg-gray-900 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Tell us about your business and what you're looking for. We'll get
              back to you within 24 hours with a personalized proposal.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {submitted ? (
          <FadeIn direction="none">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center dark:border-green-900 dark:bg-green-950">
              <CheckCircle
                size={48}
                className="mx-auto text-green-600 dark:text-green-400"
              />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                Message sent!
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thanks for reaching out. We'll review your message and get back
                to you within 24 hours.
              </p>
              <Link
                to="/"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Back to Home
              </Link>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>

              {/* Company name */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="Your Business Name"
                  className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>

              {/* Preferred contact method */}
              <div>
                <label
                  htmlFor="contactMethod"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Preferred contact method{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  required
                  defaultValue=""
                  className="mt-1.5 block w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                >
                  {contactMethods.map((m) => (
                    <option key={m.value} value={m.value} disabled={!m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                  Describe what you're looking for — a question, a website idea,
                  or a full proposal.
                </p>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your business and what kind of website you need..."
                  className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
