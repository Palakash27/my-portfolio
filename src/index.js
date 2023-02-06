import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-HFW27BNKDZ";
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
