import React from 'react';
import {useDispatch} from 'react-redux';

const NavSort = () => {

  const dispatch = useDispatch();

  const sendDispatch = (type, payload) => dispatch({
    type,
    payload
  });

  return (
    <div className="nav__sortMenu" >
      <div className="nav__sortMenu__container" >
        <h5> Fecha </h5>
        <p  className="nav__sortMenu__container__options" onClick={()=> sendDispatch("UPDATE__ORDER", "News" ) } > Nuevas - Antiguas </p>
        <p  className="nav__sortMenu__container__options" onClick={()=> sendDispatch("UPDATE__ORDER", "Ancient" ) } > Antiguas - Nuevas </p>
      </div>
      <div  className="nav__sortMenu__container" >
        <h5> Calificación </h5>
        <p className="nav__sortMenu__container__options" onClick={()=> sendDispatch("UPDATE__ORDER", "0-10") } > 0 - 10 puntos </p>
        <p className="nav__sortMenu__container__options" onClick={()=> sendDispatch("UPDATE__ORDER", "10-0") } > 10 - 0 puntos </p>
      </div>
    </div>
  );
};

export default NavSort;