import React, { Component } from "react";
import DataCard from "../Card/Card";
import { CircularProgress } from "@material-ui/core";

import "../../stylesheets/CardList.scss";

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

    CardList = async () => {
        const results = await getData(this.props.endpoint);

        this.setState({
            Cards: results.map((result, i) => (
                <DataCard
                    key={i}
                    title={result.title}
                    openingCrawl={result.opening_crawl}
                    director={result.director}
                    producer={result.producer}
                    releaseDate={result.release_date}
                />
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
