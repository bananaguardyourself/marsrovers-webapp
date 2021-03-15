import { render } from "@testing-library/react";
import React from "react";
import { RoverOutputFail } from "../RoverOutputFail";

describe('RoverOutputFail', () => {
    test('should render', () => {
        // Arrange
        const position = {
            positionX: 1,
            positionY: 1,
            direction: 'N',
            success: false,
            statusMessage: 'Message'
        };

        // Act
        render(<RoverOutputFail roverPosition={position} />);
    });
})