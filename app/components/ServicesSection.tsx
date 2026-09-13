import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="section-label">SERVICES</div>

      <div className="services-topbar">
        <div>
          <h2>
            Core
            <span> electrical services.</span>
          </h2>
        </div>
        <p>
          SRESTA supports industrial and infrastructure clients with practice-led
          electrical testing and inspection services across critical systems.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.number} className="service-card">
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
