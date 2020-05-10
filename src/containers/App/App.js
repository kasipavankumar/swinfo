import React, { Component } from "react";

import TabBar from "../../components/Tabs/TabBar";
import Navbar from "../../components/Navbar/Navbar";

import "./App.scss";

export default class App extends Component {
    componentDidMount() {
        // https://stackoverflow.com/a/53858020/7469926
        let link =
            document.querySelector('link[rel="shortcut icon"]') ||
            document.querySelector('link[rel="icon"]');

        if (!link) {
            link = document.createElement("link");
            link.id = "favicon";
            link.rel = "shortcut icon";
            document.head.appendChild(link);
        }

        // https://stackoverflow.com/a/57795495/7469926
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            link.href = `/favicon.light.svg`;
        } else {
            link.href = `/favicon.dark.svg`;
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <TabBar />
            </div>
        );
    }
}
