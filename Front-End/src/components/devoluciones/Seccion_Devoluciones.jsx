import React from "react";
import Navbar from "../../navbar";
import { Link } from "react-router-dom";

function Seccion_Devoluciones() {
  return (
    <Navbar>
    <div>
      {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Sección de Registros de Devoluciones</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de Registros de Devoluciones Generados
            </p>
          </div>
        </div>
      </header>

      <div className="container mt-5" style={{ marginTop: '30px' }}>
  <div className="table table-responsive border-dark ">
    <table className="table table-bordered table-hover text-center border border-4 ">
      <thead className="table-light">
        <tr>
          <th colSpan="7">
            <h2 className="text-start ">Registros De Devoluciones Generadas</h2>
          </th>
        </tr>
        <tr>
          <th>Tipo De Devolución</th>
          <th>Observación De La Devolución</th>
          <th>Identificación Del Proveedor</th>
          <th>Nombre Del Proveedor</th>
          <th>Fecha y Hora De La Devolución</th>
          <th>Insumo(s) a Devolver</th>
          <th>Cantidad de Insumo(s) a Devolver</th>
        </tr>
      </thead>
      <tbody>

  
      </tbody>
    </table>

   

    <Link to="/Menu">
      <button type="submit" className="btn btn-primary btn-lg d-flex justify-content-start" style={{ marginTop: '30px' }}>
        Ir Atrás
      </button>{" "}
    </Link>
  </div>
</div>
      {/* <!-- Footer--> */}
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
    </Navbar>
  );
}

export default Seccion_Devoluciones;
