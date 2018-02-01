import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react';

import Main from './Main'

class SideMenu extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
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
