import React, { FC } from "react";
import { RoverPosition } from "../../dataTypes";
import { RoverOutputFail } from "./RoverOutputFail";
import { RoverOutputSuccess } from "./RoverOutputSuccess";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import styles from './RoverOutput.module.scss';


interface Props {
    roverPosition: RoverPosition;
    roverIndex: number;
}

export const RoverOutput: FC<Props> = ({ roverPosition, roverIndex}) => {
    const color = roverPosition.success ? "textPrimary" : "error";
    return (        
            <Card className={styles.roverCard}>
                <CardContent>
                    <Typography className={styles.roverTitle} color={color} gutterBottom>
                        Rover #{roverIndex + 1}
                    </Typography>

                    {roverPosition.success && <RoverOutputSuccess roverPosition={roverPosition} />}
                    {!roverPosition.success && <RoverOutputFail roverPosition={roverPosition} />}
                </CardContent>
            </Card>        
    );
};