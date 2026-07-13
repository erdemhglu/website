import HomeContent from "@/components/HomeContent"
import { getAllPosts } from "@/lib/posts"

export default async function PersonalWebsite() {
  const blogPosts = await getAllPosts()
  const githubRepos = [
    {
      name: "website",
      description: {
        de: "Quellcode dieser Website — persoenliche Seite, Portfolio und Blog, gebaut mit Next.js, TypeScript und Tailwind CSS.",
        en: "Source code of this website — personal site, portfolio, and blog, built with Next.js, TypeScript, and Tailwind CSS.",
      },
      href: "https://github.com/erdemhglu/website",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      name: "gib-efatura-for-woocommerce",
      description: {
        de: "Ein WordPress-Plugin, das aus WooCommerce-Bestellungen ueber das GIB-e-Arsiv-Portal e-Fatura/e-Arsiv-Rechnungen erstellt, die Rechnung per E-Mail versendet, sie auf der Website speichert bzw. zum Download bereitstellt und die Erstellung doppelter Rechnungen verhindert.",
        en: "A WordPress plugin that issues e-Fatura/e-Arsiv invoices from WooCommerce orders via the GIB e-Arsiv portal, emails the invoice to the customer, stores it on the site for download, and prevents duplicate invoice generation.",
      },
      href: "https://github.com/erdemhglu/gib-efatura-for-woocommerce",
      tags: ["PHP", "WordPress", "WooCommerce"],
    },
    {
      name: "otobusum-anlik",
      description: {
        de: "Fork von metkm's plattformuebergreifender Transit-App, auf iOS-only mit Apple Maps umgestellt. Bietet Live-Bus-Tracking, Routenvisualisierung und Optimierung fuer iOS-Geraete.",
        en: "Fork of metkm's multi-platform transit app, converted to iOS-only with Apple Maps. Features live bus tracking, route visualization, optimized for iOS devices.",
      },
      href: "https://github.com/erdemhglu/otobusum-anlik",
      tags: ["TypeScript", "iOS", "React Native", "Expo"],
    },
    {
      name: "naaltech/naal-org",
      description: {
        de: "Schuelerplattform des Nevzat Ayaz Anatolian High School. Interaktion, Club-Management und Zertifizierungssystem.",
        en: "Nevzat Ayaz Anatolian High School student platform. Student interaction, club management and certification system.",
      },
      href: "https://github.com/naaltech/naal-org",
      tags: ["Typescript", "Next.js", "Tailwind CSS", "Supabase"],
    },
    {
      name: "monitserver",
      description: {
        de: "Leichtgewichtiges verteiltes Monitoring-System in Haskell, das Systemmetriken, Docker-Container und KVM-VMs ueber mehrere Server hinweg ueberwacht.",
        en: "A lightweight distributed monitoring system written in Haskell that tracks system metrics, Docker containers, and KVM virtual machines across multiple servers.",
      },
      href: "https://github.com/erdemhglu/monitserver",
      tags: ["Haskell", "Distributed Systems", "Monitoring"],
    },
    {
      name: "iyzico/iyzipay-woocommerce-installment",
      description: {
        de: "Das iyzico-Installment-Plugin zeigt Ratenzahlungsoptionen mit iyzico-Berechnung auf WooCommerce-Produktseiten an.",
        en: "The iyzico Installment plugin displays installment options to your customers using iyzico's installment calculation on WooCommerce product pages.",
      },
      href: "https://github.com/iyzico/iyzipay-woocommerce-installment",
      tags: ["JavaScript", "WooCommerce", "Payment Gateway"],
    },
    {
      name: "discord-google-directory-worker",
      description: {
        de: "Discord-Slash-Command-Bot auf Cloudflare Workers, integriert mit dem Google Workspace Admin SDK (Directory API).",
        en: "A Discord slash-command bot deployed on Cloudflare Workers that integrates with Google Workspace Admin SDK (Directory API).",
      },
      href: "https://github.com/erdemhglu/discord-google-directory-worker",
      tags: ["TypeScript", "Cloudflare Workers"],
    },
    {
      name: "stwdo-roomchecker",
      description: {
        de: "Automatisches Room-Checking-System des Studierendenwerks Dortmund mit Telegram-Benachrichtigungen.",
        en: "Studierendenwerk Dortmund automatic room checking system with Telegram notifications.",
      },
      href: "https://github.com/erdemhglu/stwdo-roomchecker",
      tags: ["JavaScript"],
    },
    {
      name: "nasdaq-visualiser",
      description: {
        de: "Datenanalyse mit historischen NASDAQ-Daten.",
        en: "Doing some data analysis using historical data from NASDAQ.",
      },
      href: "https://github.com/erdemhglu/nasdaq-visualiser",
      tags: ["Python", "Jupyter Notebook", "Data Analysis"],
    },
  ]

  const projectGroups = [
    {
      name: "AsferAmbalaj.com",
      website: "https://asferambalaj.com",
      description: {
        de: "Eine urspruenglich mit einem fertigen Theme und einem Drag-and-Drop-Baukasten erstellte WordPress-Website wurde mit Next.js und Tailwind CSS neu entwickelt. Die Inhaltsstruktur wurde beibehalten, waehrend die Stile dem urspruenglichen Design angepasst wurden, und uebermaessige Gestaltungselemente wurden vereinfacht. Dadurch konnte eine deutliche Leistungssteigerung erzielt und ein weniger ueberladenes, augenschonenderes Erscheinungsbild erreicht werden.",
        en: "Rebuilt a WordPress site that was originally created with a pre-made theme and a drag-and-drop page builder, using Next.js and Tailwind CSS. The content layout was kept the same while the styling was matched to the original design, and overly excessive visual elements were simplified. This resulted in a significant performance boost and a cleaner, less visually overwhelming experience.",
      },
      photos: [
        { src: "/portfolio/asferambalaj/homepage.webp", alt: "Homepage", title: "Homepage" },
      ],
    },
    {
      name: "AgacMaketi.com",
      website: "https://agacmaketi.com",
      description: {
        de: "Entwicklung eines WooCommerce-basierten E-Commerce-Webshops fuer den Online-Verkauf von Modellbaeumen. Integration der iyzico-Zahlungsinfrastruktur einschliesslich Implementierung des offiziellen WooCommerce-Zahlungsplugins. Funktionale Einschraenkungen des Plugins wurden durch zusaetzliche Erweiterungen und individuelle Konfigurationen behoben, um einen sicheren und reibungslosen Zahlungsprozess zu gewaehrleisten.",
        en: "Built a WooCommerce-based e-commerce shop for selling model trees online. Integrated iyzico payments, including the official WooCommerce payment plugin. Addressed plugin limitations with custom extensions and configuration to ensure a secure, smooth checkout flow.",
      },
      photos: [
        { src: "/portfolio/agacmaketi/homepage.webp", alt: "Homepage", title: "Homepage" },
        { src: "/portfolio/agacmaketi/product-list.webp", alt: "Product List", title: "Product List" },
        { src: "/portfolio/agacmaketi/product-page.webp", alt: "Product Page", title: "Product Page" },
        { src: "/portfolio/agacmaketi/login-register.webp", alt: "Login / Register", title: "Login / Register" },
        { src: "/portfolio/agacmaketi/shopping-cart.webp", alt: "Shopping Cart", title: "Shopping Cart" },
        { src: "/portfolio/agacmaketi/payment.webp", alt: "Payment", title: "Payment" },
      ],
    },
    {
      name: {
        de: "ISPM-15 Computergestuetztes Automatisierungssystem fuer Waermebehandlungsoefen",
        en: "ISPM-15 Computerized Automation System for Heat-Treatment Ovens",
      },
      website: "https://demo.ispm15.app",
      description: {
        de: "Entwicklung eines spezialisierten Ueberwachungs- und Dokumentationssystems fuer ISPM-15-Waermebehandlungsprozesse. Da es in der Branche kein richtlinienkonformes Programm fuer die Rueckverfolgbarkeit des Waermebehandlungsprozesses von Holzverpackungen gab, wurde das System konzipiert, um diese Luecke zu schliessen. Es wird derzeit von mehr als 10 Unternehmen in der Branche aktiv genutzt. Die Anwendung zeichnet sich durch eine nahtlose HMI-Integration aus, die das Echtzeit-Auslesen von Thermostatdaten direkt aus Delta HMI-Steuerungen ermoeglicht. Zur Gewaehrleistung hoechster Datenintegritaet wurde eine robuste SQL-Datenbankstruktur implementiert, die eine manipulationssichere Speicherung aller Sensordaten waehrend des gesamten Prozesses garantiert. Ein besonderer Schwerpunkt liegt auf der erweiterten Berichterstattung: Das System erstellt automatisch QR-kodierte Berichte, in die Operatoren zusaetzlich Videobeweise und Bilder des Prozesses direkt verknuepfen koennen, um die Transparenz zu maximieren. Die gesamte Loesung wurde mit Tauri und Tailwind CSS entwickelt, was eine leichtgewichtige, performante Desktop-Performance mit einer modernen, benutzerfreundlichen Oberflaeche vereint.",
        en: "Built a specialized monitoring and documentation system for ISPM-15 heat-treatment processes. The system fills an industry gap by providing compliant traceability for wood packaging heat treatment and is used by 10+ companies. It includes seamless HMI integration for real-time thermostat data from Delta HMI controllers and a robust SQL database that ensures tamper-proof storage of all sensor data. Reporting is enhanced with automatic QR-coded reports where operators can link videos and images for full transparency. The solution was built with Tauri and Tailwind CSS for lightweight, high-performance desktop use and a modern, user-friendly interface.",
      },
      photos: [
        { src: "/portfolio/ispm15/01-control-data-table.webp", alt: "System Control & Data Table View", title: "System Control & Data Table View"},
        { src: "/portfolio/ispm15/02-operator-management.webp", alt: "Operator Management Pop-up", title: "Operator Management Pop-up" },
        { src: "/portfolio/ispm15/03-temperature-dashboard.webp", alt: "Graphical Temperature Dashboard", title: "Graphical Temperature Dashboard" },
        { src: "/portfolio/ispm15/04-log-session-setup.webp", alt: "Log Session Setup View", title: "Log Session Setup View" },
        { src: "/portfolio/ispm15/05-active-logging.webp", alt: "Active Logging & Live History Table", title: "Active Logging & Live History Table" },
        { src: "/portfolio/ispm15/06-pdf-report.webp", alt: "Generated PDF Report View", title: "Generated PDF Report View" },
        { src: "/portfolio/ispm15/07-saved-log-details.webp", alt: "Saved Log Details Pop-up", title: "Saved Log Details Pop-up" },
        { src: "/portfolio/ispm15/08-public-verification.webp", alt: "Public Verification View", title: "Public Verification View" },
        { src: "/portfolio/ispm15/09-media-upload.webp", alt: "Post-Process Media Upload View", title: "Post-Process Media Upload View" },
        { src: "/portfolio/ispm15/10-storage-backup.webp", alt: "Local Storage & Backup Settings", title: "Local Storage & Backup Settings" },
      ],
    },
  ]

  return <HomeContent posts={blogPosts} repos={githubRepos} groups={projectGroups} />
}
