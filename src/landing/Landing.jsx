import React from 'react';
import { NavLink } from "react-router-dom";
import imagen from './pizza.svg';
import './Landing.css';  // Archivo de estilos CSS separado
import MovingBackground from "./movingBackground/MovingBackground.jsx"

export default function Landing() {
    return (
        <main className=''>
            <div className=" container-fluid my-5 position-relative" >
                <div className="position-absolute top-0 start-0 w-100 h-100" >
                    <MovingBackground />
                </div>
                <div id="contenido" className="render-above mx-auto align-items-center animacion-entrada" style={{width:'85%', zIndex:2, position:"relative"}}>
                    <div className="row align-items-center">
                        
                        <div className="col-md-6 px-4 pb-4">
                            <h1 className='card p-3 my-4 stack-shadow-primary'>¿Se te complica repartir los gastos de la salida con tus amigos después de pagar?</h1>
                            <h3 className='text-white'>Probá nuestra app web para repartir los gastos equitativamente {":)"} </h3>
                            <span className='px-5'>
                                <NavLink className="btn btn-primary btn-lg my-4 fs-3 fw-bold text-black mx-auto" to="/repartir/adelante/">
                                    Adelante
                                </NavLink>
                            </span>
                            
                        </div>
                        <div className="col-md-6 mb-3 mb-md-0 stack-card-primary">
                            <img className="img-fluid " src={imagen} alt="logo repartir" />
                        </div>
                    </div>
                </div>
                
            </div>
            <hr className='w-75 mx-auto my-5'></hr>
            <hr className='w-50 mx-auto my-5'></hr>
            <hr className='w-25 mx-auto my-5'></hr>
            <h3 className='h2 text-align-center text-center mt-5 mb-4'>¿Porqué usar nuestra app?</h3>
            <div className='container-fluid my-3 fondo-desplazado-light'>
                <div className='w-75 mx-auto'>
                    <div className='row w-80'>
                        <div className='col-md-4 my-2 '>
                            <div className='card stack-card-gray h-100'>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Comodidad</p>
                                <p className='mx-auto ms-4'> Olvidate de las complicaciones al dividir gastos. Nuestra aplicación web hace que el proceso sea tan sencillo como unos pocos clics. Ingresá los gastos, seleccioná los participantes y dejá que nuestra tecnología inteligente haga el resto. ¡La comodidad está a solo un clic de distancia!</p>
                            </div>
                        </div>
                        <div className='col-md-4 my-2'>
                            <div className='card bg-secondary text-white stack-card-gray h-100'>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Justicia</p>
                                <p className='mx-auto ms-4'> ¿Alguna vez sentiste que llevas la peor parte al dividir cuentas? Con nuestra aplicación, cada amigo paga exactamente lo que le corresponde, sin malentendidos ni disputas. ¡Garantizamos una distribución justa de los gastos!</p>
                            </div>
                        </div>
                        <div className='col-md-4 my-2 '>
                            <div className='card stack-card-gray h-100'>
                                <div className='shadow-sm bg-primary rounded'></div>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Accesibilidad</p>
                                <p className='mx-auto ms-4'> Nuestra web app es compatible con dispositivos móviles y de escritorio, lo que significa que podés gestionar tus gastos en cualquier momento y lugar. ¡No más excusas para no saldar cuentas de inmediato!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto my-5'></hr>
            <p className='h2 text-center my-3 underlined '>Reviews de usuarios </p>
            <div className='container-fluid mx-auto'>
                <div className='w-75 mx-auto my-5'>
                    <div className='row w-80'>
                        <div className='col-sm-1'></div>
                        <div className='col-md-5 mt-2 mb-4 stack-card-gray'>
                            <div className='card bg-dark text-light '>
                                <p className='mx-auto ms-4 mt-3 h5 fw-normal px-2'> Tremendo, muy buen servicio. Me gusta que se pueda descargar la página en pdf.</p>
                                <p className='mx-auto ms-4 mb-3 h5 px-2 fw-bold card bg-primary'>5/5⭐</p>
                            </div>
                            <div className='border border-dark border-top-0 bg-secondary rounded-bottom mx-auto me-2 ' style={{width:"30%"}}>
                                <p className='cinco-de-cinco text-center h4 text-white' >
                                    Denis
                                </p>
                            </div>
                            
                        </div>
                        <div className='col-md-5 mt-2 mb-4 stack-card-gray '>
                            <div className='card bg-dark text-light'>
                                <p className='mx-auto ms-4 mt-3 h5 fw-normal'> Está muy interesante el algoritmo, pasame el <a href='https://github.com/juan-lien-do/repartir' target='_blank'>repositorio</a>. </p>
                                <p className='mx-auto ms-4 mb-3 h5 px-2 fw-bold card bg-primary'>4.5/5⭐</p>
                            </div>
                            <div className='border border-dark border-top-0 bg-secondary rounded-bottom mx-auto me-2' style={{width:"30%"}}>
                                <p className='cuatro-de-cinco text-center h4 text-white '>
                                    Bruno
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </main>
    );
}
