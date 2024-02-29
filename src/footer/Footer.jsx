export default function Footer () {
    return(
        <footer className="bg-dark" style={{position:"absolute", bottom:0, width:"100%"}}>
            <hr></hr>
            <div className="container py-4 py-md-5 px-4 px-md-3 ">
                    <div className="col-6 mb-3 text-primary  mx-auto">
                        <h5>Informacion</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://www.linkedin.com/in/juanestebanliendo/" target="_blank">Contacto</a></li>
                            <li className="mb-2"><a href="#">Donar</a></li>
                            <li className="mb-2"><a href="#">Preguntas frecuentes{" (FAQ)"}</a></li>
                        </ul>
                    </div>
            </div>
        </footer>
    );
}