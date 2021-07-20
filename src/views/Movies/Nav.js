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
            const res = movies.find(data => data.title.toUpperCase() === Busqueda.toUpperCase())
            if(res){
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

    const agregarInterfazOrdenar = () => {
        if(Validacion){
            setValidacion(false)
        }else{
            setValidacion(true)
        }
    }

    const agregarInterfazGenero = () => {
        if(ValidacionGenero){
            setValidacionGenero(false)
        }else{
            setValidacionGenero(true)
        }
    }

    const filtrarGenero = () => {
        let arrayNewsMovies = []
        let arraySeleccionedGenres = []

        for (let i = 0; i < genres.length; i++) {
            const element = genres[i];
            const validacion = document.getElementById(element.id).checked
            if(validacion){
                arraySeleccionedGenres.push(element)
            }
        }

        for (let i = 0; i < movies.length; i++) {
            const element = movies[i]
            arraySeleccionedGenres.forEach(datos => {
                const  filtro = element.genre_ids.filter(genero => genero === datos.id)
                if(filtro.length > 0){
                    arrayNewsMovies.push(element)
                }
            })
        }

        const newArray = []
        arrayNewsMovies.forEach(element => {
            if(!newArray.find(data => data.id === element.id)){
                newArray.push(element)
            }
        })

        dispatch({type : "@cargarFiltros" , filtros : `generos ${Math.random()}` , movies : newArray})
    }

    return (
        <div>
            <h6>Peliculas </h6>
            <div className="container-search" >
                <div className="buscador">
                    <form onSubmit={busquedaDePelicula} >
                        <input type="text" onChange={(e)=> setBusqueda(e.target.value) } className="buscar" />
                        <input type="image" alt="search" src={search} className="image-buscar" />
                    </form>
                </div>
                <div className="container-filter pointer" onClick={agregarInterfazGenero}  >
                    <img src={filter} alt="" />
                </div>
        
                <p> Ordenar </p>

                <div  className="container-ordenar" onClick={agregarInterfazOrdenar}  >
                    <img src={ordenar} alt="" />
                </div>
                {Validacion ?
                    <div className="container-ordenar-menu" >
                        <div className="options-menu-ordenar" >  
                            <h5> Fecha </h5>
                            <p  className="options-pointer-ordenar" onClick={()=> Ordenar(2) } > Nuevas - Antiguas </p>
                            <p  className="options-pointer-ordenar" onClick={()=> Ordenar(1) } > Antiguas - Nuevas </p>
                        </div>
                        <div  className="options-menu-ordenar" >     
                            <h5> Calificación </h5>
                            <p className="options-pointer-ordenar" onClick={()=> Ordenar(3) } > 0 - 10 puntos </p>
                            <p className="options-pointer-ordenar" onClick={()=> Ordenar(4) } > 10 - 0 puntos </p>
                        </div>
                    </div>
                :null}

                {ValidacionGenero ?
                    <div className="container-filtrar-menu" >
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