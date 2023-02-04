import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Algorithm Visualizer",
            imgUrl: projImg1,
            githubUrl: "https://github.com/Palakash27/Algorithm-Visualizer",
            liveUrl: "http://algorithm-visualizer-psi.vercel.app/",
        },
        {
            title: "Type The Alphabet",
            imgUrl: projImg2,
            githubUrl: "https://github.com/Palakash27/type-the-alphabet",
            liveUrl: "http://type-the-alphabet.vercel.app/",
        },
        {
            title: "Drive Test Kiosk",
            imgUrl: projImg3,
            githubUrl: "https://github.com/Palakash27/drive-test-kiosk",
            liveUrl: "http://drive-test-kiosk.vercel.app/",
        },
        {
            title: "Node.js Auth",
            imgUrl: projImg4,
            githubUrl: "https://github.com/Palakash27/nodejs-auth",
            liveUrl: "https://palakash27-nodejs-auth.herokuapp.com/users/login",
        },
        {
            title: "Chat App",
            imgUrl: projImg5,
            githubUrl: "https://github.com/Palakash27/chat-app",
            liveUrl: "https://react-chatting-app-react.herokuapp.com/",
        },
        {
            title: "Infinite Scroll Post",
            imgUrl: projImg6,
            githubUrl: "https://github.com/Palakash27/InfiniteScrollPost",
            liveUrl: "http://infinite-scroll-post.vercel.app/",
        },
        {
            title: "Student Hub",
            imgUrl: projImg1,
            githubUrl: "https://github.com/Palakash27/student-hub",
            liveUrl: "https://student-hub.aakashpal.tech/",
        },
        {
            title: "Fifa Data Visualization",
            imgUrl: projImg2,
            githubUrl: "https://github.com/Palakash27/FIFA-data-visualization",
            liveUrl: "http://fifa-data-visualization.vercel.app/",
        },
        {
            title: "Resume",
            imgUrl: projImg3,
            githubUrl: "https://github.com/Palakash27/resume",
            liveUrl: "https://resume.aakashpal.tech/",
        },
        {
            title: "Starwars Client",
            imgUrl: projImg4,
            githubUrl: "https://github.com/Palakash27/starwars-client",
            liveUrl: "http://starwars-client.vercel.app/",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>Have a look at my pet projects</p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Tab 1
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Tab 2
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Tab 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects
                                                        .slice(
                                                            0,
                                                            projects.length / 3
                                                        )
                                                        .map(
                                                            (
                                                                project,
                                                                index
                                                            ) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={
                                                                            index
                                                                        }
                                                                        {...project}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projects
                                                        .slice(
                                                            projects.length / 3,
                                                            (2 *
                                                                projects.length) /
                                                                3
                                                        )
                                                        .map(
                                                            (
                                                                project,
                                                                index
                                                            ) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={
                                                                            index
                                                                        }
                                                                        {...project}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projects
                                                        .slice(
                                                            (2 *
                                                                projects.length) /
                                                                3,
                                                            projects.length
                                                        )
                                                        .map(
                                                            (
                                                                project,
                                                                index
                                                            ) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={
                                                                            index
                                                                        }
                                                                        {...project}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
