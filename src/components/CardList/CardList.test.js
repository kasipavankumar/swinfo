import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardList from "./CardList";
import axiosMock from "axios";

// Mock axios
jest.mock("axios");

// Test suite for CardList
describe("Test Suite", () => {
    // Test if API call is successful
    test("API successfully called", () => {
        const endpoint = "films";

        render(<CardList endpoint={endpoint} />);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
});
