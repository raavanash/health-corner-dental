import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { SERVICES } from '../sampleData';
import { useScrollReveal } from '../components/useScrollReveal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import './Services.css';

const SERVICE_ICONS = {
  tooth: '🦷', sparkles: '✨', sun: '☀️', shield: '🛡️',
  alignLeft: '📐', activity: '🩺', star: '⭐', heart: '💙'
};

export default function Services() {
  useScrollReveal();
  return (
    <main style={{ paddingTop: 80 }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>Our Dental Services</h1>
          <p>Comprehensive care for every smile — all under one roof, delivered by experts you can trust.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="service-full-card reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="service-full-card__head">
                  <div className="service-full-card__icon">{SERVICE_ICONS[s.icon] || '🦷'}</div>
                  <h2>{s.title}</h2>
                </div>
                <p>{s.description}</p>
                <div className="service-full-card__meta">
                  <span><Clock size={14}/> {s.duration}</span>
                  <span><DollarSign size={14}/> {s.price}</span>
                </div>
                <Link to="/appointment" className="btn btn-teal service-full-card__cta">
                  Book This Service <ArrowRight size={16}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSlider />

      <section className="insurance-strip">
        <div className="container reveal">
          <h3>We Accept Most Major Insurances</h3>
          <p>Don't see yours? Call us — we'll check your coverage at no cost.</p>
          <div className="insurance-logos">
            {['Delta Dental','Cigna','Aetna','MetLife','United Healthcare','BlueCross'].map(ins => (
              <div key={ins} className="insurance-tag">{ins}</div>
            ))}
          </div>
          <Link to="/appointment" className="btn btn-primary" style={{ marginTop: 28 }}>
            Book an Appointment <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </main>
  );
}
