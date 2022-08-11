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
                fullWidth
            >
                <DialogTitle>
                    RESULTADOS
                </DialogTitle>
                <DialogContent>
                        {user?.prueba1?.solved && renderResultados({ prueba: 1, resultado: '1234'})}
                        {user?.prueba2?.solved && renderResultados({ prueba: 2, resultado: '5678'})}
                        {user?.prueba3?.solved && renderResultados({ prueba: 3, resultado: '12339.26778, -2.614274'})}
                        {user?.prueba4?.solved && renderResultados({ prueba: 4, resultado: '2468'})}
                        {user?.prueba5?.solved && renderResultados({ prueba: 5, resultado: 'rugby, Coslada, negra, Holanda'})}
                        {user?.prueba6?.solved && renderResultados({ prueba: 6, resultado: '39.15468, -2.69563'})}
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