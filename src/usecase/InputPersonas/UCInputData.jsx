import { useState } from "react";

export default function UCInputData({cantPersonas, setCantPersonas, aportePersonas, setAportePersonas, iterador, setIterador}) {
    

    const handleCantPersonasChange = (event) => {
        const newValue = parseInt(event.target.value, 10)
        if( newValue > 0 && newValue <= 20){
            setCantPersonas(event.target.value);
            let nuevoArray = aportePersonas;
            nuevoArray.length = event.target.value;
            setAportePersonas(nuevoArray);
        }

        
      };

    const handleIteradorChange = (forward) =>{
        console.log(forward == true);
        if (forward && iterador < (cantPersonas - 1) ){
            setIterador(iterador + 1);
        }
        else if (!forward && iterador > -1 ){
            setIterador(iterador - 1);
        }
    }

    return (iterador == -1) ? (
        <div className="h-75">
            <p className="card ">¿Cuantos son?</p>
            <input type="number" value={cantPersonas} onChange={handleCantPersonasChange} />
            <br/>
            <button className="btn card" onClick={handleIteradorChange}>aaa</button>
        </div>
    ) : (<p>a</p>);


    
}