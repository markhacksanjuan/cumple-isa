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
                        {user?.prueba1?.solved && renderResultados({ prueba: 1, resultado: '371'})}
                        {user?.prueba2?.solved && renderResultados({ prueba: 2, resultado: '925'})}
                        {user?.prueba3?.solved && renderResultados({ prueba: 3, resultado: '39.273914, -2.609611'})}
                        {user?.prueba4?.solved && renderResultados({ prueba: 4, resultado: '427'})}
                        {user?.prueba5?.solved && renderResultados({ prueba: 5, resultado: 'rugby, Coslada, negra, Holanda'})}
                        {user?.prueba6?.solved && renderResultados({ prueba: 6, resultado: '39.2668365, -2.6009443 -> XXVIII-VIII 19:00'})}
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