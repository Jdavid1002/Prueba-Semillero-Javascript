import React,{useState} from 'react'
import Swal from 'sweetalert2'
import '../../css/Fibonacci.css'

const Fibonacci = () => {

    const [number, setnumber] = useState(0)
    const [arrayNumbersState, setarrayNumbersState] = useState([])

    const validarNumero = (e) => {
        e.preventDefault()
        if( parseInt(number) > 0 ){
            let n1 = 0, n2 = 1, nextTerm, arrayNumbers = [];
            for (let i = 1; i <= number; i++) {
                arrayNumbers.push(n1)
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
            }
            setarrayNumbersState(arrayNumbers)
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
            <div  className="dad-form" >
                <form onSubmit={validarNumero} >
                    <input  onChange={(e)=> setnumber(e.target.value) } className="form-control" type="number" placeholder="1" />
                    <div className="dad-btn" >
                        <button className="btn btn-form-fibonacci" type="submit" > Enviar </button>
                    </div>
                </form>
            </div>
            <div className="grid-numbers" >
                {arrayNumbersState.map(data => 
                    <div className="container-number" key={ data === 1? Math.random() : data } >
                        <h4> {data} </h4>
                    </div>    
                )}
            </div>

        </div>
    );
}
 
export default Fibonacci;