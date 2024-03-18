import "./Home.css"

export function Home(){
    return(
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">Hola, <span className="fuente">ADRIAN</span></h2>
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
                                <p className="mt-4">MEDICO DE FAMILIA</p>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-12 col-md-2 mt-2">
                                <i className="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10">
                                <p className="mt-4">TIPO DE AFILIADO</p>
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