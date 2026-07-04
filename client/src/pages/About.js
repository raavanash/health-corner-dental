// About.js
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, Heart } from 'lucide-react';
import { useScrollReveal } from '../components/useScrollReveal';
import './About.css';

const DENTIST = {
  name: 'Dr. Ayush Tanwar',
  role: 'Founder & Dental Surgeon',
  qualification: 'B.D.S. — Dental Surgeon',
  photo: '/images/dr-ayush-tanwar.jpg',
  bio: "Dr. Ayush Tanwar founded Health Corner Dental Clinic with a simple promise: your smile is our priority. He personally sees every patient who walks through the door, offering hygienic, painless, and affordable dental care — from routine check-ups to complete smile restoration.",
};

export default function About() {
  useScrollReveal();
  return (
    <main style={{ paddingTop: 80 }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>About Health Corner Dental Clinic</h1>
          <p>Your smile, our priority — caring, personal dentistry in Bikaner.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission reveal">
          <div>
            <span className="section-label">Our Mission</span>
            <h2>Dentistry That Feels Human</h2>
            <p>We started Health Corner Dental Clinic because we believed dental care could be different — warm, transparent, and genuinely focused on you rather than the clock. Every decision we make comes back to one question: is this the best thing for this patient?</p>
            <p style={{ marginTop: 16 }}>As a single-doctor practice, Dr. Tanwar personally treats every patient who visits — no handoffs, no confusion about who's in charge of your care.</p>
            <Link to="/appointment" className="btn btn-primary" style={{ marginTop: 28 }}>
              Meet Us in Person <ArrowRight size={17}/>
            </Link>
          </div>
          <div className="about-stats">
            {[
              { icon: <Award size={28}/>,          value: 'B.D.S.', label: 'Qualified Dental Surgeon' },
              { icon: <Heart size={28}/>,           value: 'Painless', label: 'Patient-First Treatment' },
              { icon: <GraduationCap size={28}/>,   value: 'Hygienic', label: 'Fully Sterilized Setup' },
            ].map(s => (
              <div key={s.label} className="about-stat">
                <div className="about-stat__icon">{s.icon}</div>
                <div className="about-stat__value">{s.value}</div>
                <div className="about-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Dentist */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Owner & Dentist</span>
            <h2>Meet Your Dentist</h2>
          </div>
          <div className="dentist-spotlight reveal">
            <div className="dentist-spotlight__photo-wrap">
              <img src={DENTIST.photo} alt={DENTIST.name} className="dentist-spotlight__photo" />
            </div>
            <div className="dentist-spotlight__info">
              <h3>{DENTIST.name}</h3>
              <span className="dentist-spotlight__role">{DENTIST.role}</span>
              <span className="dentist-spotlight__qualification">{DENTIST.qualification}</span>
              <p>{DENTIST.bio}</p>
              <Link to="/appointment" className="btn btn-teal" style={{ marginTop: 8 }}>
                Book With Dr. Tanwar <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
