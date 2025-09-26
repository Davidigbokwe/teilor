import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={{ 
      backgroundColor: 'white', 
      boxShadow: isScrolled ? '0 5px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '10px 0' : '20px 0'
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" className="logo" style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src="/Teilor.png" alt="Teilor Logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          
          <ul className="nav-links" style={{
            display: isMobileMenuOpen ? 'flex' : 'none',
            flexDirection: isMobileMenuOpen ? 'column' : 'row',
            gap: '30px',
            position: isMobileMenuOpen ? 'absolute' : 'relative',
            top: isMobileMenuOpen ? '100%' : 'auto',
            left: isMobileMenuOpen ? '0' : 'auto',
            width: isMobileMenuOpen ? '100%' : 'auto',
            backgroundColor: isMobileMenuOpen ? 'white' : 'transparent',
            padding: isMobileMenuOpen ? '20px' : '0',
            boxShadow: isMobileMenuOpen ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
          }}>
            <li><a href="#home" style={{
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>Home</a></li>
            <li><a href="#features" style={{
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>Features</a></li>
            <li><a href="#how-it-works" style={{
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>How It Works</a></li>
            <li><a href="#testimonials" style={{
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>Testimonials</a></li>
            <li><a href="#contact" style={{
              fontWeight: 500,
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>Contact</a></li>
          </ul>
          
          <div className="auth-buttons" style={{
            display: isMobileMenuOpen ? 'flex' : 'none',
            flexDirection: isMobileMenuOpen ? 'column' : 'row',
            gap: '15px',
            position: isMobileMenuOpen ? 'absolute' : 'relative',
            top: isMobileMenuOpen ? 'calc(100% + 180px)' : 'auto',
            left: isMobileMenuOpen ? '0' : 'auto',
            width: isMobileMenuOpen ? '100%' : 'auto',
            backgroundColor: isMobileMenuOpen ? 'white' : 'transparent',
            padding: isMobileMenuOpen ? '20px' : '0',
            boxShadow: isMobileMenuOpen ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
          }}>
            <a href="#" className="btn btn-outline">Login</a>
            <a href="#" className="btn btn-primary">Sign Up</a>
          </div>
          
          <div className="mobile-menu-btn" onClick={toggleMobileMenu} style={{
            display: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--primary)'
          }}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links, .auth-buttons {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
        
        .nav-links a:hover:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary);
          transition: all 0.3s ease;
        }
        
        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary);
          transition: all 0.3s ease;
        }
      `}</style>
    </header>
  );
};

export default Header;