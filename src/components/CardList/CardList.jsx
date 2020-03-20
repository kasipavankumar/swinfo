import React, { Component } from "react";
import DataCard from "../Card/Card";
import { CircularProgress } from "@material-ui/core";

import "./CardList.scss";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: []
        };
    }

    componentDidMount() {
        this.CardList();
    }

    componentWillUnmount() {
        this.setState({
            Cards: []
        })
    }

    CardList = async () => {
        const { endpoint } = this.props;
        const results = await getData(endpoint);

        this.setState({
            Cards: results.map((result, i) => (
                <DataCard key={i} endpoint={endpoint} data={result} />
            ))
        });
    };

    render() {
        const { Cards } = this.state;

        return Cards.length === 0 ? (
            <div className="circularProgressIndicator">
                <CircularProgress />
            </div>
        ) : (
            <div className="cards__grid">{Cards}</div>
        );
    }
}

async function getData(endpoint) {
    const response = await fetch(`https://swapi.co/api/${endpoint}/`);
    const data = await response.json();
    return data.results;
}

export default CardList;
