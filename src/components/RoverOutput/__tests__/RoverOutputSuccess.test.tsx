import { render } from "@testing-library/react";
import React from "react";
import { RoverOutputSuccess } from "../RoverOutputSuccess";

describe('RoverOutputSuccess', () => {
    test('should render', () => {
        // Arrange
        const position = {
            positionX: 1,
            positionY: 1,
            direction: 'N',
            success: true,
            statusMessage: ''
        };

        // Act
        render(<RoverOutputSuccess roverPosition={position} />);
    });
})