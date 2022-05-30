import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentLoader from "./component-loader";

describe("ComponentLoader", () => {
    it("should create", () => {
        expect(render(<ComponentLoader />)).toBeTruthy();
    });
    it("should have class loader", () => {
        render(<ComponentLoader />);

        const element = screen.getByTestId("loading");
        expect(element).toHaveClass("loader");
    });

    it("should have spinner", () => {
        render(<ComponentLoader />);

        const element = screen.getByTestId("spinner");
        expect(element).toHaveClass("loader__animation");
    });
});
