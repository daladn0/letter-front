import api from './api'

export const fetchAll = (args) => {
    let url = `/word`

    if ( args && Object.keys(args).length !== 0 && Object.getPrototypeOf(args) === Object.prototype ) {
        const searchParams = new URLSearchParams('')
        
        for ( let [key, value] of Object.entries(args) ) {
            if ( value ) searchParams.append(key, value)
        }

        url = url + '?' + searchParams.toString()
    } else {
        url = '/word'
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

export const exportCSV = () => {
    return api.get(`/word/csv`)
}

export const exportPDF = () => {
    return api.get(`/word/pdf`)
}