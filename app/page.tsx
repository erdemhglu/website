import HomeContent from "@/components/HomeContent"
import { getAllPosts } from "@/lib/posts"

export default async function PersonalWebsite() {
  const blogPosts = await getAllPosts()
  const githubRepos = [
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
        de: "Eine urspruenglich mit einem fertigen Theme und einem Drag-and-Drop-Baukasten erstellte WordPress-Website wurde mit Next.js und Tailwind CSS neu entwickelt. Die Inhaltsstruktur wurde beibehalten, waehrend die Stile dem urspruenglichen Design angepasst wurden, und uebermaessige Gestaltungselemente wurden vereinfacht. Dadurch konnte eine deutliche Leistungssteigerung erzielt und ein weniger ueberladenes, augenschonenderes Erscheinungsbild erreicht werden. Die urspruengliche Website nutzte das RuizArch-Theme des BSLThemes-Teams.",
        en: "Rebuilt a WordPress site that was originally created with a pre-made theme and a drag-and-drop page builder, using Next.js and Tailwind CSS. The content layout was kept the same while the styling was matched to the original design, and overly excessive visual elements were simplified. This resulted in a significant performance boost and a cleaner, less visually overwhelming experience. The original site used the RuizArch theme by the BSLThemes team.",
      },
      photos: [
        { src: "https://i.ibb.co/rK5v2jYz/brave-d-NIWRm-STb-V.png", alt: "Homepage", title: "Homepage" },
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
        { src: "https://i.ibb.co/Ng95rSBc/agacmaketi1.png", alt: "Homepage", title: "Homepage" },
        { src: "https://i.ibb.co/mCTGp0yL/agacmaketi2-1.png", alt: "Product List", title: "Product List" },
        { src: "https://i.ibb.co/cSV8MXxT/agacmaketi4.png", alt: "Product Page", title: "Product Page" },
        { src: "https://i.ibb.co/F4z5nQzD/agacmaketi3.png", alt: "Login / Register", title: "Login / Register" },
        { src: "https://i.ibb.co/jkP9p8Pg/agacmaketi5.png", alt: "Shopping Cart", title: "Shopping Cart" },
        { src: "https://i.ibb.co/YFY5Yyn1/agacmaketi6-1.png", alt: "Payment", title: "Payment" },
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
        { src: "https://i.ibb.co/PG9gGmYn/Bildschirmfoto-20260531-213011.png", alt: "System Control & Data Table View", title: "System Control & Data Table View"},
        { src: "https://i.ibb.co/nNcsNgRm/Bildschirmfoto-20260531-213101.png", alt: "Operator Management Pop-up", title: "Operator Management Pop-up" },
        { src: "https://i.ibb.co/5grYmYw4/Bildschirmfoto-20260531-213130.png", alt: "Graphical Temperature Dashboard", title: "Graphical Temperature Dashboard" },
        { src: "https://i.ibb.co/5X1BFYhM/Bildschirmfoto-20260531-213321.png", alt: "Log Session Setup View", title: "Log Session Setup View" },
        { src: "https://i.ibb.co/PGwmpqDy/Bildschirmfoto-20260531-213356.png", alt: "Active Logging & Live History Table", title: "Active Logging & Live History Table" },
        { src: "https://i.ibb.co/VWP9D351/Bildschirmfoto-20260531-213413.png", alt: "Generated PDF Report View", title: "Generated PDF Report View" },
        { src: "https://i.ibb.co/BKYk1sXS/Bildschirmfoto-20260531-213422.png", alt: "Saved Log Details Pop-up", title: "Saved Log Details Pop-up" },
        { src: "https://i.ibb.co/mVQm8WyC/Bildschirmfoto-20260531-213432.png", alt: "Public Verification View", title: "Public Verification View" },
        { src: "https://i.ibb.co/LhCWVjbM/Bildschirmfoto-20260531-213458.png", alt: "Post-Process Media Upload View", title: "Post-Process Media Upload View" },
        { src: "https://i.ibb.co/r24YBD6F/Bildschirmfoto-20260531-213628.png", alt: "Local Storage & Backup Settings", title: "Local Storage & Backup Settings" },
      ],
    },
  ]

  return <HomeContent posts={blogPosts} repos={githubRepos} groups={projectGroups} />
}
