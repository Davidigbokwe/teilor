const CTA = () => {
  return (
    <section className="cta" style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="cta-content" style={{
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px'
          }}>Ready to Transform Your Tailoring Business?</h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>Join thousands of tailoring professionals who are already using Tailor to streamline their operations and grow their business.</p>
          <a href="#" className="btn" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Start Free Trial</a>
        </div>
      </div>

      <style jsx>{`
        .cta:before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(30deg);
        }

        .cta .btn:hover {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%) !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        @media (max-width: 576px) {
          .cta h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;