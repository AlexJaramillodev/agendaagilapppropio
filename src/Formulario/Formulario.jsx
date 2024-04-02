import "./Formulario.css"
import { useNavigate } from "react-router-dom"

import { useState } from "react"

export function Formulario (){

    //una almacena, modifica
    //la otra para verlo

    const [verCedula, guardarCedula] = useState("")
    const [verContraseña, guardarContraseña] = useState("")

    // para navegar entre componentes debo declara una variable que almacene el hook

    let enrutador = useNavigate()

    function procesarFormulario (evento){

        //que hago si le hacen clic al boton
        evento.preventDefault()
        
        //voy a enrutar otro componenete(como lanzo un componente desde otro componenete) que renderice la otra pagina.
        enrutador("/home")
    }


    return(
        <>
            <section className="container ">
                 <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="../../src/assets/sura.png" alt="logo sura" />
                        <form className="border rounded p-4 mb-5" onSubmit={procesarFormulario} >
                            <h2>Controla tu salud</h2>
                                <div className="input-group mb-3 mt-5">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-vcard-fill"></i></span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Numero de Cedula"
                                        id="identificacion"
                                        onChange={function(evento){guardarCedula(evento.target.value)}}
                                        />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        id="contraseña"
                                        onChange={function(evento){guardarContraseña(evento.target.value)}}
                                        />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
                        </form>
                    </div>
                </div>
            </section>
        
        </>



    )
}