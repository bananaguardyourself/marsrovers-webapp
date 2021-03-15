import React, { FC } from "react";
import { Field } from 'formik';
import { validateRoverCommands, validateRoverPosition } from "../../validators";
import { TextField } from "formik-material-ui";

import styles from './RoverInput.module.scss';

interface Props {
    name: string;
}

export const RoverInput: FC<Props> = ({ name }) => {
    return (
        <div className={styles.container}>
            <Field
                label="Position"
                component={TextField}
                type="text"
                name={`${name}.position`}
                data-testid={`${name}.position`}
                validate={validateRoverPosition}
            />

            <Field
                label="Commands"
                component={TextField}
                type="text"
                name={`${name}.commands`}
                data-testid={`${name}.commands`}
                validate={validateRoverCommands}
            />
        </div>
    );
};