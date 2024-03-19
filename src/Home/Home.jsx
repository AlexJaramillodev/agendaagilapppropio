import "./Home.css"
import { inventario } from "../utils/medicamentos";

export function Home(){

//zona de manipulacion de datos
    let nombrePaciente = "adrian jaramillo";
    let sedePaciente = "Suramericana";
    let nombreEspecialista = "Jorge Gonzalez"
    console.log(inventario)

    // a los arreglos los puedo manipular para controlar que informacion voy a presentar

    //1.funcion de filtrado de datos
    //condicion de filtrado(pregunta (si/no))
    
    let resultado = inventario.filter(function(auxiliar){
        return(auxiliar.nombre == "acetaminofen") //condicion de filtrado
    })
    console.log(resultado)

    return(  //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">Hola, <span className="fuente">{nombrePaciente}</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum amet dolore. Assumenda quos reprehenderit quis illum sed iste quibusdam ducimus ad soluta. Optio, dolores. Dolor tempora beatae perferendis animi eum deserunt molestiae a alias, reiciendis mollitia provident fugit voluptatum! Labore eveniet vitae sed dolorum doloribus saepe id officiis voluptates?</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Tu grupo familiar</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        
                       <div className="row">
                            <div className="col-12 col-md-2 mt-2">
                            <i className="bi bi-person-badge fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4 mb-1">MEDICO DE FAMILIA</p>
                                <h6>{nombreEspecialista}</h6>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                                <i className="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4 mb-1">TIPO DE AFILIADO</p>
                                <h6 className="mb-1" > COTIZANTE</h6>
                                <h6 className="mb-1">GRUPO DE INGRESOS: B</h6>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                       <i className="bi bi-suitcase-lg fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4">ESTADO DE AFILIACION</p>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                       <i className="bi bi-hospital fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4">IPS ACTUAL</p>
                            </div>
                       </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}