import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import Login from ".";
const mockProps = {
    navigate: jest.fn(),
};

describe("Login Component", () => {
    it("should create", () => {
        expect(render(<Login {...mockProps} />)).toBeTruthy();
    });
    it("should set form as invalid", async () => {
        const { getByTestId } = render(<Login {...mockProps} />);
        const full_name = getByTestId("full_name") as HTMLInputElement;
        const is_older = getByTestId("is_older") as HTMLInputElement;
        const submit = getByTestId("send");
        await act(async () => {
            userEvent.type(full_name, "teste");
        });
        expect(full_name).toBeInTheDocument();
        expect(is_older).toBeInTheDocument();
        expect(submit).toBeDisabled();
    });
    it("should set form as valid", async () => {
        const { getByTestId } = render(<Login {...mockProps} />);
        const full_name = getByTestId("full_name") as HTMLInputElement;
        const is_older = getByTestId("is_older") as HTMLInputElement;
        const submit = getByTestId("send");
        userEvent.type(full_name, "teste");
        userEvent.click(is_older);
        await waitFor(() => {
            userEvent.click(submit);
            expect(submit).toBeEnabled();
        });
    });
});
