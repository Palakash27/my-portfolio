import { useState, useEffect, useCallback, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.gif";
import "animate.css";
import TrackVisibility from "react-on-screen";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Banner = ({ mouseOutEvent, mouseOverEvent }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const period = 2000;
    let imgRef = useRef(null);
    let XAngle = 1;
    let YAngle = 1;

    const tick = useCallback(() => {
        const toRotate = ["Aakash", "a Web Developer", "an Engineer"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            // setIndex(1);
            setDelta(500);
        } else {
            // setIndex((prevIndex) => prevIndex + 1);
        }
    }, [isDeleting, loopNum, text.length]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [tick, delta]);

    const handleMouseMove = (event) => {
        const obj = imgRef.current;
        const r = obj.getBoundingClientRect();
        const XRel = event.clientX - r.left;
        const YRel = event.clientY - r.top;
        const width = obj.offsetWidth;
        YAngle = -(0.5 - XRel / width) * 2;
        XAngle = (0.5 - YRel / width) * 2;
        obj.style.transform = `perspective(250px) scale3d(1, 1, 1) rotateX(${XAngle}deg) rotateY(${YAngle}deg) rotateZ(0deg) skew(0deg, 0deg)`;
    };

    const handleMouseLeave = () => {
        imgRef.current.transform = `scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    };

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
                                        Welcome to my Portfolio
                                    </span>
                                    <h1
                                        style={{
                                            height: "200px",
                                        }}
                                    >
                                        {`Hello!`}
                                        <span className="wave">👋🏽</span>
                                        <br />
                                        {` I'm `}
                                        <span className="wrap">{text}</span>
                                    </h1>
                                    <p
                                        onMouseOut={mouseOutEvent}
                                        onMouseOver={mouseOverEvent}
                                    >
                                        My full name is Aakash Pal. I'm 25 years
                                        old. I am an electronics engineer and a
                                        Full-Stack Developer (Frontend-Heavy).
                                        I'm constantly learning new things and
                                        when I'm not learning, Maybe I am
                                        playing games or distracted :p
                                    </p>
                                    <div className="social-icon">
                                        <a
                                            href="https://www.linkedin.com/in/palakash27/"
                                            target="_blank"
                                            rel="noreferrer"
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
                                        >
                                            <img src={navIcon2} alt="github" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/guyshetoldyounottoworryabout/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={navIcon3}
                                                alt="instagram"
                                            />
                                        </a>
                                    </div>
                                    <Link to="https://resume.aakashpal.tech/">
                                        <button>
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
