import { render, screen } from "@testing-library/react";
import React from "react";
import { MarsRoversResult } from "../../../dataTypes";
import { Result } from "../Result";

jest.mock('../../RoverOutput/RoverOutput', () => ({
    RoverOutput: () => <div>RoverOutput</div>,
}));

describe('Result', () => {
    test('should return null when sent undefined', () => {
        // Arrange
        const positions = null as unknown as MarsRoversResult;

        // Act
        const { container } = render(<Result marsRoversResult={positions} />);

        // Assert
        expect(container.firstChild).toBeNull();
    });

    test('should return null when positions are null', () => {
        // Arrange
        const positions = {
            roverPositions: null,
        } as unknown as MarsRoversResult;

        // Act
        const { container } = render(<Result marsRoversResult={positions} />);

        // Assert
        expect(container.firstChild).toBeNull();
    });

    test('should return null when there are no results', () => {
        // Arrange
        const positions = {
            roverPositions: [],
        };

        // Act
        const { container } = render(<Result marsRoversResult={positions} />);

        // Assert
        expect(container.firstChild).toBeNull();
    });

    test('should show RoverOutputs when there are positions in result', () => {
        // Arrange
        const positions = {
            roverPositions: [
                {
                    positionX: 3,
                    positionY: 3,
                    direction: 'E',
                    success: true,
                    statusMessage: ''
                },
                {
                    positionX: 1,
                    positionY: 1,
                    direction: 'N',
                    success: false,
                    statusMessage: 'Message'
                }
            ],
        };

        // Act
        render(<Result marsRoversResult={positions} />);

        // Assert
        expect(screen.getAllByText('RoverOutput').length).toBe(2);
    });
})