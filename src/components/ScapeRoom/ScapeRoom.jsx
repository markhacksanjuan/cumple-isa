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

const ScapeRoom = () => {
    const { user, audio } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)
    const [show1, setShow1] = useState(user ? user.prueba1.show : false)
    const [show2, setShow2] = useState(user ? user.prueba2.show : false)
    const [show3, setShow3] = useState(user ? user.prueba3.show : false)
    const [show4, setShow4] = useState(user ? user.prueba4.show : false)
    const [show5, setShow5] = useState(user ? user.prueba5.show : false)
    const [show6, setShow6] = useState(user ? user.prueba6.show : false)
    const [userFetched, setUserFetched] = useState()

    const fetchUser = async () => {
        const response = await userService.fetchUser(user._id)
        dispatch({
            type: 'FETCH_USER',
            userFetched: response.user,
            user: response.user
        })
        setUserFetched(response.user)
    }

    useEffect(() => {
        if(user){
            fetchUser()
        }
    }, [user, audio])

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
            // setShow1(true)
            dispatch({
                type: 'AUDIO',
                audio: false
            })
        }
        const renderButton1 = () => {
            return (
                <>
                    <Button fullWidth variant='contained' onClick={() => onClick()}>
                        {user?.prueba1?.show ? 'EMPEZAR' : 'CONTINUAR'}
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
                    {(show3 && !audio) && <Pruebas prueba={3} respuesta='salchipapa' resultado='39.26778, -2.61427' setShow={setShow4} setOff={setShow3} />}
                    {(show4 && !audio) && <Pruebas prueba={4} respuesta='culo' resultado='2468' setShow={setShow5} setOff={setShow4} />}
                    {(show5 && !audio) && <Pruebas prueba={5} respuesta='culo' resultado='rugby, Coslada, negra, Holanda' setShow={setShow6} setOff={setShow5} />}
                    {(show6 && !audio) && <Pruebas prueba={6} respuesta='culo' resultado='39.15468, -2.69563'/>}
                </Grid>
            </Layout>
        </>
    )
}
export default ScapeRoom