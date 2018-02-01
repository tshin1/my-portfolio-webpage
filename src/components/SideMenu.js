import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react';

import Main from './Main'

const styles = {
  icon: {
    float: 'none',
    margin: '0em 0.5em 0em 0em'
  }
};

class SideMenu extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });



  render() {
    const { visible } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} vertical inverted>
            <Menu.Item name='welcome'>
              <Icon name='power' style={styles.icon} />
              Welcome
            </Menu.Item>
            <Menu.Item name='aboutme'>
              <Icon name='user' style={styles.icon} />
              About Me
            </Menu.Item>
            <Menu.Item name='portfolio'>
              <Icon name='picture' style={styles.icon} />
              Portfolio
            </Menu.Item>
            <Menu.Item name='projects'>
              <Icon name='camera' style={styles.icon} />
              Projects
            </Menu.Item>
            <Menu.Item name='contact'>
              <Icon name='mail' style={styles.icon} />
              Contact
            </Menu.Item>
            <Menu.Item name='links'>
              <Icon name='world' style={styles.icon} />
              Links
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Main toggleVisibility={this.toggleVisibility} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  };
}

export default SideMenu
