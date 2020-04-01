import React, { Component } from "react";

import TabBar from "../../components/Tabs/TabBar";
import Navbar from "../../components/Navbar/Navbar";

import "./App.scss";

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <TabBar />
            </div>
        );
    }
}
