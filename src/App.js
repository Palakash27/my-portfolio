import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import withCustomCursor from "./hoc/WithCustomCursor";
import ShootingStars from "./components/ShootingStars/ShootingStars";

function App({ cursor, cursorOutline, mouseOutEvent, mouseOverEvent }) {
    return (
        <Router>
            <div className="App">
                <div ref={cursorOutline} className="cursor-dot-outline"></div>
                <div ref={cursor} className="cursor-dot"></div>

                {/* <NavBar /> */}
                {/* <ShootingStars /> */}
                <Banner
                    mouseOutEvent={mouseOutEvent}
                    mouseOverEvent={mouseOverEvent}
                />
                {/* <Projects /> */}
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default withCustomCursor(App);
