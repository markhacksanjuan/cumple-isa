import axios from 'axios'
import config from '../config'

const http = axios.create({
    baseURL: `${config}/pruebas`
})

const pruebas = async (id, prueba) => {
    let response
    try{
        response = await http.patch(`/prueba${prueba}`, { id })
    }catch(err) {
        response = err.response
    }
    console.log(response)
    return response.data
}
export const pruebasService = {
    pruebas
}