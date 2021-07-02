import React, { lazy, Suspense } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { about, contact, home, title } from "./data/hero-texts";
import "./App.css";

const Footer = lazy(() => import("./components/Footer"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Container className="p-0">
                    <Navbar
                        className="border-bottom"
                        bg="trasparent"
                        expand="lg"
                    >
                        <Navbar.Brand>
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                                href="/"
                            >
                                {title}
                            </a>
                        </Navbar.Brand>

                        <Navbar.Toggle
                            className="border-0"
                            aria-controls="navbar-toggle"
                        />
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
                        path="/about"
                        exact
                        render={() => <AboutPage title={about.title} />}
                    />
                    <Route
                        path="/contact"
                        exact
                        render={() => <ContactPage title={contact.title} />}
                    />
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
                    <Footer />
                </Container>
            </Suspense>
        </Router>
    );
}

export default App;
