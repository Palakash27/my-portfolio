import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { about, contact, home, title } from "./data/hero-texts";

function App() {
  return (
    <Router>
      <Container className="p-0">
        <Navbar className="border-bottom" bg="trasparent" expand="lg">
          <Navbar.Brand>
            <a style={{ textDecoration: "none", color: "inherit" }} href="/">
              {title}
            </a>
          </Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              title={home.title}
              subTitle={home.subTitle}
              text={home.text}
            />
          )}
        />
        <Route
          path="/about"
          exact
          render={() => <AboutPage title={about.title} />}
        />
        <Route
          path="/contact"
          exact
          render={() => <ContactPage title={contact.title} />}
        />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
