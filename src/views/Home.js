import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="dad-grid" >
        <div className="grid" >
          <div className="grid-child pointer" onClick={()=> window.location.replace("/Fibonacci") }  >
            <h4 className="text-center " > Fibonacci </h4>
          </div>
          <div className="grid-child pointer" onClick={()=> window.location.replace("/AKELAB") }  >
            <h4 className="text-center " > Secuencia AKELAB </h4>
          </div>
          <div className="grid-child pointer" onClick={()=> window.location.replace("/Movies") } >
            <h4 className="text-center " > App de Peliculas </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;