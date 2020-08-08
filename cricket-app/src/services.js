import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3030/cricket/api'
})

export const createPlayer = (player) => {
   return http.post('/players', player);
}

export const getAllPlayers = () => {
    return http.get('/players')
}

export const getPlayer = (id) => {
    return http.get(`/players/${id}`)
}

export const deletePlayer = (id) => {
    return http.delete(`/players/${id}`)
}

export const updatePlayer = (player) => {
    return http.patch(`/players/${player.id}`, player)
}