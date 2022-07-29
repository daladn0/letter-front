import api from './api'

export const fetchAll = (args) => {
    let url = `/word`

    if ( args?.queryString ) {
        url = `/word?${args.queryString}`
    }

    return api.get(url)
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