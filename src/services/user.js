import axios from 'axios'

const http = axios.create({
    baseURL: 'https://cumple-is-back.herokuapp.com/user'
})

const fetchUser = async (id) => {
    let response
    try {
        response = await http.get(`/fetchUser/${id}`)
        // localStorage.setItem('user', JSON.stringify('user', response.data.user))
    }catch(err) {
        response = err.response
    }
    console.log(response)
    return response.data
}
export const userService = {
    fetchUser
}