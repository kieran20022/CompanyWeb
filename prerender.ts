import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");

const routes = [
  { url: "/", title: "BliksemIT — Professionele Websites voor het MKB", description: "BliksemIT bouwt snelle, betaalbare websites op maat voor het MKB. Van webdesign en e-commerce tot SEO en CRM-integraties.", canonical: "https://bliksemit.nl/" },
  { url: "/services", title: "Diensten — BliksemIT", description: "Webdesign, e-commerce, SEO, mobile-first design, CRM-integraties en website onderhoud. Ontdek wat BliksemIT voor jouw bedrijf kan doen.", canonical: "https://bliksemit.nl/services" },
  { url: "/pricing", title: "Prijzen — BliksemIT", description: "Betaalbare website pakketten voor het MKB. Transparante prijzen, geen verborgen kosten. Vanaf €300.", canonical: "https://bliksemit.nl/pricing" },
  { url: "/about", title: "Over Ons — BliksemIT", description: "Leer het team achter BliksemIT kennen. Wij bouwen websites die werken voor het MKB.", canonical: "https://bliksemit.nl/about" },
  { url: "/portfolio", title: "Portfolio — BliksemIT", description: "Bekijk onze recente projecten. Websites op maat voor diverse branches en bedrijven.", canonical: "https://bliksemit.nl/portfolio" },
  { url: "/faq", title: "Veelgestelde Vragen — BliksemIT", description: "Antwoorden op veelgestelde vragen over webdesign, prijzen, proces en samenwerking met BliksemIT.", canonical: "https://bliksemit.nl/faq" },
  { url: "/contact", title: "Contact — BliksemIT", description: "Neem contact op met BliksemIT voor een gratis gesprek over jouw website project.", canonical: "https://bliksemit.nl/contact" },
];

// FAQ data for JSON-LD on the FAQ page
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wat maakt een website op maat anders dan een template?", "acceptedAnswer": { "@type": "Answer", "text": "Een website op maat wordt vanaf nul specifiek voor jouw bedrijf gebouwd. Elk element wordt ontworpen rond jouw merk, doelgroep en doelen, in plaats van een voorgemaakt stramien te gebruiken." } },
    { "@type": "Question", "name": "Hoe bouwen jullie webshops voor het MKB?", "acceptedAnswer": { "@type": "Answer", "text": "Wij bouwen e-commerce sites die eenvoudig te beheren maar krachtig zijn. Met veilige betalingsverwerking, productcatalogus, geoptimaliseerde checkout en voorraadbeheer." } },
    { "@type": "Question", "name": "Hoe helpen jullie mijn bedrijf te ranken op Google?", "acceptedAnswer": { "@type": "Answer", "text": "Wij bouwen SEO in de basis van elke website met snelle laadtijden, correcte HTML-structuur, meta-tags, gestructureerde data en content-optimalisatie." } },
    { "@type": "Question", "name": "Waarom moet mijn website mobile-first ontworpen worden?", "acceptedAnswer": { "@type": "Answer", "text": "Meer dan 60% van al het webverkeer komt van mobiele apparaten. Mobile-first design zorgt ervoor dat de mobiele ervaring optimaal is." } },
  ],
};

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

  // Import the server entry
  const serverEntryPath = pathToFileURL(
    path.resolve(distDir, "server/entry-server.js"),
  ).href;
  const { render } = await import(serverEntryPath) as {
    render: (url: string) => string;
  };

  for (const route of routes) {
    const appHtml = render(route.url);

    let html = template.replace("<!--ssr-outlet-->", appHtml);

    // Inject per-page title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`,
    );

    // Inject per-page meta description
    html = html.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${route.description}"`,
    );

    // Inject per-page canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${route.canonical}"`,
    );

    // Inject per-page og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${route.canonical}"`,
    );

    // Inject FAQ JSON-LD on FAQ page
    if (route.url === "/faq") {
      html = html.replace(
        "</head>",
        `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>\n</head>`,
      );
    }

    // Write to dist
    const filePath =
      route.url === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, route.url.slice(1), "index.html");

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log(`  Prerendered: ${route.url} → ${path.relative(distDir, filePath)}`);
  }

  console.log("Prerender complete!");
}

prerender();
