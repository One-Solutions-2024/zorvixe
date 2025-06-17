// src/components/SEOServicePage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SEOServicePage = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  // Handle tab selection
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Initialize AOS animations on mount
  useEffect(() => {
    const initializeAOS = () => {
      // Simulate AOS initialization
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(el => {
        el.classList.add('aos-init', 'aos-animate');
      });
    };

    initializeAOS();
  }, []);

   useEffect(() => {
        document.title = "SEO Optimization | Zorvixe";
      }, []);

  return (
    <main className="main">
      <Helmet>
        <title>SEO Optimization | Zorvixe</title>
        <meta name="description" content="Boost your search engine rankings and drive consistent organic traffic with our expert SEO solutions." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
        <style>{`
          :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #6b7280;
            --light: #f8f9fa;
            --dark: #1f2937;
            --rounded: 0.5rem;
            --shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          
          body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          
          .page-title {
            background: linear-gradient(120deg, #f0f9ff, #e0f2fe);
            padding: 4rem 0 3rem;
            position: relative;
            overflow: hidden;
          }
          
          .page-title::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), #60a5fa);
          }
          
          .heading-title {
            font-weight: 800;
            font-size: 2.75rem;
            margin-bottom: 1.5rem;
            color: var(--dark);
            position: relative;
          }
          
          .heading-title::after {
            content: "";
            display: block;
            width: 80px;
            height: 4px;
            background: var(--primary);
            margin: 1rem auto 0;
            border-radius: 2px;
          }
          
          .breadcrumbs {
            background: rgba(255, 255, 255, 0.7);
            padding: 0.75rem 0;
            margin-top: 2rem;
          }
          
          .breadcrumbs ol {
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0;
            list-style: none;
          }
          
          .breadcrumbs li {
            margin: 0 0.5rem;
            font-size: 0.9rem;
          }
          
          .breadcrumbs li:not(:last-child)::after {
            content: "/";
            margin-left: 1rem;
            color: var(--secondary);
          }
          
          .breadcrumbs a {
            color: var(--primary);
            text-decoration: none;
            transition: all 0.3s;
          }
          
          .breadcrumbs a:hover {
            color: var(--primary-dark);
            text-decoration: underline;
          }
          
          .breadcrumbs .current {
            color: var(--dark);
            font-weight: 500;
          }
          
          .section {
            padding: 5rem 0;
          }
          
          .section-header {
            margin-bottom: 2.5rem;
          }
          
          .section-subtitle {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .section-header h2 {
            font-weight: 800;
            font-size: 2.25rem;
            color: var(--dark);
            margin-bottom: 1.25rem;
          }
          
          .lead {
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--dark);
          }
          
          .service-main-image {
            position: relative;
            border-radius: var(--rounded);
            overflow: hidden;
            box-shadow: var(--shadow);
          }
          
          .experience-badge {
            position: absolute;
            bottom: 1.5rem;
            right: 1.5rem;
            background: var(--primary);
            color: white;
            padding: 1.25rem 1.5rem;
            border-radius: var(--rounded);
            text-align: center;
            box-shadow: var(--shadow);
          }
          
          .experience-badge span {
            display: block;
            font-size: 2.25rem;
            font-weight: 700;
            line-height: 1;
          }
          
          .experience-badge p {
            margin: 0;
            font-weight: 600;
            font-size: 0.9rem;
          }
          
          .service-benefits {
            list-style: none;
            padding: 0;
            margin: 2rem 0;
          }
          
          .service-benefits li {
            padding: 0.75rem 0;
            padding-left: 2.5rem;
            position: relative;
            font-size: 1.1rem;
          }
          
          .service-benefits li i {
            position: absolute;
            left: 0;
            top: 0.85rem;
            color: var(--primary);
            font-size: 1.25rem;
          }
          
          .service-tabs {
            margin-top: 3rem;
            background: white;
            border-radius: var(--rounded);
            box-shadow: var(--shadow);
            overflow: hidden;
          }
          
          .nav-tabs {
            background: linear-gradient(to right, var(--primary), var(--primary-dark));
            padding: 0.5rem;
            border: none;
          }
          
          .nav-item {
            margin: 0 0.25rem;
          }
          
          .nav-link {
            color: rgba(255, 255, 255, 0.85);
            background: transparent;
            border: none;
            border-radius: var(--rounded);
            padding: 0.9rem 1.5rem;
            font-weight: 600;
            transition: all 0.3s;
          }
          
          .nav-link:hover, .nav-link.active {
            color: white;
            background: rgba(255, 255, 255, 0.15);
          }
          
          .nav-link i {
            margin-right: 0.5rem;
            font-size: 1.2rem;
          }
          
          .tab-content {
            padding: 2.5rem;
          }
          
          .feature-item {
            background: var(--light);
            padding: 1.75rem;
            border-radius: var(--rounded);
            height: 100%;
            transition: all 0.3s;
          }
          
          .feature-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow);
          }
          
          .feature-item i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
          }
          
          .feature-item h4 {
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: var(--dark);
          }
          
          .service-cta {
            background: linear-gradient(120deg, #1e3a8a, var(--primary));
            padding: 3.5rem;
            border-radius: var(--rounded);
            color: white;
            margin-top: 3rem;
            box-shadow: var(--shadow);
          }
          
          .service-cta h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .service-cta p {
            font-size: 1.25rem;
            max-width: 700px;
            margin: 0 auto 2rem;
            opacity: 0.9;
          }
          
          .btn-service {
            display: inline-flex;
            align-items: center;
            background: white;
            color: var(--primary-dark);
            padding: 1rem 2.5rem;
            border-radius: 50px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          
          .btn-service:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
            color: #1e3a8a;
          }
          
          .btn-service i {
            margin-left: 0.75rem;
            transition: transform 0.3s;
          }
          
          .btn-service:hover i {
            transform: translateX(5px);
          }
          
          /* Animation classes */
          .aos-init {
            opacity: 0;
            transition: opacity 0.6s, transform 0.6s;
          }
          
          .aos-animate {
            opacity: 1;
          }
          
          [data-aos="fade-up"] {
            transform: translateY(30px);
          }
          
          [data-aos="fade-up"].aos-animate {
            transform: translateY(0);
          }
          
          [data-aos="fade-right"] {
            transform: translateX(-30px);
          }
          
          [data-aos="fade-right"].aos-animate {
            transform: translateX(0);
          }
          
          [data-aos="fade-left"] {
            transform: translateX(30px);
          }
          
          [data-aos="fade-left"].aos-animate {
            transform: translateX(0);
          }
          
          [data-aos="zoom-in"] {
            transform: scale(0.95);
          }
          
          [data-aos="zoom-in"].aos-animate {
            transform: scale(1);
          }
          
          /* Responsive design */
          @media (max-width: 992px) {
            .section {
              padding: 3rem 0;
            }
            
            .tab-content {
              padding: 1.5rem;
            }
            
            .service-cta {
              padding: 2rem;
            }
          }
          
          @media (max-width: 768px) {
            .page-title {
              padding: 3rem 0 2rem;
            }
            
            .heading-title {
              font-size: 2.25rem;
            }
            
            .section-header h2 {
              font-size: 1.75rem;
            }
            
            .experience-badge {
              padding: 1rem;
            }
            
            .experience-badge span {
              font-size: 1.75rem;
            }
            
            .service-cta h3 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </Helmet>

      {/* Page Title Section */}
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="heading-title" data-aos="fade-up">SEO Optimization</h1>
                <p className="mb-0" data-aos="fade-up" data-aos-delay="100">
                  Boost your search engine rankings and drive consistent organic traffic with our
                  expert SEO solutions. We help your business get found online by the right audience at the
                  right time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">SEO Services</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="service-main-image" data-aos="zoom-in" data-aos-delay="200">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="SEO Services" 
                  className="img-fluid rounded-4"
                />
                <div className="experience-badge">
                  <span>1+</span>
                  <p>Years of SEO Excellence</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-main-content">
                <div className="section-header" data-aos="fade-up">
                  <span className="section-subtitle">Rank Higher, Convert Better</span>
                  <h2>Advanced SEO Services for Business Growth</h2>
                </div>
                <p className="lead" data-aos="fade-up" data-aos-delay="100">
                  Achieving top positions on search engines requires more than keywords. We deliver custom SEO
                  strategies designed to enhance visibility, attract targeted traffic, and boost conversion
                  rates.
                </p>
                <p data-aos="fade-up" data-aos-delay="200">
                  Our SEO experts focus on both on-page and off-page optimization, leveraging the latest
                  algorithm updates and industry tools. From audits to content strategy, we've helped
                  countless businesses grow through search.
                </p>

                <ul className="service-benefits" data-aos="fade-up" data-aos-delay="300">
                  <li><i className="bi bi-check2-circle"></i> Comprehensive technical audits</li>
                  <li><i className="bi bi-check2-circle"></i> Keyword research with commercial intent</li>
                  <li><i className="bi bi-check2-circle"></i> High-quality backlink building</li>
                  <li><i className="bi bi-check2-circle"></i> Ongoing performance monitoring</li>
                  <li><i className="bi bi-check2-circle"></i> SEO-optimized content marketing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs mt-5" data-aos="fade-up">
            <ul className="nav nav-tabs" id="service-details-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                  onClick={() => handleTabChange('tab1')}
                >
                  <i className="bi bi-speedometer2"></i> Technical SEO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                  onClick={() => handleTabChange('tab2')}
                >
                  <i className="bi bi-pencil-square"></i> Content Optimization
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                  onClick={() => handleTabChange('tab3')}
                >
                  <i className="bi bi-link-45deg"></i> Link Building
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                  onClick={() => handleTabChange('tab4')}
                >
                  <i className="bi bi-bar-chart-line"></i> Analytics & Reporting
                </button>
              </li>
            </ul>

            <div className="tab-content" id="service-details-tabs-content">
              {/* Tab 1: Technical SEO */}
              <div 
                className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} 
                id="service-details-tab-1" 
                role="tabpanel"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Technical SEO"
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                    <h3>Technical SEO Optimization</h3>
                    <p>We ensure your website meets all technical requirements for optimal search engine
                      crawling and indexing. Our audits identify and fix issues that could be hindering
                      your search performance.</p>
                    <div className="row gy-4 mt-3">
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-laptop"></i>
                          <h4>Site Architecture</h4>
                          <p>Optimized site structure and internal linking for better crawlability and
                            indexation.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-lightning-charge"></i>
                          <h4>Page Speed</h4>
                          <p>Comprehensive speed optimization for better user experience and rankings.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 2: Content Optimization */}
              <div 
                className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} 
                id="service-details-tab-2" 
                role="tabpanel"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
                    <img 
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                      alt="SEO Content Strategy"
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                    <h3>Content Strategy & Optimization</h3>
                    <p>Our content experts create SEO-friendly content that ranks and converts. We focus on
                      user intent and search algorithms to deliver content that performs.</p>
                    <div className="row gy-4 mt-3">
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-search"></i>
                          <h4>Keyword Research</h4>
                          <p>In-depth analysis of high-value keywords with commercial intent.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-file-earmark-text"></i>
                          <h4>Content Creation</h4>
                          <p>Strategic content development that answers user queries and builds authority.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 3: Link Building */}
              <div 
                className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} 
                id="service-details-tab-3" 
                role="tabpanel"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="SEO Link Building"
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                    <h3>Strategic Link Building</h3>
                    <p>We build high-quality backlinks from authoritative sources to improve your domain
                      authority and search rankings.</p>
                    <div className="row gy-4 mt-3">
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-shield-check"></i>
                          <h4>White-Hat Strategies</h4>
                          <p>Ethical link acquisition methods that comply with search engine guidelines.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-journal-text"></i>
                          <h4>Guest Posting</h4>
                          <p>High-authority guest posts with contextual backlinks to your site.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 4: Analytics & Reporting */}
              <div 
                className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`} 
                id="service-details-tab-4" 
                role="tabpanel"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="SEO Analytics"
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                    <h3>Performance Tracking & Reporting</h3>
                    <p>We provide transparent reporting with actionable insights to demonstrate ROI and
                      guide future strategies.</p>
                    <div className="row gy-4 mt-3">
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-graph-up"></i>
                          <h4>Rank Tracking</h4>
                          <p>Comprehensive monitoring of keyword rankings across search engines.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-trophy"></i>
                          <h4>ROI Analysis</h4>
                          <p>Detailed reporting on how SEO impacts your business goals and revenue.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="service-cta mt-5 text-center" data-aos="zoom-in">
            <h3>Ready to climb to the top of Google?</h3>
            <p>Request a free SEO audit and find out how we can elevate your rankings and traffic.</p>
            <a href="#contact" className="btn-service">Request SEO Proposal <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SEOServicePage;