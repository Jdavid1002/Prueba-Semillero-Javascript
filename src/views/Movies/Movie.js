import React from 'react'
import Estrella from './Estrella';
import EstrellaNegativa from './EstrellaNegativa';


const Movie = ({data , cargarEstrellas , cargarEstrellasNegativas , cargarGeneros}) => {
    return (
        <div key={data.id} className="cardMovies" >
            <h6> {data.title} ({data.release_date.substr(0,4)}) </h6>
            <div className="cardMovies__containerFlex" >
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                <div>
                    <p className="cardMovies__containerFlex__text" > {data.overview} </p>

                    <div className="cardMovies__containerFlex__features" >

                        <p className="cardMovies__containerFlex__text" > <span> Titulo: </span> {data.title} </p>

                        <div className="cardMovies__containerFlex__features__flexStart" >
                            <p className="cardMovies__containerFlex__text--features" > <span> Calificacion: </span> {data.vote_average} </p>

                            <div className="cardMovies__containerFlex__features__flexStart" >
                                {cargarEstrellas(data).map(dato => <Estrella   key={Math.random()} data={dato} /> )}
                                {cargarEstrellasNegativas(data).map(dato => <EstrellaNegativa  key={Math.random()} data={dato} /> )}
                            </div>
                        </div>

                        <p className="cardMovies__containerFlex__text " > <span> Genero: </span>  
                        {cargarGeneros(data).map(data =>  `${data} - ` ) } </p>
                        <p className="cardMovies__containerFlex__text " > <span> Fecha de Realización:  </span> {data.release_date}  </p>
                    </div>

                </div>
            </div>
        </div>  
    );
}
 
export default Movie;