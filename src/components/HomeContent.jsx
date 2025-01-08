import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  padding: 120px 0;
  background: ${props => props.light 
    ? 'rgba(255, 255, 255, 0.85)'
    : 'rgba(28, 28, 28, 0.75)'};
  backdrop-filter: blur(5px);
  color: ${props => props.light ? 'var(--text)' : 'white'};

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
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 64px;
`;

const Card = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-8px);
    background: var(--card-bg-hover);
    border-color: rgba(52, 199, 89, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  text-align: center;
  margin-bottom: 24px;
  ${props => props.light ? `
    color: white;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : `
    background: var(--gradient-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: ${props => props.light ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-light)'};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
  font-size: 24px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text);
`;

const CardText = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 64px;
  text-align: center;
  padding: 48px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 16px;
  text-shadow: 0 2px 10px rgba(0, 230, 118, 0.2);
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-weight: 500;
`;

const HomeContent = () => {
  return (
    <>
      <Section light>
        <Container>
          <SectionTitle>Why Choose EcoVest?</SectionTitle>
          <SectionSubtitle>
            Join thousands of investors making a difference while growing their wealth
          </SectionSubtitle>
          <Grid>
            <Card whileHover={{ y: -8 }}>
              <Icon>🌱</Icon>
              <CardTitle>Sustainable Projects</CardTitle>
              <CardText>
                Invest in carefully vetted eco-friendly projects with proven track records
                and measurable impact.
              </CardText>
            </Card>
            <Card whileHover={{ y: -8 }}>
              <Icon>💰</Icon>
              <CardTitle>Smart Returns</CardTitle>
              <CardText>
                Generate competitive returns while contributing to environmental
                sustainability and social responsibility.
              </CardText>
            </Card>
            <Card whileHover={{ y: -8 }}>
              <Icon>🔒</Icon>
              <CardTitle>Secure Platform</CardTitle>
              <CardText>
                State-of-the-art security measures and transparent reporting for your
                peace of mind.
              </CardText>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle light>Our Impact</SectionTitle>
          <SectionSubtitle light>
            Making a real difference in environmental sustainability
          </SectionSubtitle>
          <Stats>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StatNumber>$50M+</StatNumber>
              <StatLabel>Invested in Green Projects</StatLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StatNumber>10K+</StatNumber>
              <StatLabel>Active Investors</StatLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatNumber>30+</StatNumber>
              <StatLabel>Sustainable Projects</StatLabel>
            </motion.div>
          </Stats>
        </Container>
      </Section>
    </>
  );
};

export default HomeContent; 