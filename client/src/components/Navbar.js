import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',         to: '/'            },
  { label: 'Services',     to: '/services'    },
  { label: 'About',        to: '/about'       },
  { label: 'Testimonials', to: '/testimonials'},
  { label: 'Contact',      to: '/contact'     },
];

export default function Navbar() {
  const [open,       setOpen]       = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo-icon">🦷</span>
          <span>Dant <strong>Vriksha</strong></span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link${pathname === link.to ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + phone */}
        <div className="navbar__actions">
          <a href="tel:+91886044606" className="navbar__phone">
            <Phone size={15} /> 88604 4606
          </a>
          <Link to="/appointment" className="btn btn-primary navbar__cta">
            Book Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="navbar__mobile-link">{link.label}</Link>
        ))}
        <Link to="/appointment" className="btn btn-primary" style={{ marginTop: 8 }}>
          Book Appointment
        </Link>
        <a href="tel:+918860446066" className="navbar__phone" style={{ marginTop: 12 }}>
          <Phone size={15} /> 8860 446066
        </a>
      </div>
    </header>
  );
}
