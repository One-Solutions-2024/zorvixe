import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, Megaphone, PenTool, TrendingUp, Cloud, Smartphone, ChevronDown, X, Menu } from 'lucide-react';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close mobile nav on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileNavOpen &&
        !e.target.closest('#mobile-sidebar') &&
        !e.target.closest('.mobile-nav-toggle')
      ) {
        setMobileNavOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileNavOpen]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const services = [
    {
      name: "Web Development",
      icon: Monitor,
      href: "/services/web_development",
      description: "Custom websites and web applications",
    },
    {
      name: "Digital Marketing",
      icon: Megaphone,
      href: "/services/digitalmarketing",
      description: "SEO, PPC, and social media marketing",
    },
    {
      name: "UIUX Design",
      icon: PenTool,
      href: "/services/ui_ux",
      description: "Engaging UIUX Design brand",
    },
    {
      name: "SEO Services",
      icon: TrendingUp,
      href: "/services/seo",
      description: "Improve your search rankings",
    },
    {
      name: "Web Hosting",
      icon: Cloud,
      href: "/services/web_hosting",
      description: "Reliable and secure hosting solutions",
    },
    {
      name: "Mobile App Solutions",
      icon: Smartphone,
      href: "/services/mobile_app_solutions",
      description: "Mobile apps for iOS and Android",
    },
  ]

  return (
    <>
      <style jsx>{`
        .services-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          padding: 1.5rem;
          min-width: 800px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 1rem;
          z-index: 1000;
        }
        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
        }
        .services-list_navbar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .service-item_navbar {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .service-item_navbar:hover {
          background: #f8f9fa;
          border-color: #5d57f4;
          color: #5d57f4;
          text-decoration: none;
          transform: translateY(-2px);
        }
        .service-icon {
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5d57f4;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .service-item_navbar:hover .service-icon {
          background: #5d57f4;
          color: white;
        }
        .service-info_navbar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 1;
        }
        .service-info_navbar h4 {
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .service-info_navbar p {
          margin: 0;
          font-size: 0.8rem;
          color: #666;
          line-height: 1.3;
        }
        .dropdown-image {
          border-radius: 8px;
          overflow: hidden;
        }
        .dropdown-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Mobile Services Popup Modal */
        .mobile-services-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .mobile-services-modal.show {
          opacity: 1;
          visibility: visible;
        }
        .mobile-services-content {
          background: white;
          border-radius: 16px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 1.5rem;
          position: relative;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        .mobile-services-modal.show .mobile-services-content {
          transform: translateY(0);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }
        .modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #333;
        }
        .close-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .mobile-service-item_navbar {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          background: #f8f9fa;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .mobile-service-item_navbar:hover {
          background: #e9ecef;
          border-color: #5d57f4;
          color: #5d57f4;
        }
        .mobile-service-icon {
          width: 40px;
          height: 40px;
          background: #e9ecef;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5d57f4;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .mobile-service-item_navbar:hover .mobile-service-icon {
          background: #5d57f4;
          color: white;
        }
        .mobile-service-info_navbar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 1;
        }
        .mobile-service-info_navbar h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .mobile-service-info_navbar p {
          margin: 0;
          font-size: 0.85rem;
          color: #666;
          line-height: 1.3;
        }

        .mobile-nav-toggle {
          background: transparent;
          border: none;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          z-index: 1001;
        }
        
        /* Mobile Sidebar Styles */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 90%;
          height: 100vh;
          background: white;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: right 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }
        
        .mobile-sidebar.open {
          right: 0;
        }
        
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1rem;
          border-bottom: 1px solid #eee;
        }
        
        .sidebar-logo {
          height: 30px;
        }
        .sidebar-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }
        
        .sidebar-body {
          padding: 1rem;
          overflow-y: auto;
          flex-grow: 1;
        }
        
        .sidebar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .sidebar-nav-item {
          margin-bottom: 0.5rem;
        }
        
        .sidebar-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .sidebar-nav-link:hover,
        .sidebar-nav-link.active {
          background: #f0f0ff;
          color: #5d57f4;
        }
        
        .sidebar-services-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: none;
          border: none;
          text-align: left;
          color: #333;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .sidebar-services-btn:hover,
        .sidebar-services-btn.active {
          background: #f0f0ff;
          color: #5d57f4;
        }
        
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .sidebar-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        
        @media (max-width: 1199px) {
          .dropdown-menu {
            min-width: 600px;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .dropdown-image {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .dropdown-menu {
            min-width: 90vw;
            left: 5vw;
            transform: none;
          }
          .services-list_navbar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src="/assets/img/zorvixe_logo.png" alt="Zorvixe Logo" />
          </Link>

          {/* Navigation Menu (Desktop) */}
          <nav
            id="navmenu"
            className={`navmenu d-none d-xl-block`}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={isActive('/') ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about_us"
                  className={isActive('/about_us') ? 'active' : ''}
                >
                  About
                </Link>
              </li>
              <li className="services-dropdown">
                <Link
                  to="/services"
                  className={isActive("/services") ? "active" : ""}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  Services
                  <ChevronDown size={16} className="ms-1" />
                </Link>
                <div
                  className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="services-grid">
                    <div>
                      <h3 className="mb-3 text-dark">Our Services</h3>
                      <div className="services-list_navbar">
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="service-item_navbar"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div className="service-icon">
                                <IconComponent size={20} />
                              </div>
                              <div className="service-info_navbar">
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="dropdown-image">
                      <img src="/assets/img/services/header_services.jpg" alt="Professional Services" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/contact_us"
                  className={isActive('/contact_us') ? 'active' : ''}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get Started Button (Desktop) */}
          <Link className="btn-getstarted d-xl-inline-block" to="/contact_us">
            Get Started
          </Link>

          {/* Mobile Nav Toggle */}
          <button
            className={`mobile-nav-toggle d-xl-none`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Mobile Sidebar */}
          <div className={`mobile-sidebar ${mobileNavOpen ? 'open' : ''}`} id="mobile-sidebar">
            <div className="sidebar-header">
              <img
                src="/assets/img/zorvixe_logo.png"
                alt="Zorvixe Logo"
                className="sidebar-logo"
              />

              <button
                className="sidebar-close"
                onClick={() => setMobileNavOpen(false)}>
                < X size={24} />
              </button>
            </div>

            <div className="sidebar-body">
              <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                  <Link
                    to="/"
                    className={`sidebar-nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link
                    to="/about_us"
                    className={`sidebar-nav-link ${isActive('/about_us') ? 'active' : ''}`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <button
                    className={`sidebar-services-btn ${isActive("/services") ? 'active' : ''}`}
                    onClick={() => setMobileServicesOpen(true)}
                  >
                    <span>Services</span>
                    <ChevronDown size={16} />
                  </button>
                </li>
                <li className="sidebar-nav-item">
                  <Link
                    to="/contact_us"
                    className={`sidebar-nav-link ${isActive('/contact_us') ? 'active' : ''}`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          <div
            className={`sidebar-overlay ${mobileNavOpen ? 'open' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          />

          {/* Mobile Services Popup Modal */}
          <div className={`mobile-services-modal ${mobileServicesOpen ? 'show' : ''}`}>
            <div className="mobile-services-content">
              <div className="modal-header">
                <h3>Our Services</h3>
                <button
                  className="close-btn"
                  onClick={() => setMobileServicesOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mobile-services-grid">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="mobile-service-item_navbar"
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileNavOpen(false);
                      }}
                    >
                      <div className="mobile-service-icon">
                        <IconComponent size={20} />
                      </div>
                      <div className="mobile-service-info_navbar">
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;