import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (contactRef.current) {
      const contactItems = contactRef.current.querySelectorAll('.contact-item, .contact-form');
      contactItems.forEach((item) => observer.observe(item));
    }

    return () => {
      if (contactRef.current) {
        const contactItems = contactRef.current.querySelectorAll('.contact-item, .contact-form');
        contactItems.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div ref={contactRef} className="contact-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div className="contact-info" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div className="contact-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Our Location</h3>
                <p style={{ margin: 0 }}>123 Fashion Street, Style District</p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div className="contact-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Phone Number</h3>
                <p style={{ margin: 0 }}>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div className="contact-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Email Address</h3>
                <p style={{ margin: 0 }}>info@tailorapp.com</p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div className="contact-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Working Hours</h3>
                <p style={{ margin: 0 }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form" style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: 'var(--shadow)'
          }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 500
                }}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 500
                }}>Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 500
                }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 500
                }}>Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        @media (max-width: 576px) {
          .contact-form {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;