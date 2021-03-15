import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { RoverPosition } from "../../dataTypes";

import styles from './RoverOutput.module.scss';

interface Props {
    roverPosition: RoverPosition;
}

export const RoverOutputFail: FC<Props> = ({ roverPosition }) => {
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
            <div>
                <Typography variant="body1" color="textSecondary" display="inline">
                Status Message:&nbsp;
                </Typography>
                <Typography variant="body1" display="inline">
                    {roverPosition.statusMessage}
                </Typography>
            </div>
        </div>
    );
};