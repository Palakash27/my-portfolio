import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title}></Hero>
      <Content>
        <p>
          Hello, my name is Aakash. I'm a passionate software engineer with
          experience in ASP .NET core, C#, CI/CD, CSS, HTML, JQuery, JavaScript,
          MS SQL, Microsoft Azure, RESTful API and ReactJS.
        </p>
        <p>I'm constantly learning new things.</p>
        <p>
          and when I'm not learning, Maybe I am playing games or distracted :p
        </p>
      </Content>
    </div>
  );
}
