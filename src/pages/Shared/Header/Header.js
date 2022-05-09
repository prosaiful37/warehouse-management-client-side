
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }


  // handle signout
  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Perfume
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link href="#inventory">Inventory</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="manageInventory">Manage</Nav.Link>
                <Nav.Link as={Link} to="addInventory">AddInventory</Nav.Link>

              </>

            }
            {
              user ?
              <Button onClick={handleSignOut} className='text-decoration-none' variant="link">Log Out</Button>
              :
              <Nav.Link as={Link} eventKey={2} to="login">
                Login
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
