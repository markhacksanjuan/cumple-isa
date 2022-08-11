import React, { useState, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    TextField,
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material'

import { pruebasService } from '../../../services/pruebas'
import { userService } from '../../../services/user'
import { UserStateContext, UserDispatchContext } from '../../GlobalContextProvider/GlobalContextProvider'

const Pruebas = ({ prueba, respuesta, resultado, setShow, setOff, show }) => {
    const { user } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)
    console.log(prueba, show)
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
            await pruebasService.pruebas(user._id, prueba)
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
    const onClick = async () => {
        setShow(true)
        if(setOff){
            setOff(false)
        }
        const response = await userService.fetchUser(user._id)
        dispatch({
            type: 'LOGIN',
            user: response.user
        })
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
                            {user[`prueba${prueba}`].show && renderInput()}
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
    if(show){
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
    }else {
        return (
            <>

            </>
        )
    }
    
}
export default Pruebas