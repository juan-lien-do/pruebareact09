export default function Footer () {
    return(
        <footer className=" bg-dark">
            <hr></hr>
            <div className="container py-4 py-md-5 px-4 px-md-3">
                <div className="row">
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3 text-primary">
                        <h5>Informacion</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Contacto</a></li>
                            <li className="mb-2"><a href="#">Donar</a></li>
                            <li className="mb-2"><a href="#">Preguntas frecuentes{" (FAQ)"}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}