import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";
import { handleClickGAEvent } from "../util/contants";

export const Footer = () => {
    const gaEventTracker = useAnalyticsEventTracker("Footer");

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/palakash27/"
                                target="_blank"
                                rel="noreferrer"
                                eventlabel="footer-linkedIn"
                                onClick={(e) =>
                                    handleClickGAEvent(e, gaEventTracker)
                                }
                            >
                                <img src={navIcon1} alt="linkedin" />
                            </a>
                            <a
                                href="https://github.com/Palakash27"
                                target="_blank"
                                rel="noreferrer"
                                eventlabel="footer-github"
                                onClick={(e) =>
                                    handleClickGAEvent(e, gaEventTracker)
                                }
                            >
                                <img src={navIcon2} alt="github" />
                            </a>
                            <a
                                href="https://www.instagram.com/guyshetoldyounottoworryabout/"
                                target="_blank"
                                rel="noreferrer"
                                eventlabel="footer-instagram"
                                onClick={(e) =>
                                    handleClickGAEvent(e, gaEventTracker)
                                }
                            >
                                <img src={navIcon3} alt="instagram" />
                            </a>
                        </div>
                        <p>Get in touch with me</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
