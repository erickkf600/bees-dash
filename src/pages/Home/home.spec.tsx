import { render, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Home from ".";
import * as request from "./../../services/http/app.get";

const mockReturn = [
    {
        address_2: null,
        address_3: null,
        brewery_type: "planning",
        city: "Fayetteville",
        country: "United States",
        county_province: null,
        created_at: "2021-10-23T02:24:55.243Z",
        id: "banjo-brewing-fayetteville",
        latitude: null,
        longitude: null,
        name: "Banjo Brewing",
        phone: "3042164231",
        postal_code: "25840",
        state: "West Virginia",
        street: null,
        updated_at: "2021-10-23T02:24:55.243Z",
        website_url: null,
    },
];
describe("HomeComponent", () => {
    it("should create", () => {
        expect(render(<Home />)).toBeTruthy();
    });
    it("should make a request success", async () => {
        await act(async () => {
            jest.spyOn(request, "getInfos").mockImplementationOnce((): any => {
                return Promise.resolve({
                    json: () => Promise.resolve(mockReturn),
                });
            });
        });

        await waitFor(() => {
            expect(render(<Home />)).toBeTruthy();
        });
    });
    it("should make a request error", async () => {
        await act(async () => {
            jest.spyOn(request, "getInfos").mockImplementationOnce((): any => {
                return Promise.reject({
                    json: () => Promise.reject(new Error()),
                });
            });
        });

        await waitFor(() => {
            expect(render(<Home />)).toBeTruthy();
        });
    });
});
