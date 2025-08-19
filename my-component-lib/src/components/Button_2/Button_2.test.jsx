import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import GlassButton from "./Button_2";
import { describe, expect, it } from "vitest";

describe('GlassButton Component', () => {
    it('renders with initial label', () => {
        render(<GlassButton />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('change label on click', () => {
        render(<GlassButton/>)
        const btn = screen.getByText('Click Me');
        fireEvent.click(btn);
        expect(screen.getByText('Clicked!')).toBeInTheDocument();
    });

    it('disables interaction if disabled', () => {
        render(<GlassButton disabled />);
        const btn = screen.getByRole('button')
        expect(btn).toBeDisabled();
    });
});