import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class AuthenticatedNavigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <Navbar collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">App Title</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

AuthenticatedNavigation.propTypes = {
  user: React.PropTypes.object,
};
