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

    return (
        <>
            <Container>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Grid container alignContent='center' justifyContent='space-between' wrap='nowrap'>
                            <Grid item>
                                <Typography variant='h6'>
                                    Necesitas ayuda?
                                </Typography>
                            </Grid>
                            <Grid item container justifyContent='end' alignContent='center'>
                                <Button color='inherit' onClick={() => onClickAudio()}>
                                    audio
                                </Button>
                                <Button color='inherit'>
                                    pistas
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