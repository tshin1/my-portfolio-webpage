import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import './Main.css';
const { Header, Sider, Content } = Layout;

export default class Main extends Component {
  state = {

  };

  render() {
    return (
      <div style={{textAlign: "center", height: "100%"}}>
        <div id="welcome" style={{...styles.section, ...styles.blackBackground}}>
          hello
        </div>
        <div id="aboutme" style={{...styles.section, ...styles.grayBackground}}>
          About me
        </div>
        <div id="portfolio" style={{...styles.section, ...styles.blackBackground}}>
        </div>
        <div id="projects" style={{...styles.section, ...styles.grayBackground}}>
        </div>
        <div id="contact" style={{...styles.section, ...styles.blackBackground}}>
        </div>
        <div id="links" style={{...styles.section, ...styles.grayBackground}}>
        </div>
      </div>
    );
  }
}

const styles = {
  section: {
    color: "white",
    height: "auto",
    minHeight: "100vh"
  },
  blackBackground: {
    backgroundColor: "black",
  },
  grayBackground: {
    backgroundColor: "gray",
  }
};
