import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const UiUx = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    document.title = "UIUX | Zorvixe";
  }, []);
  // Tab data
  const tabs = [
    {
      id: 1,
      title: "UX Research",
      icon: "bi-people",
      image: "ui_ux_2.jpg",
      heading: "User Experience Research",
      description: "We uncover deep user insights through comprehensive research methods to inform design decisions and create products that truly resonate with your audience.",
      features: [
        { icon: "bi-person-video", title: "User Interviews", description: "In-depth conversations to understand user behaviors, needs, and pain points." },
        { icon: "bi-graph-up", title: "Analytics Review", description: "Data-driven analysis of user behavior patterns and interaction flows." }
      ]
    },
    {
      id: 2,
      title: "UI Design",
      icon: "bi-layout-text-window",
      image: "ui_ux_3.jpg",
      heading: "User Interface Design",
      description: "We create visually stunning interfaces that are not only beautiful but also intuitive and aligned with your brand identity and business goals.",
      features: [
        { icon: "bi-palette", title: "Visual Design", description: "Creation of color schemes, typography, and visual elements that enhance usability." },
        { icon: "bi-grid", title: "Design Systems", description: "Comprehensive style guides and component libraries for design consistency." }
      ]
    },
    {
      id: 3,
      title: "Mobile UX",
      icon: "bi-phone",
      image: "ui_ux_4.jpg",
      heading: "Mobile User Experience",
      description: "We specialize in creating mobile experiences that are intuitive, efficient, and enjoyable, following platform-specific guidelines and best practices.",
      features: [
        { icon: "bi-phone", title: "Mobile-First Design", description: "Design approaches that prioritize mobile user needs and constraints." },
        { icon: "bi-hand-index-thumb", title: "Touch Optimization", description: "Designing for finger-friendly interactions and mobile gestures." }
      ]
    },
    {
      id: 4,
      title: "Prototyping",
      icon: "bi-pencil-square",
      image: "ui_ux_5.jpg",
      heading: "Interactive Prototyping",
      description: "We bring designs to life with interactive prototypes that allow for user testing and stakeholder feedback before development begins.",
      features: [
        { icon: "bi-mouse", title: "Clickable Prototypes", description: "Interactive simulations that demonstrate user flows and functionality." },
        { icon: "bi-speedometer", title: "Usability Testing", description: "Validating designs with real users to identify and fix issues early." }
      ]
    }
  ];

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="heading-title">UI/UX Design</h1>
                <p className="mb-0">Transform your digital products with exceptional user experiences. We combine
                  creative design with user psychology to deliver interfaces that engage, convert, and
                  delight.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">UI/UX Design Services</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="service-main-image">
                <img
                  src="/assets/img/services/ui_ux_1.jpg"
                  alt="UI/UX Design Process"
                  className="img-fluid rounded-4"
                />
                <div className="experience-badge">
                  <span>1+</span>
                  <p>Years Designing Experiences</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-main-content">
                <div className="section-header">
                  <span className="section-subtitle">Human-Centered Design</span>
                  <h2>Comprehensive UI/UX Solutions</h2>
                </div>
                <p className="lead">
                  In today's digital landscape, user experience is the competitive differentiator. Our design
                  services create intuitive, beautiful interfaces that drive engagement and business results.
                </p>
                <p>
                  We follow a research-driven design process that puts users at the center. From initial
                  discovery to final implementation, we craft experiences that solve real user problems while
                  achieving business objectives.
                </p>

                <ul className="service-benefits">
                  <li><i className="bi bi-check2-circle"></i> User research and persona development</li>
                  <li><i className="bi bi-check2-circle"></i> Information architecture and wireframing</li>
                  <li><i className="bi bi-check2-circle"></i> Interactive prototyping and testing</li>
                  <li><i className="bi bi-check2-circle"></i> Visual design and design systems</li>
                  <li><i className="bi bi-check2-circle"></i> Accessibility and inclusive design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-tabs mt-5">
            <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
              <TabList className="nav nav-tabs" id="service-details-tabs">
                {tabs.map(tab => (
                  <Tab key={tab.id} className="nav-item">
                    <button className="nav-link">
                      <i className={`bi ${tab.icon}`}></i> {tab.title}
                    </button>
                  </Tab>
                ))}
              </TabList>

              <div className="tab-content" id="service-details-tabs-content">
                {tabs.map(tab => (
                  <TabPanel key={tab.id}>
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <img
                          src={`/assets/img/services/${tab.image}`}
                          alt={`${tab.title} Process`}
                          className="img-fluid rounded-4"
                        />
                      </div>
                      <div className="col-lg-7">
                        <h3>{tab.heading}</h3>
                        <p>{tab.description}</p>
                        <div className="row gy-4 mt-3">
                          {tab.features.map((feature, idx) => (
                            <div key={idx} className="col-md-6">
                              <div className="feature-item">
                                <i className={`bi ${feature.icon}`}></i>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>

          <div className="service-cta mt-5 text-center">
            <h3>Ready to elevate your user experience?</h3>
            <p>Schedule your free design consultation and discover how we can transform your digital products.</p>
            <Link to="/contact" className="btn-service">
              Request Proposal <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UiUx;
