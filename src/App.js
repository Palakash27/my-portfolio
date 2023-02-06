import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner/Banner";
// import { Skills } from "./components/Skills";
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import withCustomCursor from "./hoc/WithCustomCursor";
import ShootingStars from "./components/ShootingStars/ShootingStars";

import ReactGA from "react-ga";
const TRACKING_ID = "G-HFW27BNKDZ";

function App({ cursor, cursorOutline, mouseOutEvent, mouseOverEvent }) {
    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return (
        <Router>
            <div className="App">
                <div ref={cursorOutline} className="cursor-dot-outline"></div>
                <div ref={cursor} className="cursor-dot"></div>

                <NavBar />
                <ShootingStars />
                <Banner
                    mouseOutEvent={mouseOutEvent}
                    mouseOverEvent={mouseOverEvent}
                />
                <Projects />
                <Footer />
            </div>
        </Router>
    );
}

export default withCustomCursor(App);
