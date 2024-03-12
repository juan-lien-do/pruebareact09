import React from 'react';
import { NavLink } from "react-router-dom";
import imagen from './logov2_720_transparent.png';
import './Landing.css';  // Archivo de estilos CSS separado
import MovingBackground from "./movingBackground/MovingBackground.jsx"

export default function Landing() {
    return (
        <main className=''>
            <div className=" container-fluid my-5 position-relative" >
                <div className="position-absolute top-0 start-0 w-100 h-100" >
                    <MovingBackground />
                </div>
                <div id="contenido" className="render-above mx-auto align-items-center " style={{width:'85%', zIndex:2, position:"relative"}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <img className="img-fluid " src={imagen} alt="imagen de ejemplo" />
                        </div>
                        <div className="col-md-6 p-4">
                            <h1 className='card p-3 my-4 stack-shadow-primary'>¿Se te complica calcular los gastos de la salida con tus amigos después de pagar?</h1>
                            <h3 className='text-white'>Probá nuestra app web para repartir los gastos equitativamente {":)"} </h3>
                            <span className='px-5'>
                                <NavLink className="btn btn-primary btn-lg my-4 fs-3 fw-bold text-black mx-auto" to="/repartir/adelante/">
                                    Adelante
                                </NavLink>
                            </span>
                            
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
                    <div className='row align-items-center w-80'>
                        <div className='col-md-4 my-2'>
                            <div className='card stack-card-gray'>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Comodidad</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                        <div className='col-md-4 my-2'>
                            <div className='card bg-secondary text-white stack-card-gray'>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Justicia</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                        <div className='col-md-4 my-2 '>
                            <div className='card stack-card-gray'>
                                <div className='shadow-sm bg-primary rounded'></div>
                                <p className='mx-auto h3 my-2 stack-shadow-primary'>Accesibilidad</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto my-5'></hr>
            <p className='h2 text-center my-3 underlined animacion-entrada'>Reviews de usuarios </p>
            <div className='container-fluid mx-auto'>
                <div className='w-75 mx-auto my-5'>
                    <div className='row align-items-center w-80'>
                        <div className='col-sm-1'></div>
                        <div className='col-md-5 mt-2 mb-4 stack-card-gray'>
                            <div className='card bg-dark text-light '>
                                <p className='mx-auto ms-4 my-3 h5 fw-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                            <div className='border border-dark border-top-0 bg-secondary rounded-bottom mx-auto me-2 w-25'>
                                
                                <p className='text-center h4 text-white'>
                                    John
                                </p>
                            </div>
                            
                        </div>
                        <div className='col-md-5 mt-2 mb-4 stack-card-gray '>
                            <div className='card bg-dark text-light'>
                                <p className='mx-auto ms-4 my-3 h5 fw-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                            <div className='border border-dark border-top-0 bg-secondary rounded-bottom mx-auto me-2 w-25'>
                                <p className='text-center h4 text-white '>
                                    Jane
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </main>
    );
}
