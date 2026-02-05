const footerLinks = {
  Services: [
    { label: "Website Design", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Branding", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Bright<span className="text-blue-600">Web</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Professional websites for small businesses. Fast, affordable, and
              built to grow with you.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-gray-900">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BrightWeb. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
