import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">RandomTube</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/Linusar/RandomTube" target="_blank">GitHub</NavLink>
              </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}