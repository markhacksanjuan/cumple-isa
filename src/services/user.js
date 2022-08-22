import axios from 'axios'
import config from '../config'

const http = axios.create({
    baseURL: `${config}/user`
})

const fetchUser = async (id) => {
    let response
    try {
        response = await http.get(`/fetchUser/${id}`)
        localStorage.setItem('user', JSON.stringify(response.data.user))
    }catch(err) {
        response = err.response
    }
    console.log(response)
    return response.data
}
export const userService = {
    fetchUser
}