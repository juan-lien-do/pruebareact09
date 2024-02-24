import { useState, useRef } from "react";
import ListadoInputs from "../InputPersonas/ListadoInputs";
import ListadoPagos from "./ListadoPagos";
import DownloadPDFButton from "../emitirTransacciones/downloadPDFButton";

export default function UCOutputData({listaPersonas, cantPersonas}) {
    //const [promedio, setPromedio] = useState(0);
    //const promedioRef = useRef(promedio);
    let promedio;
    let arrayResponsabilidades = Array.from({length:cantPersonas}, (_, index) => ({nombre:listaPersonas[index].nombre}) );
    //const [arrayResponsabilidades, setArrayResponsabilidades] = useState(Array.from({length:{cantPersonas}}));
    //const arrayResponsabilidadesRef = useRef(arrayResponsabilidades);
    const [arrayPagos, setArrayPagos] = useState([]);
    const arrayPagosRef = useRef([]);
    const [mostrarPagos, setMostrarPagos] = useState(false);
    

    const generarPagos = () => {
        arrayPagosRef.current = [];
        // Generar promedio
            let prom = 0;
            for (let i = 0; i < listaPersonas.length; i++) {
                prom += listaPersonas[i].monto;
            }
            prom /= cantPersonas;
            promedio = prom;

        // Generar array con responsabilidades [{nombre:"carlos", responsabilidad:-2000}] carlos debe 2000 pesos.
        // Hay que restarle el promedio
            for (let i = 0; i < listaPersonas.length; i++) {
                arrayResponsabilidades[i].monto = listaPersonas[i].monto - promedio;
            }

        // Ordenar las responsabilidades para que los negativos estén al principio.
        arrayResponsabilidades.sort((a, b) => a.monto - b.monto);

        // Generar array con pagos
        // Recorrer todas las responsabilidades
            for (let i = 0; i < arrayResponsabilidades.length; i++) {
                if (arrayResponsabilidades[i].monto < 0){
                    // Arrancamos con el que más debe, ahora vamos a buscar los acreedores.
                    for (let j = arrayResponsabilidades.length - 1; j > 0; j--) {
                        if(arrayResponsabilidades[j].monto > 0){
                            // Ahora vamos a comparar los valores absolutos, para ver cuál es el límite de lo que podemos restar/sumar.
                            let valorTransaccion;
                            if (Math.abs(arrayResponsabilidades[i].monto) > arrayResponsabilidades[j].monto){
                                valorTransaccion = arrayResponsabilidades[j].monto;
                                // Generamos la transacción que describa esto
                                arrayPagosRef.current.push({origen:arrayResponsabilidades[i].nombre, destino:arrayResponsabilidades[j].nombre, monto:valorTransaccion});
                                // Y lo descontamos
                                arrayResponsabilidades[i].monto += valorTransaccion;
                                arrayResponsabilidades[j].monto -= valorTransaccion;

                            } else{
                                valorTransaccion = Math.abs(arrayResponsabilidades[i].monto);
                                arrayPagosRef.current.push({origen:arrayResponsabilidades[i].nombre, destino:arrayResponsabilidades[j].nombre, monto:valorTransaccion});
                                arrayResponsabilidades[i].monto += valorTransaccion;
                                arrayResponsabilidades[j].monto -= valorTransaccion;
                                break;
                            }
                            
                        }
                    }
                }
                // Si no hay más negativos entonces se terminó.
                else{
                    break;
                }
                
            }
            setArrayPagos(arrayPagosRef.current)
            setMostrarPagos(true);
    };


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col"></div>
                <div className="col-md-6">
                    <p>Datos confirmados</p>
                    <ListadoInputs listaPersonas={listaPersonas} cantPersonas={cantPersonas}></ListadoInputs>
                    <button className="button btn-primary mx-auto" onClick={()=>generarPagos()}>Generar pagos</button><br/>
                    {mostrarPagos ? <div> <ListadoPagos arrayPagos={arrayPagos}/>  <DownloadPDFButton></DownloadPDFButton> </div>  : ""

                    }
                </div>
                <div className="col"></div>
            </div>
            
            
        </div>
    );
}