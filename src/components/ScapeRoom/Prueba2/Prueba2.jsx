import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    TextField,
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material'

const Prueba2 = ({  }) => {
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            prueba2: ''
        }
    })
    const [error, setError] = useState()
    const respuesta2 = 'izquierda'
    const [respuesta2Correcta, setRespuesta2Correcta] = useState(false)

    const onSubmit = async data => {
        setError()
        if(data.prueba2 === respuesta2){
            console.log(data)
            setRespuesta2Correcta(true)
        }else {
            setError('Respuesta equivocada...')
            setValue('prueba2', '')
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

    const renderRespuestaCorrecta = () => {
        return (
            <>
                <Typography variant='h5' align='center'>
                    5678
                </Typography>
            </>
        )
    }

    const renderInput = () => {
        return (
            <>
                <Controller
                    name='prueba2'
                    control={control}
                    render={({ field }) => {
                        return (
                            <TextField 
                                {...field}
                                label='Respuesta prueba 2'
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
                    Prueba 2
                </Typography>
                {respuesta2Correcta ? renderRespuestaCorrecta() : renderForm()}
            </Container>
        </>
    )
}
export default Prueba2