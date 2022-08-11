import React, { useState, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField,
    Button,
    Grid,
    Container,
    Typography
 } from '@mui/material'
 import './login.style.css'

 import { authService } from '../../../services/auth'

 import { UserStateContext } from '../../GlobalContextProvider/GlobalContextProvider'
 import { UserDispatchContext } from '../../GlobalContextProvider/GlobalContextProvider'

const Login = () => {
    const { user } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)
    const realName = ['isabel', 'sandra', 'maricari', 'mark']
    const [nameInput, setNameInput] = useState()
    const [error, setError] = useState()
    const { control, handleSubmit, getValues, setValue } = useForm({
        defaultValues: {
            name: '',
            password: ''
        }
    })

    useEffect(() => {
    }, [])

    const onSubmit = async data => {
        if(data.name && data.password){
            const response = await authService.login(data)
            console.log(response)
            dispatch({
                type: 'LOGIN',
                user: response.user,
                audio: true
            })
        }
    }
    const renderButtonName = () => {
        const onClick = () => {
            const name = getValues('name')
            if(realName.includes(name.toLowerCase())) {
                setNameInput(name)
            } else {
                setError('Ups, no es correcto')
            }
        }
        return (
            <>
                <Button fullWidth variant='contained' onClick={() => onClick()}>
                    PROBAR NOMBRE...
                </Button>
            </>
        )
    }
    const renderButtonStart = () => {
        return (
            <>
                <Button fullWidth variant='contained' type='submit'>
                    ¡EMPEZAR A JUGAR!
                </Button>
            </>
        )
    }
    const renderRestartButton = () => {
        const onClick = () => {
            setNameInput()
            setError()
            setValue('name', '')
            setValue('password', '')
        }
        return (
            <>
                <Button fullWidth variant='contained' color='secondary' onClick={() => onClick()} >
                    RESTART
                </Button>
            </>
        )
    }
    const renderNameInput = () => {
        if(!realName.includes(getValues('name').toLowerCase())){
            return (
                <>
                    <Typography variant='h6' gutterBottom align='center'>
                        Introduce tu nombre...
                    </Typography>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => <TextField {...field} label='Nombre' variant='standard' fullWidth />}
                    />
                    {error && renderError()}
                </>
            )
        }
    }
    const renderPasswordInput = () => {
        return(
            <>
                <Typography variant='h6' gutterBottom align='center'>
                    Y una contraseña...
                </Typography>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => <TextField
                        {...field} 
                        helperText='prueba con tu correo...' 
                        label='Contraseña' 
                        variant='standard'
                        type='password'
                        />}
                />
            </>
        )
    }
    const renderError = () => {
        return (
            <>
                <Typography className='subtitle' variant='inherit' gutterBottom align='center'>
                            {error}
                </Typography>
            </>
        )
    }
    const renderForm = () => {
        return (
            <>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item>
                            {renderNameInput()}
                        </Grid>
                        <Grid item>
                            {nameInput && renderPasswordInput()}
                        </Grid>
                        <Grid item>
                            {nameInput ? renderButtonStart() : renderButtonName()}
                        </Grid>
                        <Grid item>
                            {renderRestartButton()}
                        </Grid>
                        <Grid item>
                            {/* {error && renderError()} */}
                        </Grid>
                    </form>
                </Grid>
            </>
        )
    }
    return (
        <>
            <Container>
                {renderForm()}
            </Container>

        </>
    )
}
export default Login