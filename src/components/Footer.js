import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sd={12}>
            Portfolio
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3} sd={12}>
            Made with React &#60;3
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
