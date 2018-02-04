import React, { Component } from 'react';
import styled from 'styled-components';

import './Main.css';

const Section = styled.div`
  text-align: center;
  color: white;
  min-height: 100vh;
`

const AboutSection = Section.extend`
  background-color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Name = styled.h1`
  color: white;
`

const AboutText = styled.h2`
  color: white;
`

const PortfolioSection = Section.extend`
  background-color: gray;
`

const ProjectsSection = Section.extend`
  background-color: black;
`

const ContactSection = Section.extend`
  background-color: gray;
`

const LinksSection = Section.extend`
  background-color: black;
`

class Main extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <AboutSection>
          <Name>Ted Shin</Name>
          <AboutText>Hi, I'm a Software Engineer</AboutText>
        </AboutSection>
        <PortfolioSection>

        </PortfolioSection>
        <ProjectsSection>

        </ProjectsSection>
        <ContactSection>

        </ContactSection>
        <LinksSection>

        </LinksSection>
      </div>
    );
  }
}

export default Main;
