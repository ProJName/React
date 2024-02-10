import { render, screen } from "@testing-library/react"
import { Component } from "react";
import { Message } from "../message"

describe('Message', () => {
    it("renders passed text", () => {
        // const component = render(
        render(
            <Message text="text" author="author" ></Message>
        );

        const text = screen.getByText("text");
        // const text=component.getByText("text");
        expect(text).toBeDefined();
    });

    it('natches snapshot', () => {
        const component = render(
            <Message text="text" author="author" ></Message>);

        expect(component).toMatchSnapshot();
    });
});