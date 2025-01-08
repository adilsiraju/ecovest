import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(28, 28, 28, 0.2)'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.scrolled 
    ? 'rgba(0, 0, 0, 0.1)' 
    : 'rgba(255, 255, 255, 0.1)'};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? 'var(--text)' : 'white'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--secondary);
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--primary)' : 'white'};
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  padding: 120px 24px 24px;
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  z-index: 998;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo scrolled={!mobileMenuOpen && scrolled} />
        <NavLinks>
          <NavLink to="/features" scrolled={scrolled}>Features</NavLink>
          <NavLink to="/about" scrolled={scrolled}>About</NavLink>
          <NavLink to="/invest" scrolled={scrolled}>Invest</NavLink>
          <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
        </NavLinks>
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          scrolled={!mobileMenuOpen && scrolled}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <MobileMenuOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <MobileMenu
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <MobileNavLink 
                  to="/features" 
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Features
                </MobileNavLink>
                <MobileNavLink 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  About
                </MobileNavLink>
                <MobileNavLink 
                  to="/invest" 
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Invest
                </MobileNavLink>
                <MobileNavLink 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Contact
                </MobileNavLink>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
