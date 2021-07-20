import React,{useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { useDispatch} from 'react-redux'
import RenderMovies from './RenderMovies'
import '../../css/Movies.css'


const Movies = () => {
    const dispatch = useDispatch()

    const CargarPeliculas = async () => {
        const consulta = await axios({
            method: 'post',
            url: 'http://localhost:3001/api/Movies',
            data: {
                akelab : "123456789"
            }
        })
        const res = consulta.data
        const initialState= {
            genres : res.genres,
            images_url : res.images_url,
            n : res.n,
            results : res.results,
            busqueda : {}
        }
        dispatch({type : "@saveMovies" , movies : initialState})
    }

    useEffect(() => {
        CargarPeliculas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container-movies" >
            <Nav />
            <RenderMovies />
        </div>
    );
}
 
export default Movies;