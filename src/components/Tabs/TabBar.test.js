import React from "react";
import { render } from "@testing-library/react";
import AppBar from "./TabBar";

test("Testing tab names to match expected ones", () => {
    const { getByText } = render(<AppBar />);
    const expectedTabNames = [
        "Films",
        "People",
        "Planets",
        "Species",
        "Starships",
        "Vehicles",
    ];

    expect(expectedTabNames).toContain(getByText(/films/i).textContent);
    expect(expectedTabNames).toContain(getByText(/planets/i).textContent);
    expect(expectedTabNames).toContain(getByText(/species/i).textContent);
    expect(expectedTabNames).toContain(getByText(/people/i).textContent);
    expect(expectedTabNames).toContain(getByText(/starships/i).textContent);
    expect(expectedTabNames).toContain(getByText(/vehicles/i).textContent);
});
