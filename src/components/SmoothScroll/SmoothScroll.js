import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
    const windowSize = useWindowSize();
    const scrollingContainerRef = useRef();
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${
            scrollingContainerRef.current.getBoundingClientRect().height
        }px`;
    };

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="parent">
            <div ref={scrollingContainerRef}>{children}</div>
        </div>
    );
};

export default SmoothScroll;
