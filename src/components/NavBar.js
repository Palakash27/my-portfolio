import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";
import { handleClickGAEvent } from "../util/contants";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const gaEventTracker = useAnalyticsEventTracker("Navbar");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value, e) => {
        setActiveLink(value);
        handleClickGAEvent(e, gaEventTracker);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand
                    href="/"
                    eventlabel="navbar-logo"
                    onClick={(e) => handleClickGAEvent(e, gaEventTracker)}
                >
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            eventlabel="navbar-home"
                            onClick={(e) => onUpdateActiveLink("home", e)}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            eventlabel="navbar-projects"
                            onClick={(e) => onUpdateActiveLink("projects", e)}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
