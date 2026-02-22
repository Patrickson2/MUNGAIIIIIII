import { useState, useEffect, useRef } from 'react';
import '../stylings/Services.css';
import '../stylings/Snackbar.css';

// TODO: Replace this with your Formspree form URL
// Get your form URL from https://formspree.io/forms/
const FORMSPREE_URL = 'https://formspree.io/f/mnjbgezd';

// Snackbar Component
const Snackbar = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`snackbar ${type} ${isVisible ? 'show' : ''}`}>
      <div className="snackbar-content">
        <i className={`fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
        <span>{message}</span>
      </div>
      <button className="snackbar-close" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ visible: false, message: '', type: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    details: ''
  });

  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces using modern frameworks and clean code practices.',
      icon: 'fa-laptop-code',
      features: ['React Development', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization']
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with secure APIs and efficient database management.',
      icon: 'fa-server',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Integration']
    },
    {
      id: 3,
      title: 'Full Website Development',
      description: 'End-to-end web solutions from design to deployment, delivering complete digital products.',
      icon: 'fa-globe',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'SEO Optimization']
    },
    {
      id: 4,
      title: 'Consulting & Support',
      description: 'Technical guidance, code reviews, and ongoing support for your existing projects.',
      icon: 'fa-headset',
      features: ['Technical Consulting', 'Code Review', 'Performance Audits', 'Team Training']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showSnackbar = (message, type) => {
    setSnackbar({ visible: true, message, type });
  };

  const hideSnackbar = () => {
    setSnackbar({ ...snackbar, visible: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceType: formData.serviceType,
          message: formData.details
        })
      });

      if (response.ok) {
        showSnackbar('Request sent successfully! I will get back to you soon.', 'success');
        setFormData({
          name: '',
          email: '',
          serviceType: '',
          details: ''
        });
      } else {
        showSnackbar('Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      showSnackbar('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <span>Services</span>
        </h2>
        
        <div className="services-content">
          {/* Services List - Left Side */}
          <div className="services-list animate-on-scroll">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form - Right Side */}
          <div className="contact-form-wrapper animate-on-scroll">
            <div className="form-header">
              <h3>Request a Service</h3>
              <p>Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="James Kirk"
                  required
                />
              </div>
              
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jamesKirk@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="Frontend Service">Frontend Service</option>
                  <option value="Backend Service">Backend Service</option>
                  <option value="Full Website">Full Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Describe your project requirements, timeline, and any specific details..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Request
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar 
        message={snackbar.message} 
        type={snackbar.type} 
        isVisible={snackbar.visible} 
        onClose={hideSnackbar} 
      />
    </section>
  );
};

export default Services;
