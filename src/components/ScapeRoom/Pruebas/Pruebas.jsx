import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    TextField,
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material'

const Pruebas = ({ prueba, respuesta, resultado, setShow, setOff }) => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            [`prueba${prueba}`]: ''
        }
    })
    const [error, setError] = useState()
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false)

    const onSubmit = async data => {
        setError()
        if(data[`prueba${prueba}`] === respuesta){
            console.log(data)
            setRespuestaCorrecta(true)
        }else {
            setError('Respuesta equivocada')
            setValue(`prueba${prueba}`, '')
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
        setShow(true)
        if(setOff){
            setOff(false)
        }
    }
    const renderButtonShow = () => {
        return (
            <>
                <Button fullWidth variant='contained' onClick={onClick}>
                    VER PRUEBA {prueba + 1}
                </Button>
            </>
        )
    }
    const renderRespuestaCorrecta = () => {
        return (
            <>
                <Typography variant='h5' align='center'>
                    {resultado}
                </Typography>
                {setShow && renderButtonShow()}
            </>
        )
    }
    const renderInput = () => {
        return (
            <>
                <Controller
                    name={`prueba${prueba}`}
                    control={control}
                    render={({ field }) => {
                        return (
                            <TextField 
                                {...field}
                                label={`Respuesta prueba ${prueba}`}
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
                    Prueba {prueba}
                </Typography>
                {respuestaCorrecta ? renderRespuestaCorrecta() : renderForm()}
            </Container>
        </>
    )
    
}
export default Pruebas