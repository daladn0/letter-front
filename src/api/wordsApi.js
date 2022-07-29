import api from './api'

export const fetchAll = () => {
    return api.get('/word')
}

export const updateWord = (id, word, definition) => {
    return api.put(`/word/${id}`, {word, definition})
}

export const addWord = (word = '', definition = '') => {
    return api.post(`/word`, { word, definition })
}

export const removeWord = id => {
    return api.delete(`/word/${id}`)
}