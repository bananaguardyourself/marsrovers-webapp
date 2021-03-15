import { render, screen } from "@testing-library/react";
import React from "react";
import { RoverOutput } from "../RoverOutput";

jest.mock('../RoverOutputSuccess', () => ({
    RoverOutputSuccess: () => <>RoverOutputSuccess</>,
}));

jest.mock('../RoverOutputFail', () => ({
    RoverOutputFail: () => <>RoverOutputFail</>,
}));

describe('RoverOutput', () => {
    test('should show RoverOutputSuccess when result position success is true', () => {
        // Arrange
        const position = {
            positionX: 1,
            positionY: 1,
            direction: 'N',
            success: true,
            statusMessage: ''
        };

        // Act
        render(<RoverOutput roverPosition={position} roverIndex={1} />);

        // Assert
        expect(screen.getByText('RoverOutputSuccess')).toBeInTheDocument();
    });

    test('should show RoverOutputFail when result position success is false', () => {
        // Arrange
        const position = {
            positionX: 1,
            positionY: 1,
            direction: 'N',
            success: false,
            statusMessage: 'Message'
        };

        // Act
        render(<RoverOutput roverPosition={position} roverIndex={1} />);

        // Assert
        expect(screen.getByText('RoverOutputFail')).toBeInTheDocument();
    });
})