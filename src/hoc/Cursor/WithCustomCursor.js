import { useEffect, useRef } from "react";

const withCustomCursor =
    (Children) =>
    ({ ...props }) => {
        const delay = 5;

        const cursor = useRef(null);
        const cursorOutline = useRef(null);

        const cursorVisible = useRef(true);
        const cursorEnlarged = useRef(false);

        const endX = useRef(window.innerWidth / 2);
        const endY = useRef(window.innerHeight / 2);
        const _x = useRef(0);
        const _y = useRef(0);

        const requestRef = useRef(null);

        useEffect(() => {
            window.addEventListener("mousedown", mouseOverEvent);
            window.addEventListener("mouseup", mouseOutEvent);
            window.addEventListener("mousemove", mouseMoveEvent);
            window.addEventListener("mouseenter", mouseEnterEvent);
            window.addEventListener("mouseleave", mouseLeaveEvent);

            animateDotOutline();

            return () => {
                window.removeEventListener("mousedown", mouseOverEvent);
                window.removeEventListener("mouseup", mouseOutEvent);
                window.removeEventListener("mousemove", mouseMoveEvent);
                window.removeEventListener("mouseenter", mouseEnterEvent);
                window.removeEventListener("mouseleave", mouseLeaveEvent);

                cancelAnimationFrame(requestRef.current);
            };
        }, []);

        const toggleCursorVisibility = () => {
            if (cursorVisible.current) {
                cursor.current.style.opacity = 1;
                cursorOutline.current.style.opacity = 1;
            } else {
                cursor.current.style.opacity = 0;
                cursorOutline.current.style.opacity = 0;
            }
        };

        const toggleCursorSize = () => {
            if (cursorEnlarged.current) {
                cursor.current.style.transform =
                    "translate(-50%, -50%) scale(0.75)";
                cursorOutline.current.style.transform =
                    "translate(-50%, -50%) scale(1.5)";
            } else {
                cursor.current.style.transform =
                    "translate(-50%, -50%) scale(1)";
                cursorOutline.current.style.transform =
                    "translate(-50%, -50%) scale(1)";
            }
        };

        const mouseOverEvent = () => {
            cursorEnlarged.current = true;
            toggleCursorSize();
        };

        const mouseOutEvent = () => {
            cursorEnlarged.current = false;
            toggleCursorSize();
        };

        const mouseEnterEvent = () => {
            cursorVisible.current = true;
            toggleCursorVisibility();
        };

        const mouseLeaveEvent = () => {
            cursorVisible.current = false;
            toggleCursorVisibility();
        };

        const mouseMoveEvent = (e) => {
            cursorVisible.current = true;
            toggleCursorVisibility();

            endX.current = e.pageX;
            endY.current = e.pageY;

            cursor.current.style.top = endY.current + "px";
            cursor.current.style.left = endX.current + "px";
        };

        const animateDotOutline = () => {
            _x.current += (endX.current - _x.current) / delay;
            _y.current += (endY.current - _y.current) / delay;

            cursorOutline.current.style.top = _y.current + "px";
            cursorOutline.current.style.left = _x.current + "px";

            requestRef.current = requestAnimationFrame(animateDotOutline);
        };
        return (
            <Children
                {...props}
                cursor={cursor}
                cursorOutline={cursorOutline}
                mouseOutEvent={mouseOutEvent}
                mouseOverEvent={mouseOverEvent}
            />
        );
    };

export default withCustomCursor;
