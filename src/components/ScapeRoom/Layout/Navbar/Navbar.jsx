import React, { useContext } from 'react'

import {
    Toolbar,
    AppBar,
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material'

import { UserStateContext } from '../../../GlobalContextProvider/GlobalContextProvider'
import { UserDispatchContext } from '../../../GlobalContextProvider/GlobalContextProvider'


const Navbar = () => {
    const { user, audio } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)

    const onClickAudio = () => {
        dispatch({
            type: 'AUDIO',
            audio: true
        })
    }
    const onClickResultados = () => {
        dispatch({
            type: 'RESULTADOS_OPEN'
        })
    }
    const onClickPistas = () => {
        dispatch({
            type: 'PISTAS_OPEN'
        })
    }

    return (
        <>
            <Container>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Grid container alignContent='center' justifyContent='space-between' wrap='nowrap'>
                            <Grid item>
                                <Button color='inherit' onClick={() => onClickPistas()}>
                                    Necesitas ayuda?
                                </Button>
                            </Grid>
                            <Grid item container justifyContent='end' alignContent='center'>
                                <Button color='inherit' onClick={() => onClickAudio()}>
                                    audio
                                </Button>
                                <Button color='inherit' onClick={() => onClickResultados()}>
                                    resultados
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}
export default Navbar