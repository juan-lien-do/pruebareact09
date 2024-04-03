const ListadoInputs = ({listaPersonas, cantPersonas, iterador}) => {

    //<button onClick={()=>mostrarLista()}>debug</button>
    /*const mostrarLista = () => {
        console.log(listaPersonas);
    }*/
    // muestra 0 si el valor no esta definido
    const ceroDefault = (valor) => {
        if(!valor){
            return "0";
        }
        else return valor;
    }

    return (
        <div className="card my-2 px-4 py-2 stack-shadow-gray">
            <div className="table-responsive">
            
                <table className="table table-hover table-sm table-bordered table-striped ">
                    <thead className="thead-dark">
                        <tr>
                            <th> Nombre</th>
                            <th> Aporte</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.from({length:cantPersonas}, (_, index) => index).map(
                            (i) => (
                                <tr key={i} >
                                    <td className={iterador === i ? "bg-warning !important" : ""}>{listaPersonas[i]?.nombre}</td>
                                    <td className={iterador === i ? "bg-warning !important" : ""}>${ceroDefault(listaPersonas[i]?.monto)}</td>
                                </tr>
                            )
                        )
                        } 
                    </tbody>
                    
                </table>
            </div>
        </div>
        
    );
}

export default ListadoInputs