export function validateCoordinates(value: string): string | undefined {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^\d+(?:\s\d+){1}$/i.test(value)) {
        error = 'Coordinates of the plateau are not valid';
    }
    return error;
}

export function validateRoverPosition(value: string): string | undefined {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^\d+(?:\s\d+)(?:\s[NESW]){1}$/i.test(value)) {
        error = 'Rover position is not valid';
    }
    return error;
}

export function validateRoverCommands(value: string): string | undefined {
    let error;
    if ( value && !/^(\(?\+?[MLR]*\)?)$/i.test(value)) {
        error = 'Rover commands is not valid';
    }
    return error;
}