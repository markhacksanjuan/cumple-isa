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
import Resultados from './Resultados/Resultados'
import Pruebas from './Pruebas/Pruebas'
import Prueba1 from './prueba1/Prueba1'
import Prueba2 from './Prueba2/Prueba2'

const ScapeRoom = () => {
    const { user, audio } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)
    const [show1, setShow1] = useState(user?.prueba1)
    const [show2, setShow2] = useState(user?.prueba2)
    const [show3, setShow3] = useState(user?.prueba3)
    const [show4, setShow4] = useState(user?.prueba4)
    const [show5, setShow5] = useState(user?.prueba5)
    const [show6, setShow6] = useState(user?.prueba6)

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
                <Resultados/>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    {user ? renderGame() : renderBegin()}
                    {(show1 && !audio) && <Pruebas prueba={1} respuesta='daleisa' resultado='1234' setShow={setShow2} setOff={setShow1}/>}
                    {(show2 && !audio) && <Pruebas prueba={2} respuesta='izquierda' resultado='5678' setShow={setShow3} setOff={setShow2} />}
                    {(show3 && !audio) && <Pruebas prueba={3} respuesta='salchipapa' resultado='1357' setShow={setShow4} setOff={setShow3} />}
                    {(show4 && !audio) && <Pruebas prueba={4} respuesta='culo' resultado='2468' setShow={setShow5} setOff={setShow4} />}
                    {(show5 && !audio) && <Pruebas prueba={5} respuesta='culo' resultado='2468' setShow={setShow6} setOff={setShow5} />}
                    {(show6 && !audio) && <Pruebas prueba={6} respuesta='culo' resultado='2468'/>}
                </Grid>
            </Layout>
        </>
    )
}
export default ScapeRoom