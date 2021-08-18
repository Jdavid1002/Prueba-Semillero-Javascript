import React from 'react';
import { useSelector , useDispatch} from 'react-redux'


const NavFilter = () => {

    const movies = useSelector(state => state.results)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()


    const filtrarGenero = () => {
        const arraySeleccionedGenres = []

        for (let i = 0; i < genres.length; i++) {
            const element = genres[i];
            const validacion = document.getElementById(element.id).checked
            const elemento = document.getElementById(element.id)
            const objeto = {
                estado : validacion,
                elemento,
                id : element.id
            } 
            arraySeleccionedGenres.push(objeto)
        }

        const newGenres = arraySeleccionedGenres.filter(data => data.estado === true)
        const idGenres = newGenres.map(data => data.id)
        const newArray = []


        movies.forEach(element => {
            idGenres.forEach(id => {
                element.genre_ids.forEach(g => {
                    if(g === id){
                        newArray.push(element)
                    }
                })
            })
        });

        const ids = newArray.map(data => data.id)

        const unicos = ids.filter((valor, indice) => {
                return ids.indexOf(valor) === indice;
            }
        )

        const newMovies = []
        
        unicos.forEach(element => {
            const newMovie = movies.find(data => data.id === element)
            newMovies.push(newMovie)
        })


        dispatch({type : "@filtrarMovies" , resultsFilter: newMovies, filtros : "genres"})
    }


    return (
        <div>
            <div className="nav__filterMenu" >
                <h5> Genero </h5>
                {genres.map(g => 
                    <div key={g.id} >
                        <label> <input type="checkbox" id={g.id} value={g.name} onClick={()=> filtrarGenero(g)} /> {g.name} </label>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default NavFilter;