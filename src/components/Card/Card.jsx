import React from "react";

import People from "./categories/People";
import Films from "./categories/Films";
import Vehicles from "./categories/Vehicles";
import Starships from "./categories/Starships";
import Species from "./categories/Species";
import Planets from "./categories/Planets";

function DataCard({ endpoint, data }) {
	switch (endpoint) {
		case "films":
			return <Films data={data} />;

		case "people":
			return <People data={data} />;

		case "vehicles":
			return <Vehicles data={data} />;

		case "starships":
			return <Starships data={data} />;

		case "species":
			return <Species data={data} />;

		case "planets":
			return <Planets data={data} />;

		default:
			return null;
	}
}

export default DataCard;
