import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: var(--gradient-nature);
  padding: 120px 0 80px;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
`;

const FeatureCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 32px;
  border-radius: 24px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--card-hover);
    transform: translateY(-8px);
    border-color: var(--secondary);
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--forest);
  }
`;

const Title = styled.h1`
  font-size: clamp(32px, 5vw, 56px);
  margin-bottom: 24px;
  color: white;
  padding: 0 16px;
`;

const Subtitle = styled.p`
  font-size: clamp(16px, 4vw, 20px);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 16px;
`;

const Features = () => {
  const features = [
    {
      title: "Sustainable Investment Options",
      description: "Access a curated selection of eco-friendly investment opportunities across renewable energy, sustainable agriculture, and clean technology."
    },
    {
      title: "Real-Time Impact Tracking",
      description: "Monitor your environmental impact in real-time with our advanced tracking system that measures carbon offset, energy savings, and more."
    },
    {
      title: "Flexible Investment Plans",
      description: "Choose from various investment plans tailored to your goals, with options for both small and large investors."
    },
    {
      title: "Expert Analysis",
      description: "Get insights from our team of sustainability and investment experts to make informed decisions."
    },
    {
      title: "Secure Platform",
      description: "State-of-the-art security measures protect your investments and personal information."
    },
    {
      title: "Community Impact",
      description: "Join a community of like-minded investors making a positive impact on the environment."
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>Our Features</Title>
          <Subtitle>
            Discover how EcoVest makes sustainable investing accessible, 
            transparent, and impactful for everyone.
          </Subtitle>
        </Container>
      </HeroSection>

      <Container>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </PageContainer>
  );
};

export default Features; 