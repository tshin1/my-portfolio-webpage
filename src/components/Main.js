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

// title text for sections
const SectionTitle = styled.h2`
  color: white;
  font-size: 2em;
`

const ContentContainer = styled.div`
  max-width: 70vw;
  padding: 2em 2em;
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

// container that holds content for about text
const AboutContainer = styled.div`
  max-width: 50vw;
  border: 2px solid black;
  padding: 2em 2em;
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

const PortfolioRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2em;
`

const PortfolioImageLeft = styled.img`
  width: 100%;
  margin-right: 2em;
`

const PortfolioImageRight = styled.img`
  width: 100%;
  margin-left: 2em;
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
          <SectionTitle>A Little About Me</SectionTitle>
          <AboutContainer>
            <AboutText>I am a Full Stack Developer with expertise in building web applications, APIs, and backend systems in Javascript, React, Redux, Node, Sass, CSS, HTML, MongoDB, and Linux</AboutText>
            <AboutText>I have a BS in Computer Science from CCNY</AboutText>
            <DefaultButton>View My Portfolio</DefaultButton>
          </AboutContainer>
        </AboutSection>
        <PortfolioSection>
          <SectionTitle>Web Portfolio</SectionTitle>
          <ContentContainer>
            <PortfolioRowContainer>
              <div>
                <a href="https://pollsta.herokuapp.com/polls">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                    alt="Pollsta"
                    title="Pollsta"
                  />
                </a>
              </div>
              <div>
                <a href="https://poppin-bars.herokuapp.com/search">
                    <PortfolioImageRight
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                      alt="Poppin Bars"
                      title="Poppin Bars"
                    />
                  </a>
              </div>
            </PortfolioRowContainer>
            <PortfolioRowContainer>
              <div>
                <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                    alt="Meteorite Landings With D3"
                    title="Meteorite Landings With D3"
                  />
                </a>
              </div>
              <div>
                <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                  <PortfolioImageRight
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                    alt="Roguelike Cave Crawler"
                    title="Roguelike Cave Crawler"
                  />
                </a>
              </div>
            </PortfolioRowContainer>
            <PortfolioRowContainer>
              <div>
                <a href="https://monitor-stocks.herokuapp.com/">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                    alt="Stocks Monitor"
                    title="Stocks Monitor"
                  />
                </a>
              </div>
              <div>
                <a href="https://tshin7.github.io/simon-game-clone/">
                  <PortfolioImageRight
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                    alt="Simon Game Clone"
                    title="Simon Game Clone"
                  />
                </a>
              </div>
            </PortfolioRowContainer>
          </ContentContainer>
          <DefaultButton>Check Out My Projects</DefaultButton>
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
