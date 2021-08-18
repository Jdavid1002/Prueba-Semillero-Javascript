import React,{useState} from 'react'
import search from '../../img/Vector.png'
import filter from '../../img/Filter.png'
import ordenar from '../../img/Arrow.png'
import Swal from 'sweetalert2'
import { useSelector , useDispatch} from 'react-redux'

const Nav = () => {

    const movies = useSelector(state => state.results)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()

    const [Validacion, setValidacion] = useState(false)
    const [ValidacionGenero, setValidacionGenero] = useState(false)
    const [Busqueda, setBusqueda] = useState("")

    const busquedaDePelicula = (e) => {
        e.preventDefault()
        if(Busqueda !== ""){
            const res = movies.filter(data => data.title.substr(0,Busqueda.length).toUpperCase() === Busqueda.toUpperCase())
            if(res.length >0){
                dispatch({type : "@cargarBusqueda" , movie : res})
            }else{
                dispatch({type : "@cargarBusqueda" , movie : {}})
                Swal.fire({
                    icon : "error",
                    title :"No se encontró ningún resultado"
                })
            }
        }else{
            Swal.fire({
                icon : "warning",
                title : "Campos Vacios",
                text : "Recuerda llenar el campo correctamente."
            })
        }
    }


    const Ordenar = (number) => {
        if(number === 1){
            movies.sort(( a, b )=> 
                parseInt(a.release_date.substr(0,4)) - parseInt(b.release_date.substr(0,4))
            );
            dispatch({type : "@cargarFiltros" , filtros : "AntiguasNuevas" , movies : movies})
            setValidacion(false)

        }else if(number === 2){
            movies.sort(( a, b )=> 
                parseInt(b.release_date.substr(0,4)) - parseInt(a.release_date.substr(0,4))
            );
            dispatch({type : "@cargarFiltros" , filtros : "NuevasAntiguas" , movies : movies})
            setValidacion(false)

        }else if(number === 3){
            movies.sort((a, b) => 
                parseFloat(a.vote_average) - parseFloat(b.vote_average)
            )
            dispatch({type : "@cargarFiltros" , filtros : "0-10" , movies : movies})
            setValidacion(false)

        }else if(number === 4){
            movies.sort((a, b) => 
                parseFloat(b.vote_average) - parseFloat(a.vote_average)
            )
            dispatch({type : "@cargarFiltros" , filtros : "10-0" , movies : movies})
            setValidacion(false)

        }else {
            return number
        }
    }

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
            <h6>Peliculas </h6>
            <div className="nav" >
                <div className="nav__buscador">
                    <form onSubmit={busquedaDePelicula} >
                        <input type="text" onChange={(e)=> setBusqueda(e.target.value) } className="nav__buscador__input" />
                        <input type="image" alt="search" src={search} className="nav__buscador__img" />
                    </form>
                </div>
                <div className="nav__filter" onClick={()=> ValidacionGenero ? setValidacionGenero(false) : setValidacionGenero(true) }  >
                    <img src={filter} alt="" />
                </div>
        
                <p className="nav__text" > Ordenar </p>

                <div  className="nav__sort" onClick={()=> Validacion? setValidacion(false) : setValidacion(true) }  >
                    <img src={ordenar} alt="" />
                </div>

                {Validacion ?
                    <div className="nav__sortMenu" >
                        <div className="nav__sortMenu__container" >  
                            <h5> Fecha </h5>
                            <p  className="nav__sortMenu__container__options" onClick={()=> Ordenar(2) } > Nuevas - Antiguas </p>
                            <p  className="nav__sortMenu__container__options" onClick={()=> Ordenar(1) } > Antiguas - Nuevas </p>
                        </div>
                        <div  className="nav__sortMenu__container" >     
                            <h5> Calificación </h5>
                            <p className="nav__sortMenu__container__options" onClick={()=> Ordenar(3) } > 0 - 10 puntos </p>
                            <p className="nav__sortMenu__container__options" onClick={()=> Ordenar(4) } > 10 - 0 puntos </p>
                        </div>
                    </div>
                :null}

                {ValidacionGenero ?
                    <div className="nav__filterMenu" >
                        <h5> Genero </h5>
                        {genres.map(g => 
                            <div key={g.id} >
                                <label> <input type="checkbox" id={g.id} value={g.name} onClick={()=> filtrarGenero(g)} /> {g.name} </label>
                            </div>
                        )}
                    </div>
                :null}
            </div>

        </div>
    );
}


 
export default Nav;