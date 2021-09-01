import React,{useState} from 'react'
import search from '../../img/Vector.png'
import filter from '../../img/Filter.png'
import ordenar from '../../img/Arrow.png'
import Swal from 'sweetalert2'
import { useSelector , useDispatch} from 'react-redux'
import NavFilter from './navFilter'
import NavSort from './navSort'

const Nav = () => {

    const movies = useSelector(state => state.results)
    const dispatch = useDispatch()

    const [Validacion, setValidacion] = useState(false)
    const [ValidacionGenero, setValidacionGenero] = useState(false)
    const [Busqueda, setBusqueda] = useState("")

    
    const busquedaDePelicula = (e) => {
        e.preventDefault()
        if(Busqueda !== ""){
            const res = movies.filter(data => data.title.substr(0,Busqueda.length).toUpperCase() === Busqueda.toUpperCase())

            if(res.length >0){
                dispatch({type : "@cargarBusqueda" , movies : res})
            }else{
                dispatch({type : "@cargarBusqueda" , movies : []})
                Swal.fire({
                    icon : "error",
                    title :"No se encontró ningún resultado"
                })
            }
        }else{
            dispatch({type : "@cargarBusqueda" , movies : []})
        }
    }


    const busquedaDePeliculaChange = (texto) => {
        setBusqueda(texto)
        if(texto!== ""){
            const res = movies.filter(data => data.title.substr(0,texto.length).toUpperCase() === texto.toUpperCase())
            if(res.length >0){
                dispatch({type : "@cargarBusqueda" , movies : res})
            }else{
                dispatch({type : "@cargarBusqueda" , movies : []})
                Swal.fire({
                    icon : "error",
                    title :"No se encontró ningún resultado"
                })
            }
        }else{
            dispatch({type : "@cargarBusqueda" , movies : []})
        }
    }



    return (
        <div>
            <h6>Peliculas </h6>
            <div className="nav" >
                <div className="nav__buscador">
                    <form onSubmit={busquedaDePelicula} >
                        <input type="text" onChange={(e)=> busquedaDePeliculaChange(e.target.value) } className="nav__buscador__input" />
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

                {Validacion ? <NavSort /> :null}

                {ValidacionGenero ? <NavFilter /> :null}
            </div>

        </div>
    );
}


 
export default Nav;