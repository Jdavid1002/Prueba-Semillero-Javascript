import React from 'react';
import { useSelector , useDispatch} from 'react-redux'


const NavFilter = () => {

    const movies = useSelector(state => state.results)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()


    const filtrarGenero = () => {
    
        const arraySeleccionedGenres = []

        for (let i = 0; i < genres.length; i++) {
            const elemento = document.getElementById(genres[i].id)
            arraySeleccionedGenres.push({
                estado : elemento.checked,
                elemento,
                id : genres[i].id
            })
        }

        const idGenres = arraySeleccionedGenres.filter(data => data.estado === true).map(data => data.id)
        
        const newArray = []
        movies.forEach(element => idGenres.forEach(id => element.genre_ids.forEach( g => g === id ? newArray.push(element) :null )))

        const ids = newArray.map(data => data.id)
        const unicos = ids.filter((valor, indice) => ids.indexOf(valor) === indice)

        const newMovies = []        
        unicos.forEach(element => newMovies.push(movies.find(data => data.id === element)))

        dispatch({type : "@filtrarMovies" , resultsFilter: newMovies, filtros : "genres"})
    }


    return (
        <div>
            <div className="nav__filterMenu">
                <h5> Genero </h5>
                {genres.map(g => 
                    <div key={g.id} >
                        <label> <input type="checkbox" id={g.id} value={g.name} onClick={filtrarGenero} /> {g.name} </label>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default NavFilter;