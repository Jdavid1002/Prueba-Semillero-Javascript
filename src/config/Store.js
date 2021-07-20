import { createStore } from "redux"

const initialState={
    genres : [],
    images_url : "",
    n : 0,
    results : [],
    busqueda : {},
    filtros : ""
}

const reducer = (state = initialState , action) => {
    const { type ,  movies , movie , filtros} = action
    if(type === "@saveMovies"){
        return movies
    }
    if(type === "@cargarBusqueda"){
        return {
            ...state,
            busqueda : movie
        }
    }

    if(type === "@cargarFiltros"){
        return {
            ...state,
            filtros : filtros,
            results : movies
        }
    }

    return state
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())