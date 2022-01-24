import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import NavFilter from './navFilter';
import NavSort from './navSort';

import search from '../../img/Vector.png';
import filter from '../../img/Filter.png';
import ordenar from '../../img/Arrow.png';

const Nav = () => {

  const dispatch = useDispatch();
  const [FlagSort, setFlagSort] = useState(false);
  const [FlagFilter, setFlagFilter] = useState(false);

  return (
    <div>
      <h6>Peliculas </h6>
      <div className="nav" >
        <div className="nav__buscador">
          <input type="text" onChange={(e)=> dispatch({type : "UPDATE__SEARCH", payload : e.target.value}) } className="nav__buscador__input" />
          <input type="image" alt="search" src={search} className="nav__buscador__img" />
        </div>
        <div className="nav__filter" onClick={()=> setFlagFilter(!FlagFilter)}>
          <img src={filter} alt="" />
        </div>

        <div className='nav__sortContainer'  onClick={()=> setFlagSort(!FlagSort) } >
          <p className="nav__text" > Ordenar </p>
          <div className="nav__sort" >
            <img src={ordenar} alt="" />
          </div>
        </div>

        {FlagSort && <NavSort /> }
        {FlagFilter && <NavFilter /> }
      </div>
    </div>
  );
}

export default Nav;