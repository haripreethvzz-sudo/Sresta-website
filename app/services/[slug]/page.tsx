import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesData, ServiceDetail } from "../../data/services";
import { ServiceOutlineIcon } from "../../components/ServicesSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | SRESTA",
    };
  }

  return {
    title: `${service.title} | SRESTA Electrical Testing & Inspection`,
    description: service.fullDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="site-shell bg-[#ffffff]">
      {/* Sticky Header */}
      <header className="site-header">
        <div className="nav-shell">
          <Link
            href="/"
            className="brand"
            aria-label="SRESTA - Sunrise Electrical Services & Testing Agency"
          >
            <Image
              src="/stesta-logo.png"
              alt="SRESTA Logo"
              width={1672}
              height={941}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/#home">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#trusted">Trusted By</Link>
            <Link href="/#capabilities">Capabilities</Link>
          </nav>

          <Link href="/#contact" className="button button-primary nav-cta">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-3.5 flex items-center gap-2 text-xs font-semibold text-[#64748b]">
          <Link href="/" className="hover:text-[#0f274a] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-[#0f274a] transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#b45309] font-bold">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] to-[#ffffff]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            {/* Category Pill & Number */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="text-xs font-extrabold text-[#b45309] bg-[#fffbeb] px-3 py-1 rounded-md border border-[#f59e0b]/30">
                SERVICE {service.number}
              </span>
              <span className="text-xs font-bold text-[#64748b] tracking-wider uppercase">
                {service.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1]" />
              <span className="text-xs font-mono font-bold text-[#0f274a] bg-white px-2.5 py-0.5 rounded-full border border-[#e2e8f0]">
                {service.keyMetric}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06152b] tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            {/* Overview */}
            <p className="mt-5 text-base sm:text-lg text-[#526077] leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Action Buttons & Quick Standards */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="button button-primary px-7 py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Request On-Site Inspection →
              </a>
              <a
                href="#how-it-works"
                className="button button-secondary px-6 py-3.5 text-sm font-bold"
              >
                View Testing Protocol ↓
              </a>
            </div>

            {/* Standards Compliance Strip */}
            <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#64748b]">
              <span className="font-bold text-[#0f274a] uppercase tracking-wider">Governing Standards:</span>
              <span className="font-semibold text-[#b45309]">{service.standards}</span>
            </div>
          </div>
        </div>
      </section>

      {/* "How It Works" Section: Step-by-Step Visual Process */}
      <section id="how-it-works" className="py-16 md:py-24 bg-[#f8fafc]/70 border-b border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">
              <span /> TESTING PROTOCOL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#06152b] tracking-tight">
              How the <span className="text-highlight">Inspection Works</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#526077] leading-relaxed">
              Our certified testing procedures follow strict IEEE and IEC test methodologies, ensuring thorough verification from pre-test isolation to final engineering compliance reports.
            </p>
          </div>

          {/* Process Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((stepItem, index) => (
              <div
                key={stepItem.step}
                className="relative flex flex-col justify-between p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_2px_8px_rgba(15,39,74,0.03)] hover:shadow-[0_12px_24px_rgba(15,39,74,0.06)] hover:border-[#f59e0b]/40 transition-all duration-200"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-[#b45309] bg-[#fffbeb] px-2.5 py-1 rounded-md border border-[#f59e0b]/20">
                      STEP {stepItem.step}
                    </span>
                    <span className="text-[0.68rem] font-bold text-[#64748b] bg-[#f8fafc] px-2 py-0.5 rounded-full border border-[#e2e8f0]">
                      {stepItem.badge}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-[#0f274a] leading-snug">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#526077] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#f1f5f9] flex items-center gap-1.5 text-[0.72rem] font-bold text-[#10b981]">
                  <span>✓ Standardized Procedure</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Mechanism & Technical Specs: Two-Column Layout */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Column 1: Machine Mechanisms & Physical Phenomena Inspected */}
            <div>
              <div className="eyebrow mb-3">
                <span /> ENGINEERING PHYSICS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152b] tracking-tight mb-4">
                Equipment Mechanisms & <span className="text-highlight">Failure Modes</span>
              </h2>
              <p className="text-sm text-[#526077] leading-relaxed mb-8">
                Our diagnostic testing evaluates the fundamental physical, electrical, and thermal properties of your machinery to pinpoint root-cause degradation:
              </p>

              <div className="space-y-4">
                {service.mechanisms.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl hover:border-[#f59e0b]/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-[#0f274a]">
                        {item.title}
                      </h4>
                      <span className="text-[0.68rem] font-mono text-[#b45309] bg-[#fffbeb] px-2 py-0.5 rounded border border-[#f59e0b]/20 whitespace-nowrap">
                        Mode {idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#526077] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-[#e2e8f0]/80 text-[0.72rem] font-mono text-[#64748b]">
                      <span className="font-bold text-[#0f274a]">Physics Formula / Method:</span> {item.physics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Technical Specifications & Certified Testing Standards */}
            <div>
              <div className="eyebrow mb-3">
                <span /> COMPLIANCE & SPECS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152b] tracking-tight mb-4">
                Technical Specifications & <span className="text-highlight">Equipment</span>
              </h2>
              <p className="text-sm text-[#526077] leading-relaxed mb-8">
                Verified against national and international electrical safety norms using calibrated diagnostic hardware:
              </p>

              {/* Specs Table */}
              <div className="overflow-hidden border border-[#E5E7EB] rounded-xl bg-white shadow-sm mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-[#E5E7EB]">
                    {service.specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[#f8fafc]/60" : "bg-white"}>
                        <td className="px-4 py-3 font-bold text-[#0f274a] w-2/5 border-r border-[#E5E7EB]">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-[#526077] font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Diagnostic Equipment Used */}
              <div className="p-5 bg-white border border-[#E5E7EB] rounded-xl shadow-sm">
                <h4 className="text-xs font-bold text-[#0f274a] uppercase tracking-wider mb-3">
                  Calibrated Instrumentation Used:
                </h4>
                <ul className="space-y-2">
                  {service.equipmentUsed.map((equip, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                      <span>{equip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards Breakdown */}
              <div className="mt-5 p-5 bg-[#fffbeb]/50 border border-[#f59e0b]/20 rounded-xl">
                <h4 className="text-xs font-bold text-[#92400e] uppercase tracking-wider mb-3">
                  Applicable International Standards:
                </h4>
                <div className="space-y-2">
                  {service.standardsList.map((std, i) => (
                    <div key={i} className="text-xs text-[#78350f]">
                      <strong className="font-bold text-[#92400e]">{std.code}:</strong> {std.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-14 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0f274a] to-[#163d75] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div>
              <span className="text-xs font-bold text-[#fcd34d] uppercase tracking-wider">
                RAPID RESPONSE ELECTRICAL TESTING
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Need {service.title} for your industrial facility?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1] max-w-xl">
                SRESTA provides fast, on-site testing and diagnostic services across Visakhapatnam, Andhra Pradesh, and all major industrial corridors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+918866602628"
                className="button bg-[#f59e0b] hover:bg-[#d97706] text-[#06152b] px-6 py-3 text-sm font-bold shadow transition-colors"
              >
                Call +91 88666 02628
              </a>
              <Link
                href="/#contact"
                className="button bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 text-sm font-bold transition-colors"
              >
                Enquire Online →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="section-label">EXPLORE MORE</div>
              <h2 className="text-2xl font-extrabold text-[#06152b] tracking-tight">
                Other <span className="text-highlight">Testing Services</span>
              </h2>
            </div>
            <Link
              href="/#services"
              className="text-xs sm:text-sm font-bold text-[#0f274a] hover:text-[#b45309] transition-colors"
            >
              View All 6 Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 bg-white border border-[#E5E7EB] hover:border-[#f59e0b]/50 rounded-2xl shadow-[0_2px_8px_rgba(15,39,74,0.02)] hover:shadow-[0_12px_24px_rgba(15,39,74,0.06)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#b45309] bg-[#fffbeb] px-2 py-0.5 rounded border border-[#f59e0b]/20">
                      {rel.number}
                    </span>
                    <span className="text-xs text-[#0f274a] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0f274a] group-hover:text-[#b45309] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#526077] line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f1f5f9] text-[0.72rem] font-semibold text-[#64748b]">
                  {rel.keyMetric}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">☀</span>
          <div>
            <strong>SRESTA</strong>
            <small>Sunrise Electrical Services & Testing Agency</small>
          </div>
        </div>

        <p>© {new Date().getFullYear()} SRESTA. All rights reserved.</p>

        <Link href="#top" className="hover:underline text-xs">
          Back to top ↑
        </Link>
      </footer>
    </main>
  );
}
