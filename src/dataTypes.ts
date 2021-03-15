export interface RoverProgram {
    initialX: number;
    initialY: number;
    initialDirection: string;
    commands: string;
}

export interface MarsRovers {
    plateauX: number;
    plateauY: number;
    rovers: RoverProgram[];
}

export interface RoverPosition {
    positionX: number;
    positionY: number;
    direction: string;
    success: boolean;
    statusMessage: string;
}

export interface MarsRoversResult {
    roverPositions: RoverPosition[];
}

export interface MarsRoversForm {
    plateau: string,
    rovers: MarsRoversFields[],
}

export interface MarsRoversFields {
    position: string,
    commands: string,
}