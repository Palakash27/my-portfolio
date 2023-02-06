import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import me from "../../assets/img/me.gif";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useBanner from "./useBanner";
import { handleClickGAEvent } from "../../util/contants";
import {
    HERO_DESCRIPTION,
    HERO_GREETING,
    HERO_WELCOME,
} from "../../util/texts";

export const Banner = ({ mouseOutEvent, mouseOverEvent }) => {
    const { handleMouseMove, handleMouseLeave, imgRef, text, gaEventTracker } =
        useBanner();

    return (
        <section
            className="banner"
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imgRef}
        >
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span
                                        className="tagline"
                                        onMouseOut={mouseOutEvent}
                                        onMouseOver={mouseOverEvent}
                                    >
                                        {HERO_WELCOME}
                                    </span>
                                    <h1
                                        style={{
                                            height: "200px",
                                        }}
                                    >
                                        {HERO_GREETING.hello}
                                        <span className="wave">
                                            {HERO_GREETING.wave}
                                        </span>
                                        <br />
                                        {HERO_GREETING.me}
                                        <span className="wrap">{text}</span>
                                    </h1>
                                    <p
                                        onMouseOut={mouseOutEvent}
                                        onMouseOver={mouseOverEvent}
                                    >
                                        {HERO_DESCRIPTION}
                                    </p>
                                    <div className="social-icon">
                                        <a
                                            href="https://www.linkedin.com/in/palakash27/"
                                            target="_blank"
                                            rel="noreferrer"
                                            eventlabel="linkedIn"
                                            onClick={(e) =>
                                                handleClickGAEvent(
                                                    e,
                                                    gaEventTracker
                                                )
                                            }
                                        >
                                            <img
                                                src={navIcon1}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a
                                            href="https://github.com/Palakash27"
                                            target="_blank"
                                            rel="noreferrer"
                                            eventlabel="github"
                                            onClick={(e) =>
                                                handleClickGAEvent(
                                                    e,
                                                    gaEventTracker
                                                )
                                            }
                                        >
                                            <img src={navIcon2} alt="github" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/guyshetoldyounottoworryabout/"
                                            target="_blank"
                                            rel="noreferrer"
                                            eventlabel="instagram"
                                            onClick={(e) =>
                                                handleClickGAEvent(
                                                    e,
                                                    gaEventTracker
                                                )
                                            }
                                        >
                                            <img
                                                src={navIcon3}
                                                alt="instagram"
                                            />
                                        </a>
                                    </div>
                                    <Link
                                        to="https://resume.aakashpal.tech/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            eventlabel="resume"
                                            onClick={(e) =>
                                                handleClickGAEvent(
                                                    e,
                                                    gaEventTracker
                                                )
                                            }
                                        >
                                            View Resume{" "}
                                            <ArrowRightCircle size={25} />
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img
                                        className="hero-img"
                                        src={me}
                                        alt="Header Img"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
