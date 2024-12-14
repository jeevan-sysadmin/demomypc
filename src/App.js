// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CombinedPage from './pages/CombinedPage'; // Import the CombinedPage component
// import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Terms from './pages/TermsPage';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CombinedPage />} /> {/* Use CombinedPage for the root path */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          <Route path="/terms" element={<Terms />} />        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
