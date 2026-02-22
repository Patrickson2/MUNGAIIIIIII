import '../stylings/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="pm-text">PM</span>
          </div>
          
          <div className="footer-text">
            <p>Let's build something amazing together.</p>
          </div>

          <div className="footer-socials">
            <a 
              href="https://github.com/Patrickson2" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/patrickson-mungai-a7a936280/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:thairupatrickson@gmail.com" 
              aria-label="Gmail"
              className="social-link"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Patrickson Mungai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
