
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../LandingPage/Home/Hero";

//test suite.
describe("Hero Component", () => {
    test ("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getAllByAltText("Hero Pic");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
});