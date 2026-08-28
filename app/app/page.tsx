"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ServicesSection from "./components/ServicesSection";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Trusted By", href: "#trusted" },
  { label: "Capabilities", href: "#capabilities" },
];

const clientSectors = [
  { name: "Power Grid & Transmission", icon: "⚡", tag: "High Voltage" },
  { name: "Steel & Metallurgical Plants", icon: "🏭", tag: "Heavy Industry" },
  { name: "Refineries & Petrochemicals", icon: "🛢️", tag: "Critical Ops" },
  { name: "Manufacturing & Heavy Units", icon: "⚙️", tag: "Industrial" },
  { name: "Port & Maritime Infrastructure", icon: "⚓", tag: "Infrastructure" },
  { name: "Healthcare & Critical Facilities", icon: "🏥", tag: "24/7 Power" },
  { name: "Renewable Energy Parks", icon: "☀️", tag: "Clean Tech" },
  { name: "Commercial & Tech Estates", icon: "🏢", tag: "Distribution" },
];

const services = [
  {
    number: "01",
    title: "Transformer Testing",
    description:
      "Assessment and testing support for transformers to help maintain safe and dependable electrical performance.",
  },
  {
    number: "02",
    title: "Relay Testing",
    description:
      "Testing and verification of protection relays and associated electrical protection schemes.",
  },
  {
    number: "03",
    title: "Cable Testing",
    description:
      "Inspection and electrical testing of cable systems to support operational reliability and condition review.",
  },
  {
    number: "04",
    title: "Motor Testing",
    description:
      "Technical evaluation of electrical motors for service readiness, performance and condition assessment.",
  },
  {
    number: "05",
    title: "Generator Testing",
    description:
      "Testing and assessment of generators and associated system components for dependable operation.",
  },
  {
    number: "06",
    title: "Electrical Equipment Testing",
    description:
      "Support for a wide range of electrical equipment and installations across industrial and commercial environments.",
  },
];

const sectors = [
  "Power & Electrical Infrastructure",
  "Industrial Facilities",
  "Oil & Gas Operations",
  "Manufacturing Units",
  "Healthcare Facilities",
  "Commercial Infrastructure",
  "Utilities & Service Networks",
  "Infrastructure & Industrial Estates",
];

const reasons = [
  {
    number: "01",
    title: "Technical Focus",
    description:
      "SRESTA is built around practical electrical knowledge and service-oriented technical support.",
  },
  {
    number: "02",
    title: "Safety-led Practice",
    description:
      "Testing activities are carried out with a strong emphasis on safe and dependable electrical operations.",
  },
  {
    number: "03",
    title: "Professional Delivery",
    description:
      "A structured approach helps support efficient service execution for electrical systems and equipment.",
  },
  {
    number: "04",
    title: "Local Service Base",
    description:
      "Based in Visakhapatnam, SRESTA supports regional electrical testing and service needs with local responsiveness.",
  },
];

const capabilities = [
  "On-site electrical testing support",
  "Condition assessment of electrical assets",
  "Protection and control system checks",
  "Electrical equipment inspection",
  "Industrial and commercial service support",
  "Practical technical assistance for reliability needs",
];

const trustedStats = [
  {
    value: "50+",
    label: "Companies Served",
    note: "Replace with verified company count",
  },
  {
    value: "100+",
    label: "Projects Completed",
    note: "Replace with verified project count",
  },
  {
    value: "8+",
    label: "Years of Experience",
    note: "Established in 2018",
  },
  {
    value: "06",
    label: "Testing Services",
    note: "Core service categories",
  },
];

export default function Home() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentService = services[activeServiceIndex];
  const nextService = services[(activeServiceIndex + 3) % services.length];

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="nav-shell">
          <a
            href="#home"
            className="brand"
            aria-label="SRESTA - Sunrise Electrical Services & Testing Agency"
          >
            <Image
              src="/stesta-logo.png"
              alt="SRESTA - Sunrise Electrical Services & Testing Agency Logo"
              width={1672}
              height={941}
              priority
              className="brand-logo"
            />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button-primary nav-cta">
            Contact Us
          </a>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="authority-pill">
            <span className="pulse-dot" />
            <span className="authority-icon">⚡</span>
            <strong>ISO 9001 Certified</strong>
            <span className="pill-separator">•</span>
            <span>24/7 Industrial Testing</span>
          </div>

          <div className="eyebrow">
            <span /> Electrical Testing & Services
          </div>

          <h1>
            Dependable
            <span> electrical</span>
            <br />
            service solutions.
          </h1>

          <p className="hero-text">
            Sunrise Electrical Services & Testing Agency (SRESTA) provides
            professional electrical testing and support for equipment, systems
            and infrastructure in industrial, commercial and utility settings.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button button-primary">
              Explore Services
            </a>
            <a href="#contact" className="button button-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>8+ Years</strong>
              <span>Field Experience</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Facilities Serviced</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>High-Voltage Projects</span>
            </div>
            <div>
              <strong>Visakhapatnam</strong>
              <span>HQ & Regional Ops</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="SRESTA Electrical Testing Diagnostics">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="visual-panel">
            <div className="panel-bg-image absolute inset-0">
              <Image
                src="/electrical-testing-hero.jpg"
                alt="Modern High Voltage Electrical Testing Diagnostic Facility"
                fill
                priority
                sizes="(max-width: 768px) 260px, 380px"
                className="panel-img"
              />
              <div className="panel-overlay absolute inset-0" />
            </div>

            <div className="panel-content">
              <div className="panel-badge">
                <span className="live-dot" /> SRESTA LAB
              </div>

              <div className="panel-center">
                <div className="panel-icon">⚡</div>
                <span>Condition Assessment</span>
                <strong>Electrical Testing</strong>
                <small>Inspection • Safety • Reliability</small>
              </div>

              <div className="panel-footer-stat">
                <span>IEEE / IEC Standards</span>
              </div>
            </div>
          </div>

          <div className="mini-card mini-card-top" key={`top-${activeServiceIndex}`}>
            <span className="mini-number">{currentService.number}</span>
            <div className="mini-details">
              <strong>{currentService.title}</strong>
              <small>Active Diagnostics</small>
            </div>
          </div>

          <div className="mini-card mini-card-bottom" key={`btm-${activeServiceIndex}`}>
            <span className="mini-number">{nextService.number}</span>
            <div className="mini-details">
              <strong>{nextService.title}</strong>
              <small>Certified Procedures</small>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-strip" aria-label="Trusted Industry Sectors">
        <div className="marquee-label">TRUSTED ACROSS CRITICAL INDUSTRIAL SECTORS</div>
        <div className="marquee-track">
          <div className="marquee-content">
            {clientSectors.concat(clientSectors).map((item, idx) => (
              <div className="marquee-pill" key={`mq-${idx}`}>
                <span className="mq-icon">{item.icon}</span>
                <span className="mq-name">{item.name}</span>
                <span className="mq-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="trust-bar" aria-label="Key service values">
        <div>
          <span className="trust-icon">✓</span>
          Professional service
        </div>
        <div>
          <span className="trust-icon">✓</span>
          Safety-driven work
        </div>
        <div>
          <span className="trust-icon">✓</span>
          Reliable execution
        </div>
        <div>
          <span className="trust-icon">✓</span>
          Established since 2018
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">ABOUT SRESTA</div>

        <div className="split-layout">
          <div>
            <h2>
              Electrical testing
              <br />
              <span>you can rely on.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p className="lead">
              Sunrise Electrical Services & Testing Agency (SRESTA) is an
              electrical testing and service company established in 2018 in
              Visakhapatnam, Andhra Pradesh.
            </p>

            <p>
              We support electrical systems through practical testing services
              spanning transformers, protection relays, cables, motors,
              generators and a range of electrical equipment.
            </p>

            <p>
              Our focus is on dependable service execution, safety-conscious
              practices and clear technical support for clients across industrial
              and infrastructure environments.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section id="industries" className="section industries-section">
        <div className="industries-copy">
          <div className="section-label">INDUSTRIES</div>

          <h2>
            Supporting
            <br />
            <span>critical infrastructure.</span>
          </h2>

          <p>
            SRESTA serves diverse industrial and infrastructure environments where
            dependable electrical performance is essential.
          </p>
        </div>

        <div className="industry-list" role="list" aria-label="Industries served">
          {sectors.map((sector, index) => (
            <div className="industry-item" key={sector} role="listitem">
              <span>0{index + 1}</span>
              <strong>{sector}</strong>
              <span className="industry-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section id="trusted" className="section trusted-section">
        <div className="section-label">TRUSTED BY</div>

        <div className="trusted-header">
          <div>
            <h2>
              Companies we&apos;ve
              <span> worked with.</span>
            </h2>
          </div>

          <p>
            SRESTA supports industrial, commercial and infrastructure clients
            with dependable electrical testing and inspection services.
          </p>
        </div>

        <div className="stats-grid">
          {trustedStats.map((stat, index) => (
            <div className="stat-card" key={stat.label} style={{ animationDelay: `${index * 120}ms` }}>
              <span className="stat-value">{stat.value}</span>
              <strong>{stat.label}</strong>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="section-label">WHY SRESTA</div>

        <div className="split-layout why-layout">
          <div>
            <h2>
              Built around
              <br />
              <span>reliability.</span>
            </h2>
          </div>

          <div className="reason-grid">
            {reasons.map((reason) => (
              <div className="reason-card" key={reason.number}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-label">OUR CAPABILITIES</div>

        <div className="capabilities-header">
          <h2>
            Practical capability
            <span> for electrical systems.</span>
          </h2>
          <p>
            From routine testing to system-level service support, SRESTA focuses
            on dependable solutions for electrical assets and installations.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <div className="capability-item" key={capability}>
              <span className="capability-number">0{index + 1}</span>
              <p>{capability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <div className="section-label">LET&apos;S WORK TOGETHER</div>

          <h2>
            Need electrical
            <br />
            <span>testing support?</span>
          </h2>

          <p>Contact SRESTA to discuss your requirements.</p>
        </div>

        <a href="#contact" className="button button-primary cta-button">
          Contact SRESTA
        </a>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-heading">
          <div className="section-label">CONTACT</div>

          <h2>
            Let&apos;s talk
            <br />
            <span>about your project.</span>
          </h2>
        </div>

        <div className="contact-grid">
          <a href="tel:+918866602628" className="contact-card">
            <span>PHONE</span>
            <strong>+91 88666 02628</strong>
            <small>Call us directly →</small>
          </a>

          <a
            href="https://wa.me/918866602628"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>WHATSAPP</span>
            <strong>+91 88666 02628</strong>
            <small>Chat with us →</small>
          </a>

          <a href="mailto:sresta.etc@gmail.com" className="contact-card">
            <span>EMAIL</span>
            <strong>sresta.etc@gmail.com</strong>
            <small>Send an enquiry →</small>
          </a>

          <div className="contact-card">
            <span>LOCATION</span>
            <strong>Visakhapatnam</strong>
            <small>Andhra Pradesh, India</small>
          </div>
        </div>

        <div className="address-card">
          <strong>Office Address</strong>
          <p>
            Sunrise Electrical Services and Testing Agency
            <br />
            D.No: 31-38-280/4, Kapu Jaggaraju Peta,
            <br />
            Dock Yard Colony, Visakhapatnam,
            <br />
            Andhra Pradesh – 530049
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">☀</span>
          <div>
            <strong>SRESTA</strong>
            <small>Sunrise Electrical Services & Testing Agency</small>
          </div>
        </div>

        <p>© {new Date().getFullYear()} SRESTA. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
