import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    [t("footer.servicesHeading")]: [
      { label: t("footer.websiteDesign"), href: "/services" },
      { label: t("footer.ecommerce"), href: "/services" },
      { label: t("footer.seoOptimization"), href: "/services" },
      { label: t("footer.crmIntegrations"), href: "/services" },
    ],
    [t("footer.companyHeading")]: [
      { label: t("footer.about"), href: "/about" },
      { label: t("footer.portfolio"), href: "/portfolio" },
      { label: t("footer.faq"), href: "/faq" },
      { label: t("footer.contact"), href: "/contact" },
    ],
    [t("footer.resourcesHeading")]: [
      { label: t("footer.pricingLink"), href: "/pricing" },
      { label: t("footer.howItWorks"), href: "/#how-it-works" },
      { label: t("footer.privacyPolicy"), href: "/privacy" },
      { label: t("footer.termsOfService"), href: "#" },
    ],
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-midnight)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight"
            >
              Bliksem<span className="text-gradient">IT</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t("footer.description")}
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-light)]"
            >
              {t("footer.startProject")}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} BliksemIT. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
