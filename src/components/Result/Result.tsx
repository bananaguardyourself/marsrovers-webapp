import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { MarsRoversResult } from "../../dataTypes";
import { RoverOutput } from "../RoverOutput/RoverOutput";

import styles from './Result.module.scss';

interface Props {
    marsRoversResult: MarsRoversResult;
}

export const Result: FC<Props> = ({ marsRoversResult }) => {
    if (!marsRoversResult || !marsRoversResult.roverPositions || marsRoversResult.roverPositions.length === 0) {
        return null;
    }

    return (
        <div>
            <div className={styles.header}>
                <Typography variant="h4" component="h2" >
                    Output:
                </Typography>
            </div>
            {marsRoversResult.roverPositions.map((position, index) => <RoverOutput roverPosition={position} roverIndex={index} key={index} />)}
        </div>
    );
};