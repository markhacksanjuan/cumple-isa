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

const Pistas = () => {
    const { user, pistas } = useContext(UserStateContext)
    const dispatch = useContext(UserDispatchContext)

    const handleClose = () => {
        dispatch({
            type: 'PISTAS_CLOSE'
        })
    }

    const renderPistas = ({ prueba, pista }) => {
        return (
            <>
                <Typography variant='h6'>
                    Pista prueba {prueba}
                </Typography>
                <Typography variant='body1'>
                    {pista}
                </Typography>
            </>
        )
    }
    return (
        <>
            <Dialog
                open={pistas}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>
                    UN POCO DE AYUDA
                </DialogTitle>
                <DialogContent>
                        {user?.prueba1?.solved && renderPistas({ prueba: 1, pista: '1234'})}
                        {user?.prueba2?.solved && renderPistas({ prueba: 2, pista: '5678'})}
                        {user?.prueba3?.solved && renderPistas({ prueba: 3, pista: '12339.26778, -2.614274'})}
                        {user?.prueba4?.solved && renderPistas({ prueba: 4, pista: '2468'})}
                        {user?.prueba5?.solved && renderPistas({ prueba: 5, pista: 'rugby, Coslada, negra, Holanda'})}
                        {user?.prueba6?.solved && renderPistas({ prueba: 6, pista: '39.15468, -2.69563'})}
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
export default Pistas