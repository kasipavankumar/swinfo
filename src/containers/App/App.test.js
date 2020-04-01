import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "../../components/Navbar/Navbar";

it("Renders without crashing", function() {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

it("Navbar renders without crashing", function() {
    const nav = document.createElement("div");
    ReactDOM.render(<Navbar />, nav);
});
