import { useState } from 'react';
import { CheckCircle, Calendar, Clock, User } from 'lucide-react';
import { useScrollReveal } from '../components/useScrollReveal';
import './Appointment.css';

const SERVICES = [
  'General Checkup','Teeth Cleaning','Teeth Whitening','Dental Implants',
  'Orthodontics','Root Canal','Cosmetic Dentistry','Pediatric Dentistry','Emergency Care','Other'
];
const TIMES = ['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'];
const INITIAL = {
  firstName:'', lastName:'', email:'', phone:'',
  service:'', preferredDate:'', preferredTime:'', notes:'', isNewPatient: false
};

export default function Appointment() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [success, setSuccess] = useState(false);
  useScrollReveal();

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim())  e.lastName  = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim())      e.phone    = 'Required';
    if (!form.service)           e.service  = 'Please select a service';
    if (!form.preferredDate)     e.preferredDate = 'Required';
    if (!form.preferredTime)     e.preferredTime = 'Required';
    return e;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => { const c = { ...prev }; delete c[name]; return c; });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // Frontend-only: just show success without calling API
    setSuccess(true);
    setForm(INITIAL);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (success) return (
    <main style={{ paddingTop: 80 }}>
      <div className="appt-success">
        <CheckCircle size={64} color="var(--teal)" />
        <h2>Appointment Requested!</h2>
        <p>Thank you! We've received your request and will confirm your appointment via email within 2 business hours.</p>
        <p className="appt-success__sub">Need to reach us sooner? Call <a href="tel:+15551234567">(555) 123-4567</a></p>
        <button className="btn btn-teal" onClick={() => setSuccess(false)}>Book Another</button>
      </div>
    </main>
  );

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get Started</span>
          <h1>Book Your Appointment</h1>
          <p>Fill out the form below and we'll confirm your slot within 2 hours.</p>
        </div>
      </section>

      <section className="section appt-section">
        <div className="container appt-layout">
          <aside className="appt-sidebar reveal">
            <h3>What to Expect</h3>
            <ul>
              {[
                { icon: <CheckCircle size={18}/>, text: 'Confirmation email within 2 hours' },
                { icon: <Calendar size={18}/>,    text: 'Flexible scheduling Mon–Sat' },
                { icon: <Clock size={18}/>,       text: 'Reminders 24 hrs before your visit' },
                { icon: <User size={18}/>,        text: 'New patients always welcome' },
              ].map((item, i) => (
                <li key={i}>{item.icon}<span>{item.text}</span></li>
              ))}
            </ul>
            <div className="appt-sidebar__hours">
              <h4>Office Hours</h4>
              <table><tbody>
                {[['Mon – Fri','8:00 AM – 6:00 PM'],['Saturday','9:00 AM – 3:00 PM'],['Sunday','Closed']].map(([day,hrs]) => (
                  <tr key={day}><td>{day}</td><td style={{ color: hrs==='Closed'?'#ef4444':'inherit' }}>{hrs}</td></tr>
                ))}
              </tbody></table>
            </div>
            <div className="appt-sidebar__emergency">
              <strong>Dental Emergency?</strong>
              <a href="tel:+15551234567">(555) 123-4567</a>
              <span>We offer same-day emergency slots.</span>
            </div>
          </aside>

          <div className="appt-form-wrap reveal">
            <form className="appt-form" onSubmit={handleSubmit} noValidate>
              <div className="appt-form__row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" />
                  {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" />
                  {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="appt-form__row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-group">
                <label>Service Needed *</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service…</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <span className="field-error">{errors.service}</span>}
              </div>
              <div className="appt-form__row">
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input name="preferredDate" type="date" min={minDate} value={form.preferredDate} onChange={handleChange} />
                  {errors.preferredDate && <span className="field-error">{errors.preferredDate}</span>}
                </div>
                <div className="form-group">
                  <label>Preferred Time *</label>
                  <select name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                    <option value="">Choose a time…</option>
                    {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.preferredTime && <span className="field-error">{errors.preferredTime}</span>}
                </div>
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} placeholder="Any concerns, allergies, or special requests…" />
              </div>
              <label className="appt-form__checkbox">
                <input type="checkbox" name="isNewPatient" checked={form.isNewPatient} onChange={handleChange} />
                I am a new patient
              </label>
              <button type="submit" className="btn btn-primary appt-form__submit">
                Request Appointment
              </button>
              <p className="appt-form__note">
                By submitting this form you agree to be contacted about your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
