import { render, screen } from "@testing-library/react";
import Body from "./body";

it('render navbar', () => {
    render(<Body />)
    let navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
})