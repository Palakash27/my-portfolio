import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../components/Content";
import Hero from "../components/Hero";

export default function ContactPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "message":
        setMessage(value);
        break;

      default:
        throw new Error("invalid type received");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    Axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/email`, {
      name,
      email,
      message,
      disabled,
      emailSent,
    })
      .then((res) => {
        if (res.data.success) {
          setDisabled(false);
          setEmailSent(true);
        } else {
          setDisabled(false);
          setEmailSent(false);
        }
      })
      .catch((err) => {
        setDisabled(false);
        setEmailSent(false);
      });
  };

  return (
    <div>
      <Hero title={props.title}></Hero>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={disabled}
          >
            Send
          </Button>
          {emailSent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {emailSent === false && (
            <p className="d-inline err-msg">Email Not Sent</p>
          )}
        </Form>
      </Content>
    </div>
  );
}
