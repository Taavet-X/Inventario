import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



function Navbar({children}){

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/")
        }
    },[])

    const navigate = useNavigate();

    const cerrarSesion = () => {
        Swal.fire({
            title: '¿Cerrar sesión?',
            text: '¿Estás seguro de que deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, elimina el token y redirige a la página de inicio
                localStorage.removeItem("token");
                navigate("/");
            }
        });
    };
    

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link align-middle px-0">
                                    <img src="/src/assets/work-from-home.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productos_insumos" className="nav-link align-middle px-0">
                                    <img src="/src/assets/organico.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Insumos</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proveedores" className="nav-link align-middle px-0">
                                    <img src="/src/assets/convenio.png" alt="user" width="30" height="30" className="rounded-circle" />   
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Proveedores</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Ventas" className="nav-link align-middle px-0">
                                    <img src="/src/assets/grafico-de-barras.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Ventas</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Mesas" className="nav-link align-middle px-0">
                                    <img src="/src/assets/mesa-redonda.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Mesas</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Reservas" className="nav-link align-middle px-0">
                                    <img src="/src/assets/reservado.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Reservas</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Pedidos" className="nav-link align-middle px-0">
                                    <img src="/src/assets/entrega-de-comida.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Pedidos</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Devoluciones" className="nav-link align-middle px-0">
                                    <img src="/src/assets/devoluciones-icono.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Devoluciones</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/seccion_registros" className="nav-link align-middle px-0">
                                    <img src="/src/assets/caja-de-devolucion.png" alt="user" width="30" height="30" className="rounded-circle" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Registro (Devoluciones)</span>
                                </Link>
                            </li>

                            
                        </ul>
                        <hr />
                        <div className="dropdown pb-4">
                            <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/src/assets/avatar.png" alt="user" width="30" height="30" className="rounded-circle" />
                                <span className="d-none d-sm-inline mx-1">Admin</span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                {/* <li><Link className="dropdown-item" href="#">New project...</Link></li>
                                <li><Link className="dropdown-item" href="#">Settings</Link></li>
                                <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li> */}
                                <li><Link className="dropdown-item" href="#" onClick={cerrarSesion}>Cerrar Session</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col py-3">
                    {children}
                </div>
            </div>
        </div>)
}

export default Navbar;