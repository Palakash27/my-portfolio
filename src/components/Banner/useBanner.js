import { useCallback, useEffect, useRef, useState } from "react";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

export default function useBanner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const gaEventTracker = useAnalyticsEventTracker("Banners-Section");
    const period = 2000;
    let imgRef = useRef(null);
    let XAngle = 1;
    let YAngle = 1;

    const tick = useCallback(() => {
        const toRotate = ["Aakash", "a Web Developer!", "an Engineer!"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
        }
    }, [isDeleting, loopNum, text.length]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [tick, delta]);

    const handleMouseMove = (event) => {
        const obj = imgRef.current;
        const r = obj.getBoundingClientRect();
        const XRel = event.clientX - r.left;
        const YRel = event.clientY - r.top;
        const width = obj.offsetWidth;
        YAngle = -(0.5 - XRel / width) * 2;
        XAngle = (0.5 - YRel / width) * 2;
        obj.style.transform = `perspective(250px) scale3d(1, 1, 1) rotateX(${XAngle}deg) rotateY(${YAngle}deg) rotateZ(0deg) skew(0deg, 0deg)`;
    };

    const handleMouseLeave = () => {
        imgRef.current.transform = `scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    };

    return {
        handleMouseMove,
        handleMouseLeave,
        imgRef,
        text,
        gaEventTracker,
    };
}
