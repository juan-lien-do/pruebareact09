import { NavLink } from "react-router-dom";
import imagen from '../landing/pizza.svg';
import './Navbar.css';
//import '../SCSS/custom.css'
//import '../App.css'
export default function Menu() {
    return (
        <nav className="shadow navbar navbar-expand-xxxl bg-dark text-white py-0 " style={{position:"sticky",top:"0",zIndex:4}}>
            <span className="text-primary ms-4 fw-bold fs-3">
                <NavLink className="nav-link " to="/repartir/">
                    <img className="img-fluid shadow-logo" src={imagen} alt="imagen de ejemplo" style={{width:"50px"}} />
                    Repartir
                </NavLink>
            </span>
            <div className="d-flex me-4 my-2">
                <ul className="navbar-nav">
                    <li className="navbar-item btn btn-primary py-0 fw-bold fs-5">
                        <NavLink className="nav-link text-black" to="/repartir/faq/">
                            ¿Cómo se usa?
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
      );
    }