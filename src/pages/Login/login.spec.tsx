import { render } from "@testing-library/react";
import React from "react";
import LoginView from ".";

describe("LoginComponent", () => {
    it("should create", () => {
        expect(render(<LoginView />)).toBeTruthy();
    });
});
