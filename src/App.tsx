import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/" element={
              <>
                <section className="hero">
                  <div className="container">
                    <h1>Transform Your Photos with AI Magic</h1>
                    <p>Experience the power of AI to transform your photos into stunning works of art.</p>
                  </div>
                </section>

                <section className="features">
                  <div className="container">
                    <h2 className="features-title">
                      Transform Your Photos & Create 3D Memories
                    </h2>
                    <div className="features-grid">
                      <div className="feature-card">
                        <BeforeAfterSlider
                          beforeImage="/images/beach-before.jpg"
                          afterImage="/images/beach-after.jpg"
                          beforeAlt="Original scene"
                          afterAlt="Transformed scene"
                        />
                        <h3 className="feature-title">Background Magic</h3>
                        <p className="feature-description">
                          Transport your photos to any location with our AI background transformation.
                        </p>
                      </div>

                      <div className="feature-card">
                        <BeforeAfterSlider
                          beforeImage="/images/character-before.jpg"
                          afterImage="/images/character-after.jpg"
                          beforeAlt="Original character"
                          afterAlt="Transformed character"
                        />
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
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
