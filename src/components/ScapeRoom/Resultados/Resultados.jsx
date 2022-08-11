import React, { useState, useContext } from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material'

import { UserStateContext, UserDispatchContext } from '../../GlobalContextProvider/GlobalContextProvider'

const Resultados = () => {
    const { user, resultados } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)

    const handleClose = () => {
        dispatch({
            type: 'RESULTADOS_CLOSE'
        })
    }

    const renderResultados = ({ prueba, resultado }) => {
        return (
            <>
                <Typography variant='h6'>
                    Resultado prueba {prueba}
                </Typography>
                <Typography variant='body1'>
                    {resultado}
                </Typography>
            </>
        )
    }
    return (
        <>
            <Dialog
                open={resultados}
                onClose={handleClose}
            >
                <DialogTitle>
                    RESULTADOS
                </DialogTitle>
                <DialogContent>
                        {user?.prueba1 && renderResultados({ prueba: 1, resultado: '1234'})}
                        {renderResultados({ prueba: 2, resultado: '5678'})}
                    <DialogContentText>
                        {/* {user?.prueba1 && renderPista1} */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CERRAR</Button>
                </DialogActions>
            </Dialog>  
        </>
    )
}
export default Resultados