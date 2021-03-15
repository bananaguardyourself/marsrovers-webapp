import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { RoverPosition } from "../../dataTypes";

import styles from './RoverOutput.module.scss';

interface Props {
    roverPosition: RoverPosition;
}

export const RoverOutputSuccess: FC<Props> = ({ roverPosition }) => {
    return (
        <div className={styles.result}>
            <div>
                <Typography variant="body1" color="textSecondary" display="inline">
                    Position X:&nbsp;
                </Typography>
                <Typography variant="body1" display="inline">
                    {roverPosition.positionX}
                </Typography>
            </div>
            <div>
                <Typography variant="body1" color="textSecondary" display="inline">
                    Position Y:&nbsp;
                </Typography>
                <Typography variant="body1" display="inline">
                    {roverPosition.positionY}
                </Typography>
            </div>
            <div>
                <Typography variant="body1" color="textSecondary" display="inline">
                Direction:&nbsp;
                </Typography>
                <Typography variant="body1" display="inline">
                    {roverPosition.direction}
                </Typography>
            </div>
        </div>
    );
};