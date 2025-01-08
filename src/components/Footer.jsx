import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVGFile } from '../assets/images/logo.svg';

const FooterContainer = styled.footer`
  background: var(--background-dark);
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 24px;
    color: var(--text);
  }
`;

const CompanyInfo = styled(FooterSection)`
  p {
    color: var(--text-light);
    margin: 16px 0;
    line-height: 1.6;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary);
    }
  }
`;

const Newsletter = styled.div`
  margin-top: 24px;

  p {
    color: var(--text-light);
    margin-bottom: 16px;
  }

  form {
    display: flex;
    gap: 8px;
  }

  input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background: white;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--secondary);
    }
  }

  button {
    padding: 12px 24px;
    background: var(--gradient-1);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);

    &:hover {
      transform: translateY(-2px);
      color: var(--secondary);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-light);
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 14px;
`;

const StyledLogo = styled(LogoSVGFile)`
  width: 32px;
  height: 32px;
  fill: var(--primary);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    
    strong {
      color: var(--secondary);
    }
  }
`;

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <CompanyInfo>
            <LogoContainer>
              <StyledLogo />
              <span>Eco<strong>Vest</strong></span>
            </LogoContainer>
            <p>
              Join the sustainable investment revolution. Make a difference while
              growing your wealth with our innovative eco-friendly platform.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Facebook">f</a>
            </SocialLinks>
          </CompanyInfo>

          <FooterSection>
            <h3>Company</h3>
            <FooterLinks>
              <Link to="/about">About Us</Link>
              <Link to="/features">Features</Link>
              <Link to="/invest">Invest Now</Link>
              <Link to="/contact">Contact</Link>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Resources</h3>
            <FooterLinks>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/support">Support</Link>
              <Link to="/terms">Terms of Service</Link>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Newsletter</h3>
            <Newsletter>
              <p>Stay updated with our latest news and updates</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </Newsletter>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          © {new Date().getFullYear()} EcoVest. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 