import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { PROJECTS, PROJECTS_DIVIDE } from "../util/contants";

export const Projects = () => {
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
                                            {["first", "second", "third"].map(
                                                (key, idx) => (
                                                    <Nav.Item key={key}>
                                                        <Nav.Link
                                                            eventKey={key}
                                                        >
                                                            Tab {idx + 1}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                )
                                            )}
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            {["first", "second", "third"].map(
                                                (key, idx) => (
                                                    <Tab.Pane
                                                        eventKey={key}
                                                        key={key}
                                                    >
                                                        <Row>
                                                            {PROJECTS.slice(
                                                                PROJECTS_DIVIDE[
                                                                    idx
                                                                ],
                                                                PROJECTS_DIVIDE[
                                                                    idx + 1
                                                                ]
                                                            ).map(
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
                                                )
                                            )}
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
