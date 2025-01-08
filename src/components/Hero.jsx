import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.webp';

// Import your hero image
// You can use any high-quality image related to sustainable investing/nature
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ParallaxBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${heroImage}) center/cover fixed;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(28, 28, 28, 0.85) 0%,
      rgba(28, 28, 28, 0.65) 100%
    );
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 24px;
  margin: 0 auto;
  text-align: center;
  color: white;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
  background: linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(18px, 4vw, 24px);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const WhiteButton = styled(motion.button)`
  padding: 16px 32px;
  border: 2px solid white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  z-index: -1;

  &.top-right {
    top: -100px;
    right: -100px;
  }

  &.bottom-left {
    bottom: -100px;
    left: -100px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &::after {
    content: '';
    width: 2px;
    height: 64px;
    background: linear-gradient(to bottom, white 0%, transparent 100%);
  }
`;

const Hero = () => {
  return (
    <>
      <ParallaxBackground />
      <HeroSection>
        <FloatingElement
          className="top-right"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <FloatingElement
          className="bottom-left"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invest in Earth's Future
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the sustainable investment revolution with EcoVest's innovative platform
          </Subtitle>
          <ButtonGroup>
            <motion.button
              className="button button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Start Investing
            </motion.button>
            <WhiteButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Learn More
            </WhiteButton>
          </ButtonGroup>
        </HeroContent>
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.8 },
            y: { repeat: Infinity, duration: 2 }
          }}
        >
          <span>Scroll</span>
        </ScrollIndicator>
      </HeroSection>
    </>
  );
};

export default Hero;
