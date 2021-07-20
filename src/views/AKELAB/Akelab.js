import React,{useState} from 'react'
import Swal from 'sweetalert2'
import '../../css/Akelab.css'

const Akelab = () => {

    const [number, setnumber] = useState(0)
    const [arrayNumbersState, setarrayNumbersState] = useState([])

    const validarNumero = (e) => {
        e.preventDefault()
        if( parseInt(number) > 0 ){
            let arrayNumbers = []
            for (let i = 1; i <= parseInt(number); i++) {
                if( i % 5 === 0  && i % 3 === 0){
                    let datos = {type : "AKELAB", id : arrayNumbers.length +1}
                    arrayNumbers.push(datos)
                }else if(i % 5 === 0 ){
                    let datos = {type : "LAB", id : arrayNumbers.length +1}
                    arrayNumbers.push(datos)
                }else if (i % 3 === 0 ) {
                    let datos = {type : "AKE", id : arrayNumbers.length +1}
                    arrayNumbers.push(datos)
                }else{
                    let datos = {type : i, id : arrayNumbers.length +1}
                    arrayNumbers.push(datos)
                }
                setarrayNumbersState(arrayNumbers)
            }


        }else{
            Swal.fire({
                icon : "error",
                title : "Campos Invalidos",
                text : "Recuerda colocar un número mayor a cero"
            })
        }
    }

    return (
        <div>
            <div className="container-arrow" >
                <div className="dad-arrow"  onClick={() => window.location.replace("/") } >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
            </div>

            <div  className="dad-form-akelab" >
                <form onSubmit={validarNumero} >
                    <input  onChange={(e)=> setnumber(e.target.value) } className="form-control" type="number" placeholder="1" />
                    <div className="dad-btn" >
                        <button className="btn-akelab btn-form-akelab" type="submit" > Enviar </button>
                    </div>
                </form>
            </div>

            <div className="grid-numbers" >
                {arrayNumbersState.map(data => 
                    <div className="container-number" key={data.id} >
                        <h4> {data.type} </h4>
                    </div> 
                )}
            </div>
        </div>
    );
}
 
export default Akelab;