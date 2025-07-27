import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom' 
import { Button_1, Button_2 } from './Button_1';

describe('Button_1 Component', () => {
    it('renders with label', () => {
        render(<Button_1 label='Gradient Button' />);
        expect(screen.getByText('Gradient Button')).toBeInTheDocument();
    });

    it('triggers onClick when clicked', () => {
        const handelClick = vi.fn();
        render(<Button_1 label='Gradient Button' onClick={handelClick} />);
        fireEvent.click(screen.getByText('Gradient Button'));
        expect(handelClick).toHaveBeenCalledTimes(1);
    });
});

describe('Button_2 Component', () => {
    it('renders with label', () => {
        render(<Button_2 label='Gradient Button' />);
        expect(screen.getByText('Gradient Button')).toBeInTheDocument();
    });

    it('triggers onClick when clicked', () => {
        const handelClick = vi.fn();
        render(<Button_2 label='Gradient Button' onClick={handelClick} />);
        fireEvent.click(screen.getByText('Gradient Button'));
        expect(handelClick).toHaveBeenCalledTimes(1);
    });
});