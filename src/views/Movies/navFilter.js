import React from 'react';
import { useSelector , useDispatch} from 'react-redux';

const NavFilter = () => {

  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres);
  const checkboxList = useSelector(state => state.checkboxList);

  const filtrarGenero = () => {
    const arraySeleccionedGenres = genres.map((item) => {
      const element = document.getElementById(item.id)
      return {
        state : element.checked,
        id :item.id
      }
    });

    dispatch({
      type : "UPDATE__CHECKBOX__LIST",
      payload : arraySeleccionedGenres.filter(data => data.state).map(item => item.id)
    });
  };

  return (
    <div className="nav__filterMenu">
      <h5> Genero </h5>
      {genres.map(g =>
        <div key={g.id} >
          <label> <input checked={checkboxList ? checkboxList.includes(g.id): false } type="checkbox" id={g.id} onClick={filtrarGenero} /> {g.name} </label>
        </div>
      )}
    </div>
  );
};

export default NavFilter;