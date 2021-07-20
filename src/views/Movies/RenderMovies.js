import React from 'react'
import { useSelector } from 'react-redux';
import Movie from './Movie';

const RenderMovies = () => {
    const results = useSelector(state => state.results)
    const genres = useSelector(state => state.genres)
    const busqueda = useSelector(state => state.busqueda)
    useSelector(state => state.filtros)

    const cargarGeneros = (data) => {
        let arrayGeneros = []
        const idGeneros = data.genre_ids
        idGeneros.forEach(element => {
            const genero = genres.filter(data => data.id === element)
            arrayGeneros.push(genero[0].name)
        })

        return arrayGeneros
    }

    const cargarEstrellas = (data) => {
        const puntuacion = parseInt(data.vote_average / 2)
        let arrayEstrellas = []
        for (let i = 0; i < puntuacion; i++) {
            arrayEstrellas.push(i)
        }
        return arrayEstrellas
    }

    const cargarEstrellasNegativas = (data) => {
        const puntuacion =data.vote_average - 10 
        const resta  = parseInt(puntuacion * puntuacion / 2) 
        let arrayEstrellas = []
        for (let i = 0; i < resta; i++) {
            arrayEstrellas.push(i)
        }
        return arrayEstrellas
    }

    return (
        <div>
            { JSON.stringify(busqueda) !=='{}' ?
                <div className="grid-movies" >
                    <Movie data={busqueda} cargarEstrellasNegativas={cargarEstrellasNegativas} cargarEstrellas={cargarEstrellas} cargarGeneros={cargarGeneros} /> 
                </div>
            :
                <div className="grid-movies" >
                    { results.map(data => <Movie key={data.id} data={data} cargarEstrellasNegativas={cargarEstrellasNegativas} cargarEstrellas={cargarEstrellas} cargarGeneros={cargarGeneros} /> )}
                </div>
            }

        </div>
    );
}
 
export default RenderMovies;