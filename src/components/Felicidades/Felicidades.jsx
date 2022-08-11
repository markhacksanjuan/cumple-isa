import React from 'react'

import Login from '../ScapeRoom/Login/Login'

import { Grid, Container, Typography } from '@mui/material'

const Felicidades = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2} direction='column' justifyContent='center' alignItems='center'>
                    <Grid item>
                        <Typography variant='h2' align='center'>
                            Felicidades mi amor!!
                        </Typography>
                    </Grid>
                    <Grid>
                        <Login />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Felicidades