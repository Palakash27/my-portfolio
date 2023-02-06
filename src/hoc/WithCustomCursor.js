import { useCallback, useEffect, useRef } from "react";

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

        const mouseOverEvent = useCallback(() => {
            cursorEnlarged.current = true;
            toggleCursorSize();
        }, []);

        const mouseOutEvent = useCallback(() => {
            cursorEnlarged.current = false;
            toggleCursorSize();
        }, []);

        const mouseMoveEvent = useCallback((e) => {
            cursorVisible.current = true;
            toggleCursorVisibility();

            endX.current = e.pageX;
            endY.current = e.pageY;

            cursor.current.style.top = endY.current + "px";
            cursor.current.style.left = endX.current + "px";
        }, []);

        const mouseEnterEvent = useCallback(() => {
            cursorVisible.current = true;
            toggleCursorVisibility();
        }, []);

        const mouseLeaveEvent = useCallback(() => {
            cursorVisible.current = false;
            toggleCursorVisibility();
        }, []);

        const animateDotOutline = useCallback(() => {
            _x.current += (endX.current - _x.current) / delay;
            _y.current += (endY.current - _y.current) / delay;

            cursorOutline.current.style.top = _y.current + "px";
            cursorOutline.current.style.left = _x.current + "px";

            requestRef.current = requestAnimationFrame(animateDotOutline);
        }, []);

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
        }, [
            animateDotOutline,
            mouseEnterEvent,
            mouseLeaveEvent,
            mouseMoveEvent,
            mouseOutEvent,
            mouseOverEvent,
        ]);

        const toggleCursorVisibility = () => {
            cursor.current.style.opacity = cursorVisible.current ? 1 : 0;
            cursorOutline.current.style.opacity = cursorVisible.current
                ? 0.6
                : 0;
        };

        const toggleCursorSize = () => {
            cursor.current.style.transform = cursorEnlarged.current
                ? "translate(-50%, -50%) scale(0)"
                : "translate(-50%, -50%) scale(1)";
            cursorOutline.current.style.transform = cursorEnlarged.current
                ? "translate(-50%, -50%) scale(2)"
                : "translate(-50%, -50%) scale(1)";
            cursorOutline.current.style.background = cursorEnlarged.current
                ? "rgb(222 191 241)"
                : "rgb(159 35 237)";
            cursorOutline.current.style.mixBlendMode = cursorEnlarged.current
                ? "difference"
                : "";
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
