import React, { useEffect, useContext, useState } from 'react'

import Login from './Login/Login'

import { Container,
     Grid,
    Typography, 
    Button
} from '@mui/material'

import { userService } from '../../services/user'

import { UserStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { UserDispatchContext } from '../GlobalContextProvider/GlobalContextProvider'

import Layout from './Layout/Layout'
import Inicio from './Inicio/Inicio'
import Prueba1 from './prueba1/Prueba1'
import Prueba2 from './Prueba2/Prueba2'

const ScapeRoom = () => {
    const { user, audio } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)
    const [show1, setShow1] = useState(user?.prueba1)
    const [show2, setShow2] = useState(user?.prueba2)

    const fetchUser = async () => {
        const response = await userService.fetchUser(user._id)
        dispatch({
            type: 'LOGIN',
            user: response.user
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const renderBegin = () => {
        return (
            <>
                <Grid item>
                    <Typography variant='h3' gutterBottom align='center'>
                        Que empiece el juego...
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant='h5' gutterBottom align='center'>
                        Primero comprobemos que eres quien deberías ser
                    </Typography>
                    <Login />
                </Grid>
            </>
        )
    }
    const renderGame = () => {
        const onClick = () => {
            setShow1(true)
            dispatch({
                type: 'AUDIO',
                audio: false
            })
        }
        const renderButton1 = () => {
            return (
                <>
                    <Button fullWidth variant='contained' onClick={() => onClick()}>
                        VER PRUEBA 1
                    </Button>
                </>
            )
        }
        return (
            <>
                <Grid item>
                    {audio && <Inicio />}
                    {audio && renderButton1()}
                </Grid>
            </>
        )
    }

    return(
        <>
            <Layout> 
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    {user ? renderGame() : renderBegin()}
                    {(show1 && !audio && !show2) && <Prueba1 setShow2={setShow2}/>}
                    {(show2 && !audio) && <Prueba2/>}
                </Grid>
            </Layout>
        </>
    )
}
export default ScapeRoom