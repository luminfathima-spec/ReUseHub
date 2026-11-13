import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-background text-brand-text font-sans antialiased">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content View */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Catch-all route gracefully directs to Landing Page */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
