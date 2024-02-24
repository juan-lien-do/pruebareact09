const ListadoInputs = ({listaPersonas, cantPersonas, iterador}) => {

    //<button onClick={()=>mostrarLista()}>debug</button>
    const mostrarLista = () => {
        console.log(listaPersonas);
    }

    return (
        <div className="table-responsive">
            
            <table className="table table-hover table-sm table-bordered table-striped">
                <thead>
                    <th> Nombre</th>
                    <th> Aporte</th>
                </thead>
                <tbody>
                   {Array.from({length:cantPersonas}, (_, index) => index).map(
                        (i) => (
                            <tr key={i} className={iterador === i ? "bg-warning" : ""}>
                                <td >{listaPersonas[i]?.nombre}</td>
                                <td >${listaPersonas[i]?.monto}</td>
                            </tr>
                        )
                    )
                    } 
                </tbody>
                
            </table>
        </div>
    );
}

export default ListadoInputs