import React from "react";

import TabBar from "../../components/Tabs/TabBar";
import Navbar from "../../components/Navbar/Navbar";

import "./App.scss";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
