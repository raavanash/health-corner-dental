import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">

        {/* Brand column */}
        <div className="footer__col footer__brand">
          <div className="footer__logo">🦷 Dant <strong>Vriksha</strong></div>
          <p>Your smile, our priority. Experienced, painless, and affordable dental care in Gurugram.</p>
          <div className="footer__socials">
            <a href="#!" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#!" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#!" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {['Home','Services','About','Testimonials','Contact'].map(page => (
              <li key={page}>
                <Link to={`/${page === 'Home' ? '' : page.toLowerCase()}`}>{page}</Link>
              </li>
            ))}
            <li><Link to="/appointment">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            {['General Checkup','Teeth Cleaning','Teeth Whitening','Dental Implants',
              'Orthodontics','Root Canal','Cosmetic Dentistry','Pediatric Dentistry'].map(s => (
              <li key={s}><Link to="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li><MapPin size={15} /> Q1, 141, San Felipe Marg, opp. Park Hospital<br/>South City II, Sector 49, Gurugram, Haryana 122018</li>
            <li><Phone size={15} /> <a href="tel:+910886044606">08860 446066</a></li>
            <li><Mail size={15} /> <a href="mailto:info@dantvriksha.com">info@dantvriksha.com</a></li>
            <li>
              <Clock size={15} />
              <span>Mon–Fri: 8 AM – 6 PM<br/>Sat: 9 AM – 3 PM<br/>Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Dant Vriksha Dental Clinic. All rights reserved.</span>
          <span className="footer__bottom-links">
            <a href="#!">Privacy Policy</a> · <a href="#!">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
