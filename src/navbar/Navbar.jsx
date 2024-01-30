import { NavLink } from "react-router-dom";
import '../SCSS/custom.css'
//import '../App.css'
export default function Menu() {
    return (
        <nav className="navbar navbar-expand-xxxl bg-dark text-white py-0 ">
            <span className="text-primary ms-4 fw-bold fs-3">
                <NavLink className="nav-link " to="/inicio">
                    Repartir
                </NavLink>
            </span>
            <div className="d-flex me-4 align-items-center my-2">
                <ul className="navbar-nav">
                    <li className="navbar-item btn btn-primary py-0 fw-bold fs-5">
                        <NavLink className="nav-link " to="/inicio">
                            ¿Cómo se usa?
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
      );
    }