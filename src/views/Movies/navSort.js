import React from 'react';
import { useSelector , useDispatch} from 'react-redux'

const NavSort = () => {
    
    const movies = useSelector(state => state.results)
    const dispatch = useDispatch()


    const Ordenar = (number) => {
        if(number === 1){
            movies.sort(( a, b )=> 
                parseInt(a.release_date.substr(0,4)) - parseInt(b.release_date.substr(0,4))
            );
            dispatch({type : "@cargarFiltros" , filtros : "AntiguasNuevas" , movies : movies})

        }else if(number === 2){
            movies.sort(( a, b )=> 
                parseInt(b.release_date.substr(0,4)) - parseInt(a.release_date.substr(0,4))
            );
            dispatch({type : "@cargarFiltros" , filtros : "NuevasAntiguas" , movies : movies})

        }else if(number === 3){
            movies.sort((a, b) => 
                parseFloat(a.vote_average) - parseFloat(b.vote_average)
            )
            dispatch({type : "@cargarFiltros" , filtros : "0-10" , movies : movies})

        }else if(number === 4){
            movies.sort((a, b) => 
                parseFloat(b.vote_average) - parseFloat(a.vote_average)
            )
            dispatch({type : "@cargarFiltros" , filtros : "10-0" , movies : movies})
        }else {
            return number
        }
    }



    return (
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
    );
}
 
export default NavSort;