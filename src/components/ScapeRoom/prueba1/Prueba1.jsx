import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    TextField,
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material'

const Prueba1 = ({ setShow2 }) => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            prueba1: ''
        }
    })
    const [error, setError] = useState()
    const respuesta1 = 'daleisa'
    const [respuesta1Correcta, setRespuesta1Correcta] = useState(false)
    const onSubmit = async data => {
        setError()
        if(data.prueba1 === respuesta1){
            console.log(data)
            setRespuesta1Correcta(true)
        }else {
            setError('Respuesta equivocada...')
            setValue('prueba1', '')
        }
    }
    const onFocus = () => {
        setError(false)
    }
    const renderError = () => {
        return (
            <>
                <Typography variant='inherit' gutterBottom align='center'>
                    {error}
                </Typography>
            </>
        )
    }
    const onClick = () => {
        setShow2(true)
    }
    const renderButtonShow2 = () => {
        return (
            <>
                <Button fullWidth variant='contained' onClick={onClick}>
                    VER PRUEBA 2
                </Button>
            </>
        )
    }
    const renderRespuestaCorrecta = () => {
        return (
            <>
                <Typography variant='h5' align='center'>
                    1234
                </Typography>
                {renderButtonShow2()}
            </>
        )
    }
    const renderInput = () => {
        return (
            <>
                <Controller 
                    name='prueba1'
                    control={control}
                    render={({ field }) => {
                        return (
                            <TextField 
                                {...field} 
                                label='Respuesta prueba 1'
                                variant='standard' 
                                fullWidth 
                                onFocus={onFocus}
                            />
                        )
                    }}
                />
            </>
        )
    }
    const renderButton = () => {
        return (
            <>
                <Button variant='contained' fullWidth type='submit'>
                    COMPROBAR RESPUESTA
                </Button>
            </>
        )
    }
    const renderForm = () => {
        return (
            <>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item>
                            {renderInput()}
                        </Grid>
                        <Grid item>
                            {error && renderError()}
                        </Grid>
                        <Grid item>
                            {renderButton()}
                        </Grid>
                    </form>
                </Grid>
            </>
        )
    }
    return (
        <>
            <Container>
                <Typography variant='h6' align='center'>
                    Prueba 1
                </Typography>
                {respuesta1Correcta ? renderRespuestaCorrecta() : renderForm()}
            </Container>
        </>
    )
}
export default Prueba1