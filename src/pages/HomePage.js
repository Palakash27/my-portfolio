import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

export default function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}
