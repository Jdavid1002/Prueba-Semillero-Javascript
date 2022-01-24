import React,{useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { useDispatch } from 'react-redux'
import RenderMovies from './RenderMovies'
import '../../css/Movies.css'


const Movies = () => {
    const dispatch = useDispatch()

    const getMovies = async () => {
      const moviesQuerie = await axios({
        method: 'post',
        url: 'http://localhost:3001/api/Movies',
        data: {
          akelab : "123456789"
        }
      });
      const res = await moviesQuerie.data;
      const initialState = {
        genres : res.genres,
        images_url : res.images_url,
        n : res.n,
        results : res.results
      };

      dispatch({
        type : "GET__MOVIES",
        payload : initialState
      });
    }

    useEffect(() => {
      getMovies();
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