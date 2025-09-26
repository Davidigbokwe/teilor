import { useEffect, useRef } from 'react';

const AppPreview = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (previewRef.current) {
      observer.observe(previewRef.current);
    }

    return () => {
      if (previewRef.current) {
        observer.unobserve(previewRef.current);
      }
    };
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">App Overview</h2>
        <div ref={previewRef} className="app-screenshots" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px',
          flexWrap: 'wrap'
        }}>
          <div className="screenshot" style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            flex: '0 0 auto',
            width: '220px'
          }}>
            <img src="/app1.png" alt="App Screenshot 1" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
          <div className="screenshot" style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            flex: '0 0 auto',
            width: '220px'
          }}>
            <img src="/app2.png" alt="App Screenshot 2" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
          <div className="screenshot" style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            flex: '0 0 auto',
            width: '220px'
          }}>
            <img src="/app3.png" alt="App Screenshot 3" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
          <div className="screenshot" style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            flex: '0 0 auto',
            width: '220px'
          }}>
            <img src="/app4.png" alt="App Screenshot 4" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .screenshot:hover {
          transform: scale(1.05);
        }

        .screenshot img {
          display: block;
        }

        @media (max-width: 768px) {
          .app-screenshots {
            grid-template-columns: 1fr;
            gap: '15px';
          }
        }
      `}</style>
    </section>
  );
};

export default AppPreview;