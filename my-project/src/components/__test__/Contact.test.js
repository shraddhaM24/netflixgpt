import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",() => {
    // we can write "it" also instead of "test"
    test("Should Load contact us component",() => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should have button inside contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    
    test("Should have placeholder text inside contact component", () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    
    test("Should have submit text inside contact component", () => {
        render(<Contact/>);
    
        const input = screen.getAllByRole("textbox");
        expect(input.length).toBe(2);
        // expect(input.length).not.toBe(3);
    });
});
