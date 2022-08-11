import React, { useContext } from 'react'

import Navbar from './Navbar/Navbar'

import {
    Container
} from '@mui/material'

import { UserStateContext } from '../../GlobalContextProvider/GlobalContextProvider'

const Layout = ({ children }) => {
    const { user } = useContext(UserStateContext)
    return (
        <>
            {user && <Navbar />}
            <Container>{children}</Container>
        </>
    )
}
export default Layout