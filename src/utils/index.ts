import { MarsRovers, MarsRoversForm, RoverProgram } from "../dataTypes";

export function mapFormValuesToMarsRovers(values: MarsRoversForm): MarsRovers {
    const plateauParams = values.plateau.split(' ');

    const rovers = values.rovers.map((rover) => {
        const roverPositionParams = rover.position.split(' ');
        return {
            initialX: parseInt(roverPositionParams[0]),
            initialY: parseInt(roverPositionParams[1]),
            initialDirection: roverPositionParams[2],
            commands: rover.commands,
        } as RoverProgram;
    });

    return {
        plateauX: parseInt(plateauParams[0]),
        plateauY: parseInt(plateauParams[1]),
        rovers: rovers,
    };
}