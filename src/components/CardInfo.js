import React from "react";
import { useSpring, animated } from "react-spring";

export default function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      {props.link && (
        <>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            View Project Demo
          </a>
          <br />
        </>
      )}
      {props.scLink && (
        <a href={props.scLink} target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      )}
    </animated.div>
  );
}
