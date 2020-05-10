import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("Testing title", () => {
	const { getByText } = render(<Navbar />);

	expect(getByText(/Star Wars/i).textContent).toBe("Star Wars");
});
