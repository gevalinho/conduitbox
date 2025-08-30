// components/contact/TouchSafeMap.tsx
'use client';
import { useState } from 'react';

export default function TouchSafeMap() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`map-wrap ${active ? 'active' : ''}`}
      onClick={() => setActive(true)}
      onTouchStart={() => setActive(true)}
      role="button"
      aria-label="Activate map"
    >
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=..."
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {!active && <div className="map-overlay">Tap to interact</div>}
    </div>
  );
}
