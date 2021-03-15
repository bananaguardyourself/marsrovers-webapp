import React, { FC, useState } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { Result } from "../../components/Result/Result";
import { MarsRovers, MarsRoversResult } from "../../dataTypes";
import { useApi } from "../../providers/ApiProvider";
import { toast, ToastContainer } from 'react-toastify';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styles from './Rovers.module.scss';


export const Rovers: FC = () => {
    const [roversResult, setRoversResult] = useState({} as MarsRoversResult);
    const apiService = useApi();
    const onSubmit = async (marsRovers: MarsRovers) => {
        try {
            const result = await apiService.processMarsRovers(marsRovers);
            setRoversResult(result);
        } catch (error) {
            const message = error.response ? error.response.data.message : 'Something went wrong';
            toast.error(message);
        }
    }
    return (
        <Container maxWidth="lg">
            <header className={styles.header}>
                <Typography variant="h2" component="h1">
                    Mars Rovers
                </Typography>
            </header>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Navigation onSubmit={onSubmit} />
                </Grid>
                <Grid item xs={6}>
                    <Result marsRoversResult={roversResult} />
                </Grid>
            </Grid>

            <ToastContainer />
        </Container>);
};