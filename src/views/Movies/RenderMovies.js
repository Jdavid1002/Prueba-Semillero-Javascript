import React from 'react'
import { useSelector } from 'react-redux';

import Movie from './Movie';

const RenderMovies = () => {

  const results = useSelector(state => state.results);
  const genres = useSelector(state => state.genres);
  const search =  useSelector(state => state.search);
  const order =  useSelector(state => state.order);
  const checkboxList =  useSelector(state => state.checkboxList);

  const newSearch = search ? search : "";
  const newCheckboxList = checkboxList? checkboxList : [];


  const getGenres = (data) => {
    const idGenres = data.genre_ids;
    return idGenres.map(item => genres.find(data => data.id === item).name);
  };

  const getStars = (data) => {
    const score  = parseInt(data.vote_average / 2);

    let arrayStars = []
    for (let i = 0; i < score ; i++) {
        arrayStars.push(i)
    }
    return arrayStars
  }

  const getStarsNegative = (data) => {
    const score  = data.vote_average - 10
    const resta  = parseInt(score  * score  / 2)
    let arrayStars = []
    for (let i = 0; i < resta; i++) {
        arrayStars.push(i)
    }
    return arrayStars
  }

  const sortMovies = (a, b) => {
    if(order === "Ancient"){
      return parseInt(a.release_date.substr(0,4)) - parseInt(b.release_date.substr(0,4));
    }else if(order === "News"){
      return parseInt(b.release_date.substr(0,4)) - parseInt(a.release_date.substr(0,4));
    }else if(order === "10-0"){
      return parseFloat(b.vote_average) - parseFloat(a.vote_average);
    }else if(order === "0-10"){
      return parseFloat(a.vote_average) - parseFloat(b.vote_average);
    }
  }


  return (
    <div className="gridMovies" >
      {results &&
        results.filter((item) => item.title.toLowerCase().includes(newSearch.toLowerCase()))
        .filter(movie => {
          if(newCheckboxList.length > 0){
            return newCheckboxList.find(d => movie.genre_ids.some(i => i === d))
          }else{
            return movie
          }
        }).sort(sortMovies)
        .map(data =>
          <Movie
            data={data}
            key={data.id}
            getStars={getStars}
            getStarsNegative={getStarsNegative}
            getGenres={getGenres}
          />
        )}
    </div>
  );
}

export default RenderMovies;