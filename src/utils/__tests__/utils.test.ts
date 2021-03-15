import { mapFormValuesToMarsRovers } from "..";

describe('Navigation', () => {
    test('validate plateau coordinates "5 5" should be valid', () => {
        // Arrange        
        const marsForm = {
            plateau: '5 5',
            rovers: [{
                position: '1 2 N',
                commands: 'MMLMR',
            }],
        };

        const expected = {
            plateauX: 5,
            plateauY: 5,
            rovers: [{
                commands: 'MMLMR',
                initialDirection: 'N',
                initialX: 1,
                initialY: 2
            }]
        };

        // Act Assert
        expect(mapFormValuesToMarsRovers(marsForm)).toEqual(expected);
    });
})