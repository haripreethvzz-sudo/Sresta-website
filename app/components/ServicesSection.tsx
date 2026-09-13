"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData, ServiceDetail } from "../data/services";

/* -------------------------------------------------------------
 * Clean Minimal Outline Icons for Each Service
 * ------------------------------------------------------------- */
export function ServiceOutlineIcon({ type, className = "w-7 h-7" }: { type: ServiceDetail["iconType"]; className?: string }) {
  switch (type) {
    case "transformer":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="24" height="20" rx="3" />
          <path d="M7 11C9 11 9 14 7 14C9 14 9 17 7 17C9 17 9 20 7 20" stroke="#f59e0b" strokeWidth="2" />
          <path d="M25 11C23 11 23 14 25 14C23 14 23 17 25 17C23 17 23 20 25 20" stroke="#0f274a" strokeWidth="2" />
          <line x1="14" y1="10" x2="14" y2="22" strokeDasharray="2 2" />
          <line x1="18" y1="10" x2="18" y2="22" strokeDasharray="2 2" />
        </svg>
      );
    case "relay":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <circle cx="9" cy="16" r="1.5" fill="currentColor" />
          <circle cx="23" cy="16" r="1.5" fill="currentColor" />
          <line x1="9" y1="16" x2="19" y2="10" stroke="#f59e0b" strokeWidth="2" />
          <rect x="11" y="20" width="10" height="4" rx="1" fill="#0f274a" stroke="none" />
        </svg>
      );
    case "cable":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="8" strokeDasharray="2 2" stroke="#b45309" />
          <circle cx="16" cy="11.5" r="2.25" fill="#f59e0b" stroke="none" />
          <circle cx="12" cy="18.5" r="2.25" fill="#0f274a" stroke="none" />
          <circle cx="20" cy="18.5" r="2.25" fill="#0f274a" stroke="none" />
        </svg>
      );
    case "motor":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="7" width="24" height="18" rx="3" />
          <line x1="8" y1="4" x2="8" y2="7" />
          <line x1="16" y1="4" x2="16" y2="7" />
          <line x1="24" y1="4" x2="24" y2="7" />
          <circle cx="16" cy="16" r="5" stroke="#f59e0b" />
          <circle cx="16" cy="16" r="1.5" fill="#0f274a" />
        </svg>
      );
    case "generator":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="12" />
          <path d="M10 16C12 10 14 10 16 16C18 22 20 22 22 16" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="16" cy="16" r="3.5" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "equipment":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="24" height="22" rx="3" />
          <rect x="7" y="8" width="18" height="10" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M8 13Q11 9 14 13T20 13T24 13" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <line x1="8" y1="22" x2="24" y2="22" />
        </svg>
      );
  }
}

/* -------------------------------------------------------------
 * Clean, Minimal Service Card Component
 * ------------------------------------------------------------- */
function CleanServiceCard({ service, index }: { service: ServiceDetail; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col justify-between h-full p-7 bg-white border border-[#E5E7EB] hover:border-[#f59e0b]/50 rounded-2xl shadow-[0_2px_12px_rgba(15,39,74,0.03)] hover:shadow-[0_16px_36px_rgba(15,39,74,0.08)] transition-all duration-300 overflow-hidden"
      >
        {/* Top Header: Badge & Number */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-[#b45309] bg-[#fffbeb] px-2.5 py-1 rounded-md border border-[#f59e0b]/20">
                {service.number}
              </span>
              <span className="text-[0.72rem] font-semibold text-[#64748b] tracking-wider uppercase">
                {service.category}
              </span>
            </div>

            {/* Subtle Arrow Indicator */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f8fafc] text-[#0f274a] group-hover:bg-[#fef3c7] group-hover:text-[#b45309] transition-colors duration-200">
              <span className="text-sm font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
          </div>

          {/* Outline Icon */}
          <div className="inline-flex items-center justify-center p-3 bg-[#f8fafc] group-hover:bg-[#fffbeb] border border-[#E5E7EB] group-hover:border-[#f59e0b]/30 rounded-xl text-[#0f274a] mb-5 transition-colors duration-200">
            <ServiceOutlineIcon type={service.iconType} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#0f274a] group-hover:text-[#b45309] transition-colors duration-200">
            {service.title}
          </h3>

          {/* Crisp 2-line summary */}
          <p className="mt-2.5 text-sm text-[#526077] leading-relaxed line-clamp-2">
            {service.summary}
          </p>
        </div>

        {/* Footer Link & Key Spec Pill */}
        <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0f274a] group-hover:text-[#b45309] transition-colors duration-200">
            <span>Learn More</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>

          <span className="text-[0.7rem] font-semibold text-[#64748b] bg-[#f8fafc] px-2.5 py-1 rounded-full border border-[#e2e8f0]">
            {service.keyMetric}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* -------------------------------------------------------------
 * Main Services Section
 * ------------------------------------------------------------- */
export default function ServicesSection() {
  return (
    <section id="services" className="section services-section bg-[#f8fafc]/60">
      <div className="section-heading mb-12">
        <div>
          <div className="section-label">WHAT WE DO</div>
          <h2>
            Our <span className="text-highlight">Services</span>
          </h2>
        </div>

        <p className="max-w-xl text-[#526077] text-base leading-relaxed">
          Comprehensive, safety-certified electrical testing and diagnostic solutions designed to maximize uptime, protect critical industrial assets, and ensure compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <CleanServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
