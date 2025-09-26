import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" id="home" style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
      color: 'white',
      padding: '180px 0 100px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div ref={heroRef} className="hero-content" style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>Streamline Your Tailoring Business</h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '30px',
            opacity: 0.9
          }}>Manage clients, measurements, and orders all in one place with Tailor's intuitive mobile app.</p>
          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-secondary">Watch Demo</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero:before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(30deg);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 150px 0 80px;
          }
          
          .hero h1 {
            font-size: 2.2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;