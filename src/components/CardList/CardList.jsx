import React, { Component } from "react";
import DataCard from "../Card/Card";
import DismissibleAlert from "../Alert/Alert";
import { CircularProgress } from "@material-ui/core";

import "./CardList.scss";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: [],
            hasErrors: false
        };
    }

    componentDidMount() {
        this.CardList();
    }

    componentWillUnmount() {
        this.setState({
            Cards: []
        });
    }

    CardList = async () => {
        const { endpoint } = this.props;
        const results = await cacheData(endpoint);
        if (results !== "error") {
            this.setState({
                Cards: results.map((result, i) => (
                    <DataCard key={i} endpoint={endpoint} data={result} />
                ))
            });
        } else {
            this.setState({ hasErrors: true });
        }
    };

    render() {
        const { Cards, hasErrors } = this.state;

        if (hasErrors) {
            return (
                <DismissibleAlert
                    severity="error"
                    message="Error loading data, try again later."
                />
            );
        } else {
            if (Cards.length === 0) {
                return (
                    <div className="circularProgressIndicator">
                        <CircularProgress />
                    </div>
                );
            } else {
                return <div className="cards__grid">{Cards}</div>;
            }
        }

        /* return Cards.length === 0 ? (
            <div className="circularProgressIndicator">
                <CircularProgress />
            </div>
        ) : (
            <div className="cards__grid">{Cards}</div>
        ); */
    }
}

async function cacheData(endpoint) {
    try {
        let cachedData = JSON.parse(sessionStorage.getItem(endpoint));

        if (cachedData == null || cachedData === undefined) {
            const response = await fetch(`https://swapi.co/api/${endpoint}/`);
            const data = await response.json();
            sessionStorage.setItem(endpoint, JSON.stringify(data.results));
            return data.results;
        } else {
            return cachedData;
        }
    } catch (error) {
        return "error";
    }
}

export default CardList;
