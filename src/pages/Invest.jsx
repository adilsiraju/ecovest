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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 80px 0;
`;

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 24px;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--forest);
  }

  p {
    color: var(--text-light);
    margin-bottom: 16px;
  }
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: var(--background-dark);
  border-radius: 16px;
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  text-align: center;

  h4 {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 4px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: var(--forest);
  }
`;

const InvestButton = styled.button`
  width: 100%;
  padding: 16px;
  background: var(--gradient-1);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Invest = () => {
    const projects = [
        {
          title: "Solar Farm Project",
          description: "Large-scale solar energy installation in Nevada desert",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
          funded: "75",
          target: "2.5M", 
          returns: "12",
          minInvestment: "500"
        },
        {
          title: "Wind Energy Park", 
          description: "Offshore wind farm development in the North Sea",
          image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
          funded: "45",
          target: "5M",
          returns: "15", 
          minInvestment: "1000"
        },
        {
          title: "Sustainable Agriculture",
          description: "Vertical farming initiative in urban areas",
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      funded: "90",
      target: "1M",
      returns: "10",
      minInvestment: "250"
    }
    // Add more projects as needed
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>Investment Opportunities</Title>
          <Subtitle>
            Explore our curated selection of sustainable projects and start 
            investing in a better future today.
          </Subtitle>
        </Container>
      </HeroSection>

      <Container>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage image={project.image} />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectStats>
                  <StatItem>
                    <h4>Funded</h4>
                    <span>{project.funded}%</span>
                  </StatItem>
                  <StatItem>
                    <h4>Target</h4>
                    <span>${project.target}</span>
                  </StatItem>
                  <StatItem>
                    <h4>Returns</h4>
                    <span>{project.returns}%</span>
                  </StatItem>
                </ProjectStats>
                <InvestButton>
                  Invest Now (Min ${project.minInvestment})
                </InvestButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </PageContainer>
  );
};

export default Invest;