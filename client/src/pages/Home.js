import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Heart, CheckCircle, Phone } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../sampleData';
import { useScrollReveal } from '../components/useScrollReveal';
import './Home.css';

const SERVICE_ICONS = {
  tooth: '🦷', sparkles: '✨', sun: '☀️', shield: '🛡️',
  alignLeft: '📐', activity: '🩺', star: '⭐', heart: '💙'
};

export default function Home() {
  const services     = SERVICES.slice(0, 6);
  const testimonials = TESTIMONIALS.slice(0, 3);
  useScrollReveal();

  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="section-label">Welcome to Health Corner Dental Clinic</span>
            <h1 className="hero__headline">
              A Healthier Smile<br/>
              <em>Starts Here</em>
            </h1>
            <p className="hero__sub">
              Compassionate, state-of-the-art dental care for every stage of life —
              from your child's first visit to a complete smile transformation.
            </p>
            <div className="hero__ctas">
              <Link to="/appointment" className="btn btn-primary">
                Book an Appointment <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
            <div className="hero__badges">
              {['No wait-list', 'Same-day emergency', 'All insurances accepted'].map(b => (
                <span key={b} className="hero__badge"><CheckCircle size={14} /> {b}</span>
              ))}
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__tooth-wrap">
              <svg className="hero__tooth-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="52" rx="68" ry="52" fill="#E8F5F2" stroke="#2BBFA4" strokeWidth="3"/>
                <rect x="32" y="80" width="136" height="20" rx="4" fill="#E8F5F2" stroke="#2BBFA4" strokeWidth="2"/>
                <path d="M42 100 C38 140 30 180 50 220 C62 240 78 230 84 200 C88 180 100 175 112 200 C118 230 134 240 146 220 C166 180 158 140 154 100 Z" fill="white" stroke="#2BBFA4" strokeWidth="3"/>
                <path d="M60 115 Q70 108 80 115" stroke="#2BBFA4" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <path d="M118 115 Q128 108 138 115" stroke="#2BBFA4" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <div className="hero__float hero__float--tl">
                <Star size={16} fill="#F5A623" color="#F5A623" />
                <span><strong>4.9</strong> / 5 rating</span>
              </div>
              <div className="hero__float hero__float--br">
                <Heart size={16} color="#2BBFA4" />
                <span><strong>5,200+</strong> happy patients</span>
              </div>
            </div>
          </div>
        </div>
        <svg className="hero__wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z" fill="white"/>
        </svg>
      </section>

      {/* ── Stats bar ── */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {[
            { icon: <Heart size={22}/>, value: '5,200+', label: 'Patients Served' },
            { icon: <Star  size={22}/>, value: '4.9★',   label: 'Average Rating'  },
            { icon: <Clock size={22}/>, value: '15 yrs',  label: 'In Practice'     },
            { icon: <Shield size={22}/>,value: '98%',    label: 'Satisfaction Rate'},
          ].map(s => (
            <div key={s.label} className="stat reveal">
              <div className="stat__icon">{s.icon}</div>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Offer</span>
            <h2>Comprehensive Dental Services</h2>
            <p>From routine cleanings to full smile makeovers, we provide expert care under one roof.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.id} className="service-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="service-card__icon">{SERVICE_ICONS[s.icon] || '🦷'}</div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-card__price">{s.price}</span>
              </div>
            ))}
          </div>
          <div className="section-footer reveal">
            <Link to="/services" className="btn btn-teal">
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="section why-us">
        <div className="container why-us__inner">
          <div className="why-us__copy reveal">
            <span className="section-label">Why Health Corner</span>
            <h2>Dentistry That Puts<br/>You First</h2>
            <p>We know dental visits can feel stressful. Our entire practice is built around making you feel heard, comfortable, and confident in your care.</p>
            <ul className="why-us__list">
              {[
                'Experienced, dedicated dental surgeon (B.D.S.)',
                'Painless treatment with a gentle, patient-first approach',
                'Hygienic & fully sterilized clinical setup',
                'Affordable care with transparent pricing',
                'Child-friendly environment with no scary surprises',
                'After-care support and follow-up calls',
              ].map(item => (
                <li key={item}><CheckCircle size={18} />{item}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 8 }}>
              Meet Your Dentist <ArrowRight size={17}/>
            </Link>
          </div>
          <div className="why-us__card-wrap reveal">
            <div className="why-us__card">
              <div className="why-us__card-emoji">😊</div>
              <blockquote>
                "I haven't dreaded a dental visit since I switched to Health Corner. Dr. Tanwar is warm, professional, and genuinely caring."
              </blockquote>
              <div className="why-us__card-author">
                <strong>Rachel S.</strong> — Patient since 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section testimonials-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Patient Stories</span>
            <h2>What Our Patients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t._id} className="testimonial-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="testimonial-card__stars">
                  {Array(t.rating).fill(null).map((_, j) => (
                    <Star key={j} size={15} fill="#F5A623" color="#F5A623" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer reveal">
            <Link to="/testimonials" className="btn btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner reveal">
          <div>
            <h2>Ready for a Healthier Smile?</h2>
            <p>Book your appointment today — new patients welcome, no referral needed.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/appointment" className="btn btn-white">
              Book Online <ArrowRight size={17} />
            </Link>
            <a href="tel:+918952931744" className="btn btn-outline-white">
              <Phone size={17} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
