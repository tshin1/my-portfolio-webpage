import React, { Component } from 'react';
import styled from 'styled-components';

import './Main.css';

// styled components
const Section = styled.div`
  text-align: center;
  color: white;
  // make min height equal to window size
  min-height: 100vh;
  overflow: hidden;
  // #####
  // used to vertically center children
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // #####
`

const Button = styled.button`

`

const PrimaryButton = Button.extend`
  background-color: #428bca;
`

const DefaultButton = Button.extend`
  color: black;
  background-color: #FFFFFF;
`

// container that holds content for each Section
const ContentContainer = styled.div`
  max-width: 50vw;
  border: 2px solid black;
  padding: 2em 2em;
`

/*******************/
/* Welcome Section */
/*******************/
const WelcomeSection = Section.extend`
  background-color: black;

`

const Name = styled.h1`
  color: white;
  font-size: 4em;
`

const WelcomeText = styled.h2`
  color: white;
  font-size: 2em;
`

/*****************/
/* About Section */
/*****************/
const AboutSection = Section.extend`
  background-color: gray;

`

const AboutTitle = styled.h2`
  color: white;
  font-size: 2em;
`

const AboutText = styled.p`
  color: white;
  font-size: 1.5em;
`

/*********************/
/* Portfolio Section */
/*********************/
const PortfolioSection = Section.extend`
  background-color: black;
`

/********************/
/* Projects Section */
/********************/
const ProjectsSection = Section.extend`
  background-color: gray;
`

/*******************/
/* Contact Section */
/*******************/
const ContactSection = Section.extend`
  background-color: black;
`

/*****************/
/* Links Section */
/*****************/
const LinksSection = Section.extend`
  background-color: gray;
`

class Main extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <WelcomeSection>
          <ContentContainer>
            <Name>Ted Shin</Name>
            <WelcomeText>Hi, I'm a Software Engineer</WelcomeText>
            <PrimaryButton>Let's Get Started</PrimaryButton>
          </ContentContainer>
        </WelcomeSection>
        <AboutSection>
          <ContentContainer>
            <AboutTitle>A Little About Me</AboutTitle>
            <AboutText>I am a Full Stack Developer with expertise in building web applications, APIs, and backend systems in Javascript, React, Redux, Node, Sass, CSS, HTML, MongoDB, and Linux</AboutText>
            <AboutText>I have a BS in Computer Science from CCNY</AboutText>
            <DefaultButton>View My Portfolio</DefaultButton>
          </ContentContainer>
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
