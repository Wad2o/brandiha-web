import React from 'react';

const mediaLinks = [
  { name: 'ALLURE', label: 'Best of Beauty' },
  { name: 'VOGUE', label: 'Inside the Chinese Beauty Boom' },
  { name: 'WWD', label: 'Florasis Global Expansion' },
  { name: 'FLORASIS', label: 'The New Eastern Beasts Palette' },
  { name: 'ELLE', label: 'C-Beauty Makeup Trend 2023' },
  { name: 'GALA', label: 'La C-Beauty débarque en France' },
  { name: 'FEMINA', label: 'Véritables œuvres d\'art' },
];

export default function InfiniteMarquee() {
  // On duplique les items pour créer la boucle infinie sans rupture
  const items = [...mediaLinks, ...mediaLinks];

  return (
    <div 
      style={{
        width: '100%',
      
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        overflow: 'hidden'
      }}
    >
      <div className="marquee-track">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="marquee-item"
          >
            {item.name} — {item.label}
          </a>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          padding: 0 45px;
          flex-shrink: 0;
          color: #0F3C35;
          font-family: 'Georgia', serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.3s, color 0.3s;
        }

        .marquee-item:hover {
          opacity: 1;
          color: #167063ff;
        }
      `}</style>
    </div>
  );
}