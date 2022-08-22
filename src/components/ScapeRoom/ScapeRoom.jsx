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
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    const fetchUser = async () => {
        const response = await userService.fetchUser(user._id)
        dispatch({
            type: 'FETCH_USER',
            userFetched: response.user
        })
    }

    useEffect(() => {
        console.log(user)
        if(user){
            fetchUser()
            setShow1(user.prueba1.show)
            setShow2(user.prueba2.show)
            setShow3(user.prueba3.show)
            setShow4(user.prueba4.show)
            setShow5(user.prueba5.show)
            setShow6(user.prueba6.show)
        }
    }, [audio, user])

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
            fetchUser()
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
                    {(show1 && !audio) && <Pruebas prueba={1} respuesta='daleisa' resultado='371' setShow={setShow2} setOff={setShow1} show={user?.prueba1.show}/>}
                    {(show2 && !audio) && <Pruebas prueba={2} respuesta='izquierda' resultado='925' setShow={setShow3} setOff={setShow2} show={user?.prueba2.show} />}
                    {(show3 && !audio) && <Pruebas prueba={3} respuesta='salchipapa' resultado='39.273914, -2.609611' setShow={setShow4} setOff={setShow3} show={user?.prueba3.show} />}
                    {(show4 && !audio) && <Pruebas prueba={4} respuesta='culo' resultado='472' setShow={setShow5} setOff={setShow4} show={user?.prueba4.show} />}
                    {(show5 && !audio) && <Pruebas prueba={5} respuesta='la calle' resultado='rugby, Coslada, negra, Holanda' setShow={setShow6} setOff={setShow5} show={user?.prueba5.show} />}
                    {(show6 && !audio) && <Pruebas prueba={6} respuesta='jason momoa' resultado='39.2668365, -2.6009443 -> XXVIII-VIII 19:00' show={user?.prueba6.show}/>}
                </Grid>
            </Layout>
        </>
    )
}
export default ScapeRoom