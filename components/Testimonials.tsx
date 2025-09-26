import { useEffect, useRef } from 'react';
import { Testimonial } from '../types';

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Tailor has completely transformed how I manage my tailoring business. The measurement tracking is incredibly accurate and has reduced errors by 90%.",
      author: "Ahmed Mahmoud",
      role: "Professional Tailor, 5 years experience",
      initials: "AM"
    },
    {
      id: 2,
      text: "As someone who struggled with organization, Tailor has been a lifesaver. I can now easily access any client's measurements in seconds.",
      author: "Sophia Johnson",
      role: "Boutique Owner",
      initials: "SJ"
    },
    {
      id: 3,
      text: "The client management features have helped me grow my business by 40% in just 6 months. Highly recommended for any tailoring professional.",
      author: "Miguel Rodriguez",
      role: "Fashion Designer",
      initials: "MR"
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

    if (testimonialsRef.current) {
      const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
      testimonialCards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (testimonialsRef.current) {
        const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section className="section testimonials" id="testimonials" style={{
      backgroundColor: '#f8f9fa'
    }}>
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <div ref={testimonialsRef} className="testimonial-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: 'var(--shadow)',
              position: 'relative'
            }}>
              <p className="testimonial-text" style={{
                fontStyle: 'italic',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>{testimonial.text}</p>
              <div className="testimonial-author" style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="author-avatar" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>{testimonial.initials}</div>
                <div>
                  <h4 style={{ margin: 0 }}>{testimonial.author}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:before {
          content: '"';
          position: absolute;
          top: 10px;
          left: 20px;
          font-size: 4rem;
          color: var(--primary-light);
          opacity: 0.3;
          font-family: Georgia, serif;
        }
        
        @media (max-width: 576px) {
          .testimonial-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;