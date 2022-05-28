import { render } from "@testing-library/react";
import React from "react";
import Home from ".";

describe("HomeComponent", () => {
    it("should create", () => {
        expect(render(<Home />)).toBeTruthy();
    });
});
