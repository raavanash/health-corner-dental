import { useState, useRef, useCallback } from 'react';
import './BeforeAfterSlider.css';

// Sample illustration images (stored locally in /public/images so they always
// load, with no dependency on external hotlinks). Swap these paths with real
// patient photos whenever you're ready — just keep the same before/after pairing.
const CASES = [
  {
    label: 'Teeth Whitening',
    before: '/images/whitening-before.svg',
    after:  '/images/whitening-after.svg',
  },
  {
    label: 'Orthodontics',
    before: '/images/orthodontics-before.svg',
    after:  '/images/orthodontics-after.svg',
  },
  {
    label: 'Cosmetic Dentistry',
    before: '/images/cosmetic-before.svg',
    after:  '/images/cosmetic-after.svg',
  },
  {
    label: 'Smile Makeover (Sample)',
    before: '/images/makeover-before.svg',
    after:  '/images/makeover-after.svg',
  },
];

function SingleSlider({ before, after, label }) {
  const [pos, setPos]       = useState(50); // percentage 0-100
  const dragging            = useRef(false);
  const containerRef        = useRef(null);

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x    = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  // Mouse
  const onMouseDown = (e) => { dragging.current = true; e.preventDefault(); };
  const onMouseMove = (e) => { if (dragging.current) setPos(getPercent(e.clientX)); };
  const onMouseUp   = ()  => { dragging.current = false; };

  // Touch
  const onTouchStart = ()  => { dragging.current = true; };
  const onTouchMove  = (e) => { if (dragging.current) setPos(getPercent(e.touches[0].clientX)); };
  const onTouchEnd   = ()  => { dragging.current = false; };

  return (
    <div className="bas__wrap">
      <div className="bas__label">{label}</div>
      <div
        className="bas__container"
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* AFTER image (full width, underneath) */}
        <img src={after} alt="After" className="bas__img bas__img--after" draggable={false} />

        {/* BEFORE image (clipped by slider position) */}
        <div className="bas__before-wrap" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="bas__img bas__img--before" draggable={false} />
        </div>

        {/* Divider line */}
        <div className="bas__divider" style={{ left: `${pos}%` }}>
          {/* Handle */}
          <div
            className="bas__handle"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L2 10L7 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L18 10L13 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="bas__tag bas__tag--before">BEFORE</span>
        <span className="bas__tag bas__tag--after">AFTER</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <div className="bas__section">
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span className="section-label">Real Results</span>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1B2A4A', marginBottom: 10 }}>
          Before & After
        </h2>
        <p style={{ color: '#6B7280', fontSize: '0.92rem', maxWidth: 460, margin: '0 auto' }}>
          Drag the slider left and right to see the transformation.
        </p>
      </div>
      <div className="bas__grid">
        {CASES.map((c) => (
          <SingleSlider key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
}
