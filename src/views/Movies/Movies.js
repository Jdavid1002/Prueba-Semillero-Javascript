import React,{useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { useDispatch, useSelector} from 'react-redux'
import RenderMovies from './RenderMovies'
import '../../css/Movies.css'


const Movies = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

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
            ...state,
            genres : res.genres,
            images_url : res.images_url,
            n : res.n,
            results : res.results
        }
        dispatch({type : "@saveMovies" , movies : initialState})
    }

    useEffect(() => {
        CargarPeliculas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="containerMovies" >
            <Nav />
            <RenderMovies />
        </div>
    );
}
 
export default Movies;