import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "../Navigation";

const onSubmit = jest.fn();

jest.mock('../../RoverInput/RoverInput', () => ({
    RoverInput: () => <div>RoverInput</div>,
}));

describe('Navigation', () => {
    test('should renders', () => {
        // Act
        render(<Navigation onSubmit={onSubmit} />);
    });

    test('should add RoverInput when Add Rover is clicked', async () => {

        // Act
        render(<Navigation onSubmit={onSubmit} />);
        await waitFor(() => { userEvent.click(screen.getByText('Add Rover')) });

        // Assert        
        expect(screen.getAllByText('RoverInput').length).toBe(2);
    });

    test('should remove RoverInput when Remove Rover is clicked', async () => {
        // Act
        render(<Navigation onSubmit={onSubmit} />);
        await waitFor(() => { userEvent.click(screen.getByText('Remove Rover')) });

        // Assert        
        expect(screen.queryByText('RoverInput')).toBeNull();
    });
})