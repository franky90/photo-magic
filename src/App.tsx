import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <header className="header">
          <div className="container">
            <nav className="nav">
              <Link to="/" className="logo">
                AI Photo Magic
              </Link>
              <div className="nav-links">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                {/* Hero Section */}
                <section className="hero">
                  <div className="container">
                    <h1 className="hero-title">
                      Transform Your Photos into<br />
                      Magical Moments & 3D Reality
                    </h1>
                    <p className="hero-description">
                      Transform your photos into fantasy characters, change backgrounds instantly, or create stunning 3D-printed figures. Experience the magic of AI-powered transformations.
                    </p>
                    <div className="button-group">
                      <Link to="/gallery" className="button button-primary">
                        View Gallery
                      </Link>
                      <Link to="/contact" className="button button-secondary">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="features">
                  <div className="container">
                    <h2 className="features-title">
                      Transform Your Photos & Create 3D Memories
                    </h2>
                    <div className="features-grid">
                      <div className="feature-card">
                        <div className="before-after-container">
                          <div className="before-image">
                            <img src="/images/beach-before.jpg" alt="Original scene" />
                          </div>
                          <div className="after-image">
                            <img src="/images/beach-after.jpg" alt="Transformed scene" />
                          </div>
                          <div className="slider-handle"></div>
                        </div>
                        <h3 className="feature-title">Background Magic</h3>
                        <p className="feature-description">
                          Transport your photos to any location with our AI background transformation.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="before-after-container">
                          <div className="before-image">
                            <img src="/images/character-before.jpg" alt="Original character" />
                          </div>
                          <div className="after-image">
                            <img src="/images/character-after.jpg" alt="Transformed character" />
                          </div>
                          <div className="slider-handle"></div>
                        </div>
                        <h3 className="feature-title">Fantasy Characters</h3>
                        <p className="feature-description">
                          Turn yourself into superheroes, fantasy characters, or anything you imagine.
                        </p>
                      </div>

                      <div className="feature-card">
                        <div className="single-image-container">
                          <img 
                            src="/images/3d-print.jpg" 
                            alt="3D Printed Character"
                          />
                        </div>
                        <h3 className="feature-title">3D Printed Characters</h3>
                        <p className="feature-description">
                          Get your transformed characters as beautiful Low Poly 3D printed figures. Perfect for display or gifting.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                  <div className="container">
                    <div className="cta-container">
                      <h2 className="cta-title">Ready to Transform Your Photos?</h2>
                      <p className="cta-description">
                        Start your creative journey today and bring your imagination to life.
                      </p>
                      <div className="button-group">
                        <Link to="/gallery" className="button button-primary">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 AI Photo Magic. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
