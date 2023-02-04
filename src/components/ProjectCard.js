import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, githubUrl, liveUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project-img" />
                <div className="proj-txtx">
                    <h5>{title}</h5>
                    <div>
                        <h5>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </h5>
                        <h5>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </Col>
    );
};
