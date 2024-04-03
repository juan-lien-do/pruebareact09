import {  useState } from 'react'
import UCInputData from './InputPersonas/UCInputData';
import UCOutputData from './OutputTransaccion/UCOutputData'
export default function UCRepartir(){
    const [cantPersonas, setCantPersonas] = useState(2); // cuantas personas son?
    const [iterador, setIterador] = useState(-1);
    const [aportePersonas, setAportePersonas] = useState([]); //array de objetos con nombre y aporte $
    const [confirmacionDatos, setConfirmacionDatos] = useState(false); // Cambiar de componente?
    const [superAportantes, setSuperAportantes] = useState([]); // array de personas que aportaron dinero extra
    const [deudores, setDeudores] = useState([]); // array de personas que aportaron menos dinero que el promedio

    


    return (confirmacionDatos) ? (<UCOutputData listaPersonas={aportePersonas} cantPersonas={cantPersonas}
        
        />) :
    (<UCInputData 
        cantPersonas={cantPersonas}
        setCantPersonas={setCantPersonas}
        aportePersonas={aportePersonas}
        setAportePersonas={setAportePersonas}
        iterador={iterador}
        setIterador={setIterador}
        setConfirmacionDatos={setConfirmacionDatos}/>);



}