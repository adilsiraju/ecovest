import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: var(--gradient-earth);
  padding: 120px 0 80px;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: clamp(40px, 5vw, 56px);
  margin-bottom: 24px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  h2 {
    font-size: clamp(24px, 4vw, 32px);
    margin-bottom: 16px;
    text-align: center;
  }

  p {
    text-align: center;
    padding: 0 16px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  background: var(--card-bg);
  padding: 32px;
  border-radius: 24px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;

  &:hover {
    background: var(--card-hover);
    transform: translateY(-8px);
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 24px;
    object-fit: cover;
    border: 4px solid var(--secondary);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--forest);
  }
`;

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/200?img=1"
    },
    {
      name: "Michael Chen",
      role: "Chief Investment Officer",
      image: "https://i.pravatar.cc/200?img=2"
    },
    {
      name: "Emma Williams",
      role: "Head of Sustainability",
      image: "https://i.pravatar.cc/200?img=3"
    },
    {
      name: "David Kumar",
      role: "Technical Director",
      image: "https://i.pravatar.cc/200?img=4"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>About Us</Title>
          <Subtitle>
            We're on a mission to make sustainable investing accessible to everyone
            while driving positive environmental change.
          </Subtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              At EcoVest, we believe that financial success and environmental 
              responsibility can go hand in hand. Our platform connects 
              conscious investors with sustainable projects that deliver both 
              returns and positive impact.
            </p>
          </motion.div>

          <TeamGrid>
            {team.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default About; 