import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import Home         from './pages/Home';
import Services     from './pages/Services';
import About        from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact      from './pages/Contact';
import Appointment  from './pages/Appointment';

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/services"    element={<PublicLayout><Services /></PublicLayout>} />
        <Route path="/about"       element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/testimonials"element={<PublicLayout><Testimonials /></PublicLayout>} />
        <Route path="/contact"     element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/appointment" element={<PublicLayout><Appointment /></PublicLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
