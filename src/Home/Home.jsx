import "./Home.css"
import basedatos from "../utils/basedatos.json"

export function Home(){

    console.log(basedatos[0])

    return(  //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-7 me-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">Hola, <span className="fuente">{basedatos[0].nombreUsuario}</span></h2>
                        <p className="text-muted">Realiza fácilmente tus procesos con EPS SURA. <br />
                        ¡Conoce aquí las soluciones virtuales que tenemos especialmente para ti!</p>
                    </div>
                    <div className="col-12 col-md-5 ">
                        <select className="form-select shadow" aria-label="Default select example">
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
                                <h6>{basedatos[0].medicoDeFamilia}</h6>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                                <i className="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4 mb-1">GRUPO DE INGRESO</p>
                                <h6 className="mb-1" > COTIZANTE</h6>
                                <h6 className="mb-1">{basedatos[0].grupoDeIngreso}</h6>
                                <h6 className="fuente">Ver mas</h6>
                            </div>
                       </div>
                       {/* <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                       <i className="bi bi-suitcase-lg fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4 mb-1">ESTADO DE AFILIACION</p>
                                <h6 className="">TIENE DERECHO A COBERTURA INTEGRAL</h6>
                            </div>
                       </div> */}
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                       <i className="bi bi-hospital fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4 mb-1">IPS ACTUAL</p>
                                <div className="row">
                                    <i className="bi bi-info-circle-fill col-1 fuente"></i>
                                    <h6 className="col-11">{basedatos[0].ips}</h6>
                                </div>
                            </div>
                       </div>                      

                    </div>
                </div>
            </section>

            <hr />            
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>{basedatos[0].nombreUsuario}, estas son tus proximas citas:</h5>                        
                    </div>
                </div>
            </section>
           <section className="container my-5">
                       <div className="row row-cols-1 row-cols-md-3">
                            {
                                basedatos[11].citasMedicas.map(function(cita){
                                    return(
                                        // eslint-disable-next-line react/jsx-key
                                        <div className="col mb-3">
                                            <div className="card h-100 shadow px-2">
                                                <h3>{cita.especialidad}</h3>
                                                <h4>Fecha: {cita.fecha}</h4>
                                                <h4>{cita.direccion}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       </div>
           </section>
        </>
    )
}