import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
      isOpen: false
    }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: "#d4edda"}} dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Grace's List</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/victorx716">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default AppNavbar;