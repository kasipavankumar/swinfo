import React, { useEffect, useState, Fragment } from "react";
import { CircularProgress } from "@material-ui/core";
import DataCard from "../Card/Card";
import DismissibleAlert from "../Alert/Alert";
import useData from "../../hooks/useData";

import "./CardList.scss";

const CardList = (props) => {
    const { endpoint } = props;
    const [cards, setCards] = useState([]);
    const { data, isLoading, hasErrors } = useData(endpoint);

    useEffect(() => {
        if (data) {
            setCards(
                data.results.map((result, i) => (
                    <DataCard key={i} endpoint={endpoint} data={result} />
                ))
            );
        }
    }, [data, endpoint]);

    if (isLoading) {
        return (
            <Fragment>
                <div className="circularProgressIndicator">
                    <CircularProgress />
                </div>
            </Fragment>
        );
    }

    if (hasErrors) {
        return (
            <DismissibleAlert
                severity="error"
                message="Error loading data, try again later."
            />
        );
    }

    return <div className="cards__grid">{cards}</div>;
};

export default CardList;
