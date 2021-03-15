import React, { FC } from "react";
import { FieldArray, Form, Formik } from 'formik';
import { RoverInput } from "../RoverInput/RoverInput";
import { PlateauInput } from "../PlateauInput/PlateauInput";
import { MarsRovers, MarsRoversForm } from "../../dataTypes";
import { mapFormValuesToMarsRovers } from "../../utils";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import styles from './Navigation.module.scss';


interface Props {
    onSubmit(marsRovers: MarsRovers): void;
}

export const Navigation: FC<Props> = ({ onSubmit }) => {
    return (
        <div>
            <Formik
                initialValues={{
                    plateau: '',
                    rovers: [{
                        position: '',
                        commands: '',
                    }],
                } as MarsRoversForm}
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(mapFormValuesToMarsRovers(values));
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <div className={styles.header}>
                            <Typography variant="h4" component="h2">
                                Input:
                            </Typography>
                        </div>
                        <PlateauInput name="plateau" />

                        <FieldArray name="rovers">
                            {({ remove, push }) => (
                                <div>
                                    {values.rovers.length > 0 &&
                                        values.rovers.map((rover, index) => (
                                            <Card className={styles.roverCard} key={index}>
                                                <CardContent>
                                                    <Typography className={styles.roverTitle} gutterBottom>
                                                        Rover #{index + 1}
                                                    </Typography>
                                                    <RoverInput name={`rovers.${index}`} />
                                                    <Button
                                                        variant="outlined"
                                                        color="secondary"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Remove Rover
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    <Button
                                        variant="outlined"
                                        onClick={() => push({ position: '', commands: '' })}
                                    >
                                        Add Rover
                                    </Button>
                                </div>
                            )}
                        </FieldArray>

                        <div className={styles.submitBlock}>
                            <Button
                                color="primary"
                                variant="outlined"
                                type="submit"
                                disabled={isSubmitting}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div >
    );
};