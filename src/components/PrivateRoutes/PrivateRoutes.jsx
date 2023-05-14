import React from 'react'
import useAppContext from '../../customHooks/useAppContext'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { state } = useAppContext();
    return state.user.isLogged ? children : <Navigate to="/" />
}

export default PrivateRoutes