import { useEffect, useRef } from 'react';
import { Step } from '../types';

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  const steps: Step[] = [
    {
      number: 1,
      title: 'Add Client',
      description: 'Quickly add new clients with their basic information and contact details.'
    },
    {
      number: 2,
      title: 'Select Clothing Type',
      description: 'Choose from various clothing categories with predefined measurement fields.'
    },
    {
      number: 3,
      title: 'Input Measurements',
      description: 'Record precise measurements with our intuitive interface and guides.'
    },
    {
      number: 4,
      title: 'Manage Orders',
      description: 'Track order progress, delivery dates, and client preferences all in one place.'
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

    if (stepsRef.current) {
      const stepElements = stepsRef.current.querySelectorAll('.step');
      stepElements.forEach((step) => observer.observe(step));
    }

    return () => {
      if (stepsRef.current) {
        const stepElements = stepsRef.current.querySelectorAll('.step');
        stepElements.forEach((step) => observer.unobserve(step));
      }
    };
  }, []);

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div ref={stepsRef} className="steps" style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '50px',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div key={index} className="step" style={{
              flex: 1,
              minWidth: '250px',
              textAlign: 'center',
              padding: '20px',
              position: 'relative',
              zIndex: 1
            }}>
              <div className="step-number" style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 20px',
                boxShadow: 'var(--shadow)'
              }}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .steps:before {
          content: '';
          position: absolute;
          top: 50px;
          left: 10%;
          width: 80%;
          height: 3px;
          background-color: var(--primary-light);
          z-index: 0;
        }
        
        @media (max-width: 992px) {
          .steps:before {
            display: none;
          }
          
          .steps {
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;