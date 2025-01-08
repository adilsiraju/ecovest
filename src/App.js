import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/GlobalStyles.css';
import styled from '@emotion/styled';

const Invest = () => <div>Invest Page</div>;

const Home = () => (
  <>
    <Hero />
    <HomeContent />
  </>
);

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 