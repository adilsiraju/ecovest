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

const ContactSection = styled.section`
  padding: 80px 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-top: 64px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 32px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--card-bg);
  padding: clamp(24px, 5vw, 32px);
  border-radius: 24px;
  box-shadow: var(--shadow);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 500;
    color: var(--forest);
  }

  input, textarea {
    padding: 12px 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 16px;
    background: white;

    &:focus {
      outline: none;
      border-color: var(--secondary);
      background: var(--sky);
    }
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: var(--gradient-1);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  background: var(--card-bg);
  padding: clamp(24px, 5vw, 32px);
  border-radius: 24px;
  box-shadow: var(--shadow);

  @media (max-width: 968px) {
    order: -1;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
    color: var(--forest);
  }

  .info-item {
    margin-bottom: 32px;
    
    h4 {
      font-size: 18px;
      margin-bottom: 8px;
      color: var(--forest);
    }
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>Contact Us</Title>
          <Subtitle>
            Have questions? We're here to help. Reach out to our team for
            support or inquiries about sustainable investing.
          </Subtitle>
        </Container>
      </HeroSection>

      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <label>Name</label>
                <input type="text" required />
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <input type="email" required />
              </FormGroup>
              <FormGroup>
                <label>Subject</label>
                <input type="text" required />
              </FormGroup>
              <FormGroup>
                <label>Message</label>
                <textarea required></textarea>
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>

            <ContactInfo>
              <h3>Get in Touch</h3>
              <div className="info-item">
                <h4>Email</h4>
                <p>contact@ecovest.com</p>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="info-item">
                <h4>Address</h4>
                <p>
                  123 Eco Street<br />
                  Sustainable City, EC 12345<br />
                  United States
                </p>
              </div>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </ContactSection>
    </PageContainer>
  );
};

export default Contact; 