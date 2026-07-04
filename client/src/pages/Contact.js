import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../components/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [form,    setForm]    = useState({ name:'', email:'', phone:'', message:'' });
  const [success, setSuccess] = useState(false);
  useScrollReveal();

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name:'', email:'', phone:'', message:'' });
  };

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Our team replies within one business day.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-info reveal">
            <h3>Find Us</h3>
            <div className="contact-info__items">
              {[
                { icon: <MapPin size={20}/>,  label: 'Address',  content: 'B-71 Murli Dhar Vyas Colony, Chungi Fatak\nKarmisar Road, Bikaner (Rajasthan)' },
                { icon: <Phone size={20}/>,   label: 'Phone',    content: '89529 31744', href: 'tel:+918952931744' },
                { icon: <Mail size={20}/>,    label: 'Email',    content: 'info@healthcornerdental.com', href: 'mailto:info@healthcornerdental.com' },
                { icon: <Clock size={20}/>,   label: 'Hours',    content: 'Mon–Fri: 8 AM – 6 PM\nSat: 9 AM – 3 PM\nSun: Closed' },
              ].map(item => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon">{item.icon}</div>
                  <div>
                    <span className="contact-info__label">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="contact-info__value link">{item.content}</a>
                      : <span className="contact-info__value" style={{ whiteSpace:'pre-line' }}>{item.content}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-map">
              <div className="contact-map__placeholder">📍 Chungi Fatak, Karmisar Road, Bikaner (Rajasthan)</div>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <h3>Send Us a Message</h3>
            {success ? (
              <div className="contact-success">
                <CheckCircle size={48} color="var(--teal)" />
                <h4>Message Sent!</h4>
                <p>We'll get back to you within one business day.</p>
                <button className="btn btn-teal" onClick={() => setSuccess(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" />
                </div>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handleChange} required placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={16}/> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
