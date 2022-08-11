import axios from 'axios'

const http = axios.create({
    baseURL: 'https://cumple-is-back.herokuapp.com/auth'
})

const login = async user => {
    console.log(user)
        let response
        try {
            response = await http.post('/login', user)
            localStorage.setItem('user', JSON.stringify(response.data.user))
        }catch(err) {
            response = err.response
        }
        console.log(response)
        return response.data
}
const getIndex = async () => {
    let response
    try {
        response = await http.get('/')
    }catch (err) {
        response = err.response
    }
    return response
}

export const authService = {
    login,
    getIndex
}