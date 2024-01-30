import React from 'react';
import { NavLink } from "react-router-dom";
import imagen from './logov2_720.png';
import './Landing.css';  // Archivo de estilos CSS separado

export default function Landing() {
    return (
        <main className=''>
            <div className="container-fluid my-5">
                <div className=" mx-auto align-items-center" style={{width:'85%'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <img className="img-fluid" src={imagen} alt="imagen de ejemplo" />
                        </div>
                        <div className="col-md-6">
                            <h1 className='card p-3 bg-gradient-primary my-4'>¿Se te complica calcular los gastos de la salida con tus amigos después de pagar?</h1>
                            <h3>Probá nuestra app web para repartir los gastos equitativamente {":)"} </h3>
                            <NavLink className="nav-link " to="/repartir">
                                <button type="button" className="btn btn-primary btn-lg my-4 fs-3 fw-bold text-black mx-auto">Adelante</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto my-5'></hr>
            <hr className='w-50 mx-auto my-5'></hr>
            <hr className='w-25 mx-auto my-5'></hr>
            <h3 className='h2 text-align-center container-fluid text-center mt-5 mb-4'>¿Porqué usar nuestra app?</h3>
            <div className='container-fluid my-3'>
                <div className='w-75 mx-auto'>
                    <div className='row align-items-center w-80'>
                        <div className='col my-2'>
                            <div className='card '>
                                <p className='mx-auto h3 my-2'>Comodidad</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                        <div className='col my-2'>
                            <div className='card bg-secondary text-white'>
                                <p className='mx-auto h3 my-2'>Justicia</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                        <div className='col my-2'>
                            <div className='card '>
                                <p className='mx-auto h3 my-2'>Accesibilidad</p>
                                <p className='mx-auto ms-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto my-5'></hr>
            <p className='h2 text-center my-3 underlined'>Reviews de usuarios </p>
            <div className='container'>
                <div className='w-75 row mx-auto my-5'>
                    <div className='col my-2'>
                        <div className='card bg-dark text-light '>
                            <p className='mx-auto ms-4 my-3 h5 fw-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                        </div>
                        <div className='border border-top-0 bg-secondary rounded-bottom mx-auto me-2 w-25'>
                            <p className='text-center h4 text-white'>
                                John
                            </p>
                        </div>
                    </div>
                    <div className='col my-2'>
                        <div className='card bg-dark text-light'>
                            <p className='mx-auto ms-4 my-3 h5 fw-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam culpa suscipit minus rem eligendi similique eaque mollitia, eius voluptate laudantium quia maiores, aliquam sit.</p>
                        </div>
                        <div className='border border-top-0 bg-secondary rounded-bottom mx-auto me-2 w-25'>
                            <p className='text-center h4 text-white'>
                                Jane
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
