import React, { useState, useRef } from "react";
import ListadoInputs from "./ListadoInputs";

export default function UCInputData({
  cantPersonas,
  setCantPersonas,
  aportePersonas,
  setAportePersonas,
  iterador,
  setIterador,
  setConfirmacionDatos,
}) {
  const [currentAportePersona, setCurrentAportePersona] = useState({
    nombre: "",
    monto: 0,
  });

  const aportePersonasRef = useRef(aportePersonas);

  const handleCantPersonasChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 0 && newValue <= 100) {
      setCantPersonas(event.target.value);
      let nuevoArray = aportePersonas.slice(0, newValue);
      setAportePersonas(nuevoArray);
    } else if (event.target.value === "") {
      setCantPersonas(0);
    }
  };

  const handleCurrentMonto = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= -20000000 && newValue < 20000000) {
      setCurrentAportePersona((prev) => ({ ...prev, monto: newValue }));
    }
  };

  const handleCurrentNombre = (event) => {
    let nombre = event.target.value;
    if (nombre.length >= 0) {
      setCurrentAportePersona((prev) => ({ ...prev, nombre }));
    }
  };

  const handleConfirmacion = () => {
    console.log("Debugging");
  
    setAportePersonas((prev) => {
      const newArray = [...prev];
      newArray[iterador] = currentAportePersona;
      aportePersonasRef.current = newArray; // Actualizar la referencia mutable
      return newArray;
    });
  
    // Validaciones
    let flagVacio = false;
    let flagRepetido = false;
  
    const tempArray = aportePersonasRef.current;
    for (let i = 0; i < tempArray.length; i++) {
      // Comprobar si no le falta el nombre a nadie
      if (tempArray[i].nombre.length === 0) {
        flagVacio = true;
        break;
      }
      // Probar todas las combinaciones
      for (let j = 0; j < tempArray.length; j++) {
        // Comprobar si no hay dos nombres repetidos
        if (i !== j && tempArray[i].nombre.toUpperCase() === tempArray[j].nombre.toUpperCase()) {
          flagRepetido = true;
          break;
        }
      }
    }
  
    if (flagVacio) {
      alert("Uno de los nombres está vacío.");
    } else if (flagRepetido) {
      alert("Hay nombres repetidos.");
    } else {
      setConfirmacionDatos(true);
    }
  };


  // Esta funcion es para modificar el iterador desde botones. desde que se ingresa la cantidad de personas (iterador = -1),
  // cuando se ingresa la primera persona (iterador = 0) y hasta que se ingresa la ultima (interador = aportepersonas.length - 1).
  // Esta variable indica si tiene que renderizar el input de cantPersonas. En caso contrario va a mostrar los datos de una persona en el array,
  // se va a encargar de instanciar los valores de esa persona y guardar los de la anterior.

  const handleIteradorChange = (forward) => {
    
    if (!forward && iterador === 0) {
        setAportePersonas((prev) => {
          const newArray = [...prev];
          newArray[iterador] = currentAportePersona || { nombre: "", monto: 0 };
          return newArray;
        });
        setIterador(-1);
        setCurrentAportePersona({ nombre: "", monto: 0 });
        
      } else if (forward && iterador < cantPersonas - 1) {
        setAportePersonas((prev) => {
          const newArray = [...prev];
          newArray[iterador] = currentAportePersona;
          return newArray;
        });
        setIterador(iterador + 1);
        setCurrentAportePersona(aportePersonas[iterador + 1] || { nombre: "", monto: 0 });
      } else if (!forward && iterador > 0) {
        setAportePersonas((prev) => {
          const newArray = [...prev];
          newArray[iterador] = currentAportePersona;
          return newArray;
        });
        setIterador(iterador - 1);
        setCurrentAportePersona(aportePersonas[iterador - 1] || { nombre: "", monto: 0 });
      }
  };

  return iterador === -1 ? (
    
    <div className="h-75 w-75 mx-auto py-5 px-auto container-fluid" >
        <div className="row" >
            <div className="col"></div>
            <div className="col" style={{width:"400px"}}>
                <div className="card mt-5 mb-3 mx-auto text-center h2 w-100 p-2 " >
                    <p >¿Cuantos son?</p>
                </div>
                <div className="card mb-5 mx-auto  text-center h2 w-100 p-2">
                    <input type="number" className="text-center mb-3" value={cantPersonas} onChange={handleCantPersonasChange} />
                    
                    <button className="btn btn-primary fs-4" onClick={() => handleIteradorChange(true)}>
                        Adelante
                    </button>
                </div>
            </div>
            
            <div className="col"></div>
        </div>
        
      
      
    </div>
  ) : (
    <div className="h-75 w-75 mx-auto py-5 px-auto container-fluid">
      <div className="row" >
        <div className="col"></div>
        <div className="col py-2" style={{width:"400px"}}>
          <div className="card mx-auto px-4 py-3">
            Nombre:<input type="text" placeholder="Nombre" value={currentAportePersona.nombre} onChange={handleCurrentNombre} />
            <br />
            Cuánto aportó:<input type="number" value={currentAportePersona.monto} onChange={handleCurrentMonto} />
            <br/>
            <button className="btn card bg-secondary my-1" onClick={() => handleIteradorChange(false)}>
              Volver
            </button>
            {
              (iterador < cantPersonas - 1) ?
                  <button className="btn card bg-primary" onClick={() => handleIteradorChange(true)}>
                  Adelante
                  </button>
              : 
                  <button className="btn card bg-warning" onClick={() => handleConfirmacion()}>
                  Finalizar
                  </button>
            }
          </div>
          
          
        <ListadoInputs listaPersonas={aportePersonas} cantPersonas={cantPersonas} iterador={iterador}/>  
        </div>
        <div className="col"></div>
        
      </div>
      
    </div>
  );
}
