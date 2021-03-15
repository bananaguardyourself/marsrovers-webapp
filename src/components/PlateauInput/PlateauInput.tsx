import React, { FC } from "react";
import { Field } from 'formik';
import { validateCoordinates } from "../../validators";
import { TextField } from "formik-material-ui";

import styles from './PlateauInput.module.scss';

interface Props {
    name: string;
}

export const PlateauInput: FC<Props> = ({ name }) => {
    return (
    <div className={styles.plateau}>
        <Field
            label="Plateau limits"
            data-testid={name}
            component={TextField}
            type="text"
            name={name}
            validate={validateCoordinates} />
    </div>
    );
};