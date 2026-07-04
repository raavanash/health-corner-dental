import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../sampleData';
import { useScrollReveal } from '../components/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  useScrollReveal();
  return (
    <main style={{ paddingTop: 80 }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Patient Stories</span>
          <h1>What Our Patients Say</h1>
          <p>Don't just take our word for it — here's what real patients have shared about their experience.</p>
        </div>
      </section>

      <section className="rating-summary reveal">
        <div className="container rating-summary__inner">
          <div className="rating-summary__score">
            <span className="rating-big">4.9</span>
            <div className="rating-stars">
              {Array(5).fill(null).map((_,i) => <Star key={i} size={24} fill="#F5A623" color="#F5A623" />)}
            </div>
            <span>Based on 420+ reviews</span>
          </div>
          <div className="rating-bars">
            {[['5 stars', 88], ['4 stars', 9], ['3 stars', 2], ['2 stars', 1], ['1 star', 0]].map(([label, pct]) => (
              <div key={label} className="rating-bar-row">
                <span>{label}</span>
                <div className="rating-bar"><div className="rating-bar__fill" style={{ width: `${pct}%` }} /></div>
                <span>{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testimonials-full-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t._id} className="testimonial-full-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="testimonial-full-card__stars">
                  {Array(t.rating).fill(null).map((_,j) => <Star key={j} size={16} fill="#F5A623" color="#F5A623" />)}
                </div>
                <p>"{t.text}"</p>
                <div className="testimonial-full-card__author">
                  <div className="tfc__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
