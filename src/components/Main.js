import React, { Component } from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll'
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import './Main.css';
import { backgroundColors } from './StyledComponentsVariables';

// styled components
const Section = styled.div`
  // text-align: center;
  color: white;
  // make min height equal to window size
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
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
  font-size: 2.5em;
  margin-bottom: 1em;

  @media (max-width: 800px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`

const ContentContainer = styled.div`
  // padding: 2em 2em;
`

const Button = styled.button`
  // margin-top: 3em;
`

const PrimaryButton = Button.extend`
  @media (max-width: 800px) {
    display: none;
  }
`

const DefaultButton = Button.extend`
  color: #333;

  @media (max-width: 800px) {
    display: none;
  }
`

/*******************/
/* Welcome Section */
/*******************/
const WelcomeSection = Section.extend`
  background-color: ${backgroundColors.welcome};
  position: fixed;
`

const Name = styled.h1`
  color: white;
  font-size: 4em;

  @media (max-width: 800px) {
    font-size: 3.5em;
  }

  @media (max-width: 480px) {
    font-size: 3em;
  }
`

const Greeting = styled.h2`
  color: white;
  font-size: 2.5em;
  margin-bottom: 1em;

  @media (max-width: 800px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.6em;
    max-width: 80vw;
  }
`

const WelcomeSectionButton = PrimaryButton.extend`
  margin-top: 2em;
`

/*****************/
/* About Section */
/*****************/
const AboutSection = Section.extend`
  background-color: ${backgroundColors.about};
  margin-top: 100vh;
  position: relative;
  min-height: 400px;
`

// container that holds content for about text
const AboutContainer = styled.div`
  max-width: 50vw;
  // border: 2px solid black;
  // padding: 2em 2em;

  @media (max-width: 800px) {
    max-width: 60vw;
  }

  @media (max-width: 480px) {
    max-width: 80vw;

  }
`

const AboutText = styled.p`
  color: white;
  font-size: 1.2em;
  line-height: 1.4;
  font-family: 'Roboto Slab', sans-serif;

  @media (max-width: 800px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.85em;

  }
`

const AboutSectionButton = DefaultButton.extend`
  margin-top: 2em;
`

/*********************/
/* Projects Section */
/*********************/
const ProjectsSection = Section.extend`
  background-color: ${backgroundColors.projects};
  position: relative;
  min-height: 850px;

  @media (max-width: 900px) {
    height: 1650px;
  }

  @media (max-width: 800px) {
    height: 1525px;
  }

  @media (max-width: 480px) {
    height: 1525px;
  }
`

const ProjectsRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2em;

  @media (max-width: 900px) {
    display: block;
    margin-bottom: 0;
  }
`

const ProjectsImage = styled.img`
  // width: 25em;
  width: 100%;
  border-radius: 0;
  box-shadow: 5px 5px 3px #1e1e1e;
  padding: 0;
  // filter: brightness(100%);
  // &:hover {
  //   filter: brightness(20%);
  //   transition: all 0.4s ease-out;
  // };
`

const ProjectsImageLeftDiv = styled.div`
  padding-right: 1em;
  width: 25em;

  @media (max-width: 900px) {
    padding-right: 0;
    margin-bottom: 2em;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`

const ProjectsImageRightDiv = styled.div`
  padding-left: 1em;
  width: 25em;

  @media (max-width: 900px) {
    padding-left: 0;
    margin-bottom: 2em;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`

const ImageTextLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .9);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-out;
  // transition: opacity .2s, visibility .2s;
`

const ImageWrap = styled.div`
  position: relative;
  // height: 200px;
  // width: 257px;

  &:hover ${ImageTextLayer} {
    visibility: visible;
    opacity: 1;
  }
`



const ImageText = styled.p`

`

/*******************/
/* Contact Section */
/*******************/
const ContactSection = Section.extend`
  background-color: ${backgroundColors.contact};
  position: relative;
  min-height: 280px;
`

const ContactText = styled.h3`
  margin-bottom: 0;
  font-size: 1.8em;

  @media (max-width: 800px) {
    font-size: 1.6em;
  }

  @media (max-width: 480px) {
    font-size: 1.4em;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0;
`

class Main extends Component {

  state = {

  };

  scrollToElement = (event) => {
    // value holds the id of the target container
    const targetElementId = event.target.value;
    scroller.scrollTo(targetElementId, {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }

  render() {
    return (
      <div style={{position: 'absolute'}}>
        <WelcomeSection>
          <ContentContainer>
            <Name>Ted Shin</Name>
            <Greeting>Hi, I'm a Software Engineer</Greeting>
            <WelcomeSectionButton
              className="btn btn-primary"
              onClick={this.scrollToElement}
              value="about-section"
              type="button"
            >
              <FaAngleDoubleDown size={20} />
              Let's Get Started
            </WelcomeSectionButton>
          </ContentContainer>
        </WelcomeSection>
        <AboutSection id="about-section">
          <SectionTitle>About Me</SectionTitle>
          <AboutContainer>
            <AboutText>I am a Full Stack Developer with experience in building web applications, APIs, and backend systems in Javascript, React, Node, Express, Sass, CSS, HTML, MongoDB, and Linux</AboutText>
            <AboutText>I have a BS in Computer Science from CCNY</AboutText>
          </AboutContainer>
          <AboutSectionButton
            className="btn btn-light"
            onClick={this.scrollToElement}
            value="portfolio-section"
            type="button"
          >
          Check Out My Projects
          </AboutSectionButton>
        </AboutSection>
        <ProjectsSection id="portfolio-section">
          <SectionTitle>Projects</SectionTitle>
          <ContentContainer>
            <ProjectsRowContainer>
              <ProjectsImageLeftDiv>
                <ImageWrap>
                  <a href="https://pollsta.herokuapp.com/polls" data-content="hello world">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                      alt="Pollsta"
                      title="Pollsta"
                    />
                      <ImageTextLayer>
                        <ImageText>Pollsta</ImageText>
                      </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageLeftDiv>
              <ProjectsImageRightDiv>
                <ImageWrap>
                  <a href="https://poppin-bars.herokuapp.com/search">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                      alt="Poppin Bars"
                      title="Poppin Bars"
                    />
                    <ImageTextLayer>
                      <ImageText>Poppin Bars</ImageText>
                    </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageRightDiv>
            </ProjectsRowContainer>
            <ProjectsRowContainer>
              <ProjectsImageLeftDiv>
                <ImageWrap>
                  <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                      alt="Meteorite Landings With D3"
                      title="Meteorite Landings With D3"
                    />
                    <ImageTextLayer>
                      <ImageText>Meteorite Landings</ImageText>
                    </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageLeftDiv>
              <ProjectsImageRightDiv>
                <ImageWrap>
                  <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                      alt="Roguelike Cave Crawler"
                      title="Roguelike Cave Crawler"
                    />
                    <ImageTextLayer>
                      <ImageText>Roguelike Cave Crawler</ImageText>
                    </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageRightDiv>
            </ProjectsRowContainer>
            <ProjectsRowContainer>
              <ProjectsImageLeftDiv>
                <ImageWrap>
                  <a href="https://monitor-stocks.herokuapp.com/">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                      alt="Stocks Monitor"
                      title="Stocks Monitor"
                    />
                    <ImageTextLayer>
                      <ImageText>Stocks Monitor</ImageText>
                    </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageLeftDiv>
              <ProjectsImageRightDiv>
                <ImageWrap>
                  <a href="https://tshin7.github.io/simon-game-clone/">
                    <ProjectsImage
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                      alt="Simon Game Clone"
                      title="Simon Game Clone"
                    />
                    <ImageTextLayer>
                      <ImageText>Simon Game</ImageText>
                    </ImageTextLayer>
                  </a>
                </ImageWrap>
              </ProjectsImageRightDiv>
            </ProjectsRowContainer>
          </ContentContainer>
          <DefaultButton
            className="btn btn-light"
            onClick={this.scrollToElement}
            value="contact-section"
            type="button"
          >
          Contact Me
          </DefaultButton>
        </ProjectsSection>
        <ContactSection id="contact-section">
          <SectionTitle><FaEnvelope size={28} style={{position: 'relative', bottom: '4px', right: '10px'}}/>Contact Me</SectionTitle>
          <ContactText>t d y s h i n     @     g m a i l     .     c o m</ContactText>
          <LinksContainer>
            <FaLinkedin size={50} />
            <FaGithub size={50} />
          </LinksContainer>
          <ContactText> Copyright © 2018 Ted Shin</ContactText>
        </ContactSection>
      </div>
    );
  }
}

export default Main;
