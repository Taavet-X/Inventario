import React from 'react'
import { Link } from 'react-router-dom'

function Pedidos() {
  return (
    <div  className="animate__animated animate__fadeIn animate">
        {/* <!-- Header--> */}
       <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Pedidos</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Sección de Pedidos
            </p>
          </div>
        </div>
      </header>

      <div class="form-group">
        <div class="col-md-12 text-center">
          
        </div>
      </div>

      <div class="container mt-5" style={{ marginTop: "30px" }}>
        <div class="table table-responsive border-dark ">
          <table class="table table-bordered table-hover text-center border border-4 ">
            <thead class="table-light">
              <tr>
                <th colSpan="9">
                  <h2 class="text-start ">Pedidos</h2>
                </th>
              </tr>
              <tr>
                {/* <th>ID Del Proveedor</th> */}
                <th>ID Del Pedido</th>
                <th>Nombre De La Persona Del Pedido</th>
                <th>Dirección</th>
                <th>Celular</th>
                <th>Pedido</th>
                <th>Precio Total Del Pedido</th> 
                <th>Número de Mesa</th> 
                <th>Estado Del Pedido</th> 
                <th style={{ width: "160px" }}>Opciones</th>
              </tr>
            </thead>
              
          </table>

          

          <Link to="/Menu">
            <button
              type="submit"
              className="btn btn-primary btn-lg d-flex justify-content-start"
              style={{ marginTop: "30px" }}
            >
              Ir Atrás
            </button>{" "}
          </Link>
        </div>
      </div>



      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Pedidos