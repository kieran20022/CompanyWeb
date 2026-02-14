import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  CheckCircle,
  Mail,
  Phone,
  // MapPin,
} from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, label: t("contact.emailUs"), value: "kieran@bliksemit.nl" },
    { icon: Phone, label: t("contact.callUs"), value: "06 - 48 65 18 09" },
  ];

  const contactMethods = [
    { value: "", label: t("contact.selectMethod") },
    { value: "email", label: t("contact.email") },
    { value: "phone", label: t("contact.phone") },
    { value: "in-person", label: t("contact.inPerson") },
  ];

  const inputClasses =
    "mt-1.5 block w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all duration-200 focus:border-[var(--color-amber)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)]/10";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
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
            {t("contact.backHome")}
          </Link>
          <FadeIn>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("contact.heading")}
              <span className="text-gradient">
                {t("contact.headingHighlight")}
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-[var(--color-text-secondary)]">
              {t("contact.description")}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
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

          <div className="lg:col-span-8">
            {submitted ? (
              <FadeIn direction="none">
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
                  <CheckCircle size={48} className="mx-auto text-green-400" />
                  <h2 className="mt-4 font-display text-2xl font-bold">
                    {t("contact.successHeading")}
                  </h2>
                  <p className="mt-2 text-[var(--color-text-secondary)]">
                    {t("contact.successDescription")}
                  </p>
                  <Link
                    to="/"
                    className="mt-6 inline-block rounded-full bg-[var(--color-amber)] px-6 py-3 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    {t("contact.backToHome")}
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
                        {t("contact.emailLabel")}{" "}
                        <span className="text-[var(--color-amber)]">*</span>
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
                        {t("contact.phoneLabel")}{" "}
                        <span className="text-[var(--color-amber)]">*</span>
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
                        {t("contact.companyLabel")}{" "}
                        <span className="text-[var(--color-amber)]">*</span>
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
                        {t("contact.preferredContact")}{" "}
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
                      {t("contact.messageLabel")}{" "}
                      <span className="text-[var(--color-amber)]">*</span>
                    </label>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                      {t("contact.messageHint")}
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contact.messagePlaceholder")}
                      className={inputClasses + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                  >
                    {t("contact.sendMessage")}
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
