import React from 'react'
import Estrella from './Estrella';
import EstrellaNegativa from './EstrellaNegativa';


const Movie = ({data , cargarEstrellas , cargarEstrellasNegativas , cargarGeneros}) => {
    return (
        <div key={data.id} className="card-movies" >
            <h6> {data.title} ({data.release_date.substr(0,4)}) </h6>
            <div  className="flex-card-movies" >
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                <div>
                    <p className="text-card-movies" > {data.overview} </p>
                    <div className="container-card-text-movies" >
                        <p className="text-card-movies" > <span> Titulo: </span> {data.title} </p>
                        <div className="container-score" >
                            <p className="text-card-movies" > <span> Calificacion: </span> {data.vote_average} </p>
                            <div className="container-stars" >
                                {cargarEstrellas(data).map(dato => <Estrella   key={Math.random()} data={dato} /> )}
                                {cargarEstrellasNegativas(data).map(dato => <EstrellaNegativa  key={Math.random()} data={dato} /> )}
                            </div>
                        </div>
                        <p className="text-card-movies" > <span> Genero: </span>  {cargarGeneros(data).map(data =>  `${data} - ` ) } </p>
                        <p className="text-card-movies" > <span> Fecha de Realización:  </span> {data.release_date}  </p>
                    </div>
                </div>
            </div>
        </div>  
    );
}
 
export default Movie;