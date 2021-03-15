import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "../Navigation";

const onSubmit = jest.fn();

describe('Navigation.form', () => {
    test('should call onSubmit when Submit is clicked', async () => {
        // Arrange
        const expected = {
            plateauX: 5,
            plateauY: 5,
            rovers: [{
                commands: "",
                initialDirection: 'N',
                initialX: 1,
                initialY: 2
            }]
        };
        render(<Navigation onSubmit={onSubmit} />);

        const plateau = screen.getByTestId('plateau');
        fireEvent.change(plateau.children[1].firstChild as Element, { target: { value: '5 5' } })

        const position = screen.getByTestId('rovers.0.position');
        fireEvent.change(position.children[1].firstChild as Element, { target: { value: '1 2 N' } })

        // Act
        await waitFor(() => { userEvent.click(screen.getByText('Submit')) });

        // Assert
        expect(onSubmit).toHaveBeenCalledWith(expected);
    });
})