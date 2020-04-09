import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import DataCard from "../Card/Card";
import DismissibleAlert from "../Alert/Alert";

import "./CardList.scss";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: [],
            hasErrors: false,
        };
    }

    componentDidMount() {
        this.CardList();
    }

    componentWillUnmount() {
        this.setState({
            Cards: [],
        });
    }

    CardList = async () => {
        const { endpoint } = this.props;
        const results = await cacheData(endpoint);

        if (results !== "error") {
            this.setState({
                Cards: results.map((result, i) => (
                    <DataCard key={i} endpoint={endpoint} data={result} />
                )),
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
    }
}

// Function to fetch the data from swapi.co
// This will also cache the fetched data in
// local storage for faster access.
export async function cacheData(endpoint) {
    const expectedEndpoints = [
        "films",
        "people",
        "vehicles",
        "species",
        "planets",
        "starships"
    ];

    if (expectedEndpoints.includes(endpoint.toLowerCase())) {
        try {
            let cachedData = JSON.parse(localStorage.getItem(endpoint));

            if (cachedData == null || cachedData === undefined) {
                const response = await axios.get(
                    `https://swapi.co/api/${endpoint}/`
                );
                localStorage.setItem(
                    endpoint,
                    JSON.stringify(response.data.results)
                );
                return response.data.results;
            } else {
                return cachedData;
            }
        } catch (error) {
            return "error";
        }
    } else {
        throw new Error("Invalid endpoint!");
    }
}

export default CardList;
