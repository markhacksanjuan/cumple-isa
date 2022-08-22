import React, { useContext } from 'react'
import ReactPlayer from 'react-player'

import {
    Typography,
    Grid
} from '@mui/material'

import audioGod from '../../../audio/1-inicio.mp3'

import { UserStateContext } from '../../GlobalContextProvider/GlobalContextProvider'

const Inicio = () => {
    const { user } = useContext(UserStateContext)

    const renderAudio = () => {
        return (
            <>
                <ReactPlayer 
                    url={audioGod}
                    controls={true}
                    height='50px'
                    width='100%'
                />
            </>
        )
    }
    return (
        <>
            <Grid item>
                <Typography variant='h5' align='center'>
                    Dale al play { user.name }
                </Typography>
                {renderAudio()}
            </Grid>
        </>
    )
}
export default Inicio