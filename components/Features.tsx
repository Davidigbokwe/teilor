import { useEffect, useRef } from 'react';
import { Feature } from '../types';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const features: Feature[] = [
    {
      icon: 'fas fa-users',
      title: 'Client Management',
      description: 'Easily add, search, and manage all your clients with detailed profiles and measurement history.'
    },
    {
      icon: 'fas fa-ruler-combined',
      title: 'Measurement Tracking',
      description: 'Store precise measurements for each client with customizable fields for different clothing types.'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Business Analytics',
      description: 'Track your business performance with insights on clients, orders, and revenue trends.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (featuresRef.current) {
      const featureCards = featuresRef.current.querySelectorAll('.feature-card');
      featureCards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (featuresRef.current) {
        const featureCards = featuresRef.current.querySelectorAll('.feature-card');
        featureCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <div ref={featuresRef} className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="feature-icon" style={{
                fontSize: '3rem',
                color: 'var(--primary)',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                <i className={feature.icon}></i>
              </div>
              <h3 style={{
                marginBottom: '15px',
                fontSize: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>{feature.title}</h3>
              <p style={{ position: 'relative', zIndex: 1 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background-color: var(--primary);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover:before {
          width: 100%;
          opacity: 0.1;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        @media (max-width: 576px) {
          .feature-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;