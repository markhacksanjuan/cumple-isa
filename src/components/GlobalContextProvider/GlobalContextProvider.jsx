import React, { createContext, useReducer } from 'react'

export const UserStateContext = createContext()
export const UserDispatchContext = createContext()
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : false,
    audio: true,
    resultados: false,
    game: true,
    userFetched: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user
            }
        case 'FETCH_USER':
            return {
                ...state,
                userFetched: action.userFetched
            }
        case 'AUDIO':
            return {
                ...state,
                audio: action.audio,
                resulados: false
            }
        case 'RESULTADOS_OPEN':
            return {
                ...state,
                resultados: true
            }
        case 'RESULTADOS_CLOSE':
            return {
                ...state,
                resultados: false
            }
        case 'GAME':
            return {
                ...state,
                game: action.game,
                pistas: false,
                audio: false
            }
        default:
            return state
    }
}
const GlobalContextProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, initialState)
    return (
        <UserStateContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}
export default GlobalContextProvider