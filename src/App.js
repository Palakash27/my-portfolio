import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import withCustomCursor from "./hoc/WithCustomCursor";

function App({ cursor, cursorOutline, mouseOutEvent, mouseOverEvent }) {
    return (
        <div className="App">
            <div ref={cursorOutline} className="cursor-dot-outline"></div>
            <div ref={cursor} className="cursor-dot"></div>

            <NavBar />
            <Banner />
            <Projects />
            <Footer />
        </div>
    );
}

export default withCustomCursor(App);
