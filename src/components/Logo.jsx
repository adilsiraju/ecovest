import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVGFile } from '../assets/images/logo.svg';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const StyledLogo = styled(LogoSVGFile)`
  width: 32px;
  height: 32px;
  fill: ${props => props.scrolled ? 'var(--primary)' : 'white'};
  transition: all 0.3s ease;
  
  path {
    transition: all 0.3s ease;
  }
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.scrolled ? 'var(--primary)' : 'white'};
  font-family: var(--font-secondary);
  transition: color 0.3s ease;
  
  span {
    color: var(--secondary);
  }
`;

const Logo = ({ scrolled }) => {
  return (
    <LogoContainer to="/" scrolled={scrolled}>
      <StyledLogo scrolled={scrolled} />
      <LogoText scrolled={scrolled}>
        Eco<span>Vest</span>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo; 