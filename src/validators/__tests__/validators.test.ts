import { validateCoordinates, validateRoverCommands, validateRoverPosition } from "..";

describe('Validators', () => {
    test('validate plateu coordinates "5 5" should be valid', () => {
        expect(validateCoordinates("5 5")).toBe(undefined);
    });
    test('validate plateu coordinates "10 10" should be valid', () => {
        expect(validateCoordinates("10 10")).toBe(undefined);
    });
    test('validate plateu coordinates "15 23" should be valid', () => {
        expect(validateCoordinates("15 23")).toBe(undefined);
    });
    test('validate plateu coordinates "5  5" should be invalid', () => {
        expect(validateCoordinates("5  5")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates " 5 5" should be invalid', () => {
        expect(validateCoordinates(" 5 5")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "5 5 " should be invalid', () => {
        expect(validateCoordinates("5 5 ")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "-5 5" should be invalid', () => {
        expect(validateCoordinates("-5 5 ")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "5 -5" should be invalid', () => {
        expect(validateCoordinates("5 -5 ")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "5 5n" should be invalid', () => {
        expect(validateCoordinates("5 5n")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "5 N" should be invalid', () => {
        expect(validateCoordinates("5 N")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "7 7 7" should be invalid', () => {
        expect(validateCoordinates("7 7 7")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "8 8 8 8" should be invalid', () => {
        expect(validateCoordinates("8 8 8 8")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "10" should be invalid', () => {
        expect(validateCoordinates("10")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "4" should be invalid', () => {
        expect(validateCoordinates("4")).toBe('Coordinates of the plateau are not valid');
    });
    test('validate plateu coordinates "" should be invalid', () => {
        expect(validateCoordinates("")).toBe('Required');
    });

    test('validate rover initial position "1 2 N" should be valid', () => {
        expect(validateRoverPosition("1 2 N")).toBe(undefined);
    });
    test('validate rover initial position "3 3 E" should be valid', () => {
        expect(validateRoverPosition("3 3 E")).toBe(undefined);
    });
    test('validate rover initial position "10 7 S" should be valid', () => {
        expect(validateRoverPosition("10 7 S")).toBe(undefined);
    });
    test('validate rover initial position "12 32 W" should be invalid', () => {
        expect(validateRoverPosition("12 32 W")).toBe(undefined);
    });
    test('validate rover initial position "4 4" should be invalid', () => {
        expect(validateRoverPosition("4 4")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "4 4 D" should be invalid', () => {
        expect(validateRoverPosition("4 4 D")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "4 N" should be invalid', () => {
        expect(validateRoverPosition("4 N")).toBe('Rover position is not valid');
    });
    test('validate rover initial position " 3 4 N" should be invalid', () => {
        expect(validateRoverPosition(" 3 4 N")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "3 4 N " should be invalid', () => {
        expect(validateRoverPosition("3 4 N ")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "3  4 N" should be invalid', () => {
        expect(validateRoverPosition("3  4 N")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "3 4  N" should be invalid', () => {
        expect(validateRoverPosition("3 4  N")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "3 4 5 N" should be invalid', () => {
        expect(validateRoverPosition("3 4 5 N")).toBe('Rover position is not valid');
    });
    test('validate rover initial position "" should be invalid', () => {
        expect(validateRoverPosition("")).toBe('Required');
    });

    test('validate rover commands "MRLMMR" should be invalid', () => {
        expect(validateRoverCommands("MRLMMR")).toBe(undefined);
    });
    test('validate rover commands "" should be invalid', () => {
        expect(validateRoverCommands("")).toBe(undefined);
    });
    test('validate rover commands " MRLRMM" should be invalid', () => {
        expect(validateRoverCommands(" MRLRMM")).toBe('Rover commands is not valid');
    });
    test('validate rover commands "MRLRMM " should be invalid', () => {
        expect(validateRoverCommands("MRLRMM ")).toBe('Rover commands is not valid');
    });
    test('validate rover commands "MRLHRMM" should be invalid', () => {
        expect(validateRoverCommands("MRLHRMM")).toBe('Rover commands is not valid');
    });
    test('validate rover commands " " should be invalid', () => {
        expect(validateRoverCommands(" ")).toBe('Rover commands is not valid');
    });
    test('validate rover commands "RMLMRRMM1" should be invalid', () => {
        expect(validateRoverCommands("RMLMRRMM1")).toBe('Rover commands is not valid');
    });
})