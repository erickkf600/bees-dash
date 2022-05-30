import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Header from ".";

const mockProps = {
    navigate: jest.fn(),
};
describe("Header Componet", () => {
    beforeAll(() => {
        Object.defineProperty(window, "location", {
            writable: true,
            value: { reload: jest.fn() },
        });
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });

    it("should create", () => {
        expect(render(<Header {...mockProps} />)).toBeTruthy();
    });
    it("should have class header", () => {
        render(<Header {...mockProps} />);
        const element = screen.getByTestId("header");
        expect(element).toHaveClass("header");
    });
    it("should click in logout", () => {
        render(<Header {...mockProps} />);
        const button = screen.getByTestId("logout");
        userEvent.click(button);
        expect(button).toBeInTheDocument();
    });
});
