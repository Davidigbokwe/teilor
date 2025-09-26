const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--dark)',
      color: 'white',
      padding: '30px 0'
    }}>
      <div className="container">
        <div className="copyright" style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          <p>&copy; {currentYear} Teilor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;