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

  const [estadoAportePersona, setEstadoAportePersona] = useState(0); // 0 bien, 1 vacio, 2 repetido

  const conseguirEstadoAporte = () =>{
    switch (estadoAportePersona){
      case 1:
        return "No se aceptan nombres vacíos.";
      case 2:
        return "No se aceptan nombres repetidos.";
      default:
        return "";
        
    }
  }

  const incCantPersonasChange = (increment) => {
    let cambio = (increment) ? 1 : -1;
    let nuevoValor = cantPersonas + cambio;
    setCantPersonas(nuevoValor);
    let nuevoArray = aportePersonas.slice(0, nuevoValor);
    setAportePersonas(nuevoArray);

  };

  const handleCurrentMonto = (event) => {/*
    if (event.target.value.length === 0){
      setCurrentAportePersona((prev) => ({ ...prev, monto: 0 }))
    }else{
      const newValue = parseInt(event.target.value, 10);
      if (newValue >= -20000000 && newValue < 20000000) {
        setCurrentAportePersona((prev) => ({ ...prev, monto: newValue }));
      }
    }*/
    setCurrentAportePersona((prev) => ({ ...prev, monto: event.target.value }))
    
  };

  const handleCurrentNombre = (event) => {
    let nombre = event.target.value;
    if (nombre.length <= 20) {
      setCurrentAportePersona((prev) => ({ ...prev, nombre }));
    }
  };

  // Realiza la confirmacion final y además convierte todos los montos a number
  const handleConfirmacion = () => {
    if(inputEsValido()){
      setAportePersonas((prev) => {
        const newArray = [...prev];
        newArray[iterador] = currentAportePersona;
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] = {nombre:newArray[i].nombre, monto:Number(newArray[i].monto)};
          
        }
        aportePersonasRef.current = newArray; // Actualizar la referencia mutable
        return newArray;
      });
  
      setConfirmacionDatos(true);
    }
  };


  // Validaciones: nombre vacio y nombre repetido (solo cuando avanza)

  const inputEsValido = () => {
    

    if (currentAportePersona.nombre.length === 0) {
      setEstadoAportePersona(1);
      return false;
    } else if (aportePersonas.slice(0, iterador).filter((x)=> x.nombre === currentAportePersona.nombre).length > 0){
      setEstadoAportePersona(2);
      return false;
    }
    else{
      return true;
      
    }
  };

  // Esta funcion es para modificar el iterador. Valores:
  // (iterador = -1) definir cant personas,
  // (iterador = 0) muestra primera persona, (interador = aportepersonas.length - 1) muestra ultima persona

  const handleIteradorChange = (forward) => {
    if(iterador === -1 || !(forward && !inputEsValido())) {
      setEstadoAportePersona(0);
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
    }
    console.log(aportePersonas)

    
  };

  return iterador === -1 ? (

    <div className="h-75 w-75 mx-auto py-5 px-auto container-fluid" >

      <div className="row" >
        <div className="col-lg-6 stack-card-gray mx-auto" >
          <div className="card mt-5 mb-3 mx-auto text-center h2 w-100 p-2 " >
            <p >¿Cuántos son?</p>
          </div>
          <div className="card mb-5 mx-auto  text-center h2 w-100 p-2 container">
            <div className="row w-75 mx-auto my-2">
              <div className="col">
                <button disabled={cantPersonas === 2} className="btn btn-secondary btn-lg text-white fw-bold h-100" onClick={() => incCantPersonasChange(false)}>
                  -
                </button>
              </div>
              <div className="card fs-lg py-2 col text-center">{cantPersonas}</div>  {/*<input type="number" className="text-center mb-3 mb-lg" value={cantPersonas} onChange={handleCantPersonasChange} />*/}
              <div className="col">
                <button disabled={cantPersonas === 20} className="btn btn-secondary btn-lg text-white fw-bold h-100" onClick={() => incCantPersonasChange(true)}>
                  +
                </button>
              </div>

            </div>
            <div className="row w-75 mx-auto">
              <button className="btn btn-primary btn-sm fs-4" onClick={() => handleIteradorChange(true)}>
                Adelante
              </button>
            </div>


          </div>
        </div>

      </div>



    </div>
  ) : (
    <div className="h-75 w-75 mx-auto py-5 px-auto container-fluid ">


      <div className="row" >
        <div className="col-sm-9 py-2 mx-auto" style={{ width: "500px" }}>
          <div className="card mx-auto px-4 py-3 stack-card-gray">

            <label>Nombre:
              <input type="text" className={(estadoAportePersona === 0) ? "form-control" : "form-control is-invalid"}  placeholder="Nombre de ejemplo" value={currentAportePersona.nombre} onChange={handleCurrentNombre} />
            </label>

            <label>

            </label>
            Cuánto aportó:<input type="number" placeholder="0" className="form-control" value={currentAportePersona.monto} onChange={handleCurrentMonto} />
            <br />
            <button className="btn btn-secondary my-1" onClick={() => handleIteradorChange(false)}>
              Volver
            </button>
            {
              (iterador < cantPersonas - 1) ?
                <button className="btn btn-primary " onClick={() => handleIteradorChange(true)}>
                  Siguiente persona
                </button>
                :
                <button className="btn btn-warning " onClick={() => handleConfirmacion()}>
                  Finalizar
                </button>
            }
            <div className="text-danger fs-6 mb-0">
              {
                conseguirEstadoAporte()
              }
            </div>
          </div>
          
          


          <ListadoInputs listaPersonas={aportePersonas} cantPersonas={cantPersonas} iterador={iterador} />
          <div className="row" >
            <div className="col-sm-9 mx-auto " style={{ width: "500px" }}>
              <div className="card stack-card-gray mx-auto ">
                <button disabled={cantPersonas === 2 || iterador + 1 === cantPersonas} className=" my-1 mx-1 btn btn-secondary" onClick={() => incCantPersonasChange(false)}>
                  Quitar la última persona
                </button>
                <button disabled={cantPersonas === 20} className="mb-1 mx-1 btn btn-secondary" onClick={() => incCantPersonasChange(true)}>
                  Añadir otra persona
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
