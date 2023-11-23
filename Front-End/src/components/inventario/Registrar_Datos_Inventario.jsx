import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Navbar from '../../navbar'
import { postInventario,getInsumos,getProveedor } from './inventario.services'
import Swal from 'sweetalert2'


function Registrar_Datos_insumos() {

    const [insumos, setInsumos] = useState ([])
    const [selected_insumo, setSelectedInsumo] = useState ('')
    const [cantidad, setCantidad] = useState ('')
    const [unidad, setUnidad] = useState ('')
    const [fecha_ingreso, setFecha_Ingreso] = useState ('')
    const [fecha_caducidad, setFecha_Caducidad] = useState ('')
    const [proveedor, setProveedor] = useState([])
    const [selected_proveedor,setSelectedProveedor] = useState('')
    const [fechaFormateada, setFechaFormateada] = useState(null); 
    

    useEffect(()=>{
      getInsumos().then( insumos => setInsumos(insumos))
      getProveedor().then (proveedores => setProveedor(proveedores))  
    },[])

    useEffect(() => {
      
      setFechaFormateada(fechaFormateada);
    }, []);
    
    function handleClick (){
      const Inventario = JSON.stringify({
         
          id_insumo: selected_insumo,
          cantidad:cantidad,
          unidad:unidad,  
          fecha_ingreso:fecha_ingreso,
          fecha_caducidad:fecha_caducidad,
          id_proveedor:selected_proveedor,
          
      })
      
      postInventario(Inventario)
     
      .then((res) =>{
        if (res == 0) {
            Swal.fire({
                title: 'Cantidad de Insumos No Permitidos',
                icon: 'error',
        }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/registrar_datos_inventario';
            }
        });
        }else {
           
            Swal.fire({
                title: 'Datos de Insumos Registrados Exitosamente',
                icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/inventario';
            }
        });
        }
  });
  }



  return (
    <Navbar>
    <div className="animate__animated animate__fadeIn animate">
         {/* <!-- Header--> */}
         <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Registrar Datos Del Insumo</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Registra Los Datos Adicionales del Insumo Atráves del formulario</p>
                </div>
            </div>
        </header>

        {/* <!-- Formulario--> */}
        
        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <form className="form-horizontal" method="post">
                    <fieldset>
                        
                        <legend className="text-center header "style={{position:'relative',left:'0px'}}>Registrar Datos Adicionales Del Insumo</legend>
                        
                        <div className='formulario'>
                        <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                        <label htmlFor="unidadMedida">Nombre Del Insumo</label>
                        <select id="nInsumo" name="NombreInsumo" class="form-control" placeholder='Nombre Del Insumo'
                            onChange={(e)=>{
                             setSelectedInsumo(e.target.value)
                        }} 
                        >
                        <option value='0'>Seleccione Un Insumo</option>
                        {insumos.map((insumo) => (
                            <option value={insumo.id_insumos}>{insumo.nombre_insumo}</option>
                        ))} 
                        </select>
                    </div>
                </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Cantidad Del Insumo</label>
                                <input id="email" name="email" type="number" placeholder="Cantidad Del Insumo" className="form-control"
                                onChange={(e)=>{
                                    setCantidad(e.target.value)
                               }}
                                />

                            </div>
                        </div>

                        <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                        <label htmlFor="unidadMedida">Unidad De Medida Del Insumo</label>
                        <select id="unidadMedida" name="unidadMedida" class="form-control"
                        onChange={(e)=>{
                             setUnidad(e.target.value)
                        }}

                        >
                            <option value="Libras">Libra(s)</option>
                            <option value="Gramos">Gramos (Grs)</option>
                            <option value="Kilogramos">Kilogramos (Kg)</option>
                            <option value="Arroba">Arroba(s)</option>
                            <option value="Lts">Litro(s) (Lts)</option>
                            <option value="Mltrs">Mililitro(s) (Mltrs)</option>
                            <option value="Oz">Onza(s) (oz)</option>
                            <option value="Unidades">Unidades</option>
                            <option value="Centimetros">Centímetros(Cms)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                        <label htmlFor="name">Fecha De Ingreso del Insumo</label>
                           <input id="email" name="email" type="date" placeholder="Fecha De Ingreso del Insumo" class="form-control"
                           onChange={(e)=>{
                           setFecha_Ingreso(e.target.value) }}
                            />
                       </div>
                   </div>

                <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                        <label htmlFor="name">Fecha de Caducidad del Insumo</label>
                           <input id="email" name="email" type="date" placeholder="Fecha de Caducidad" class="form-control"
                          onChange={(e)=>{
                            setFecha_Caducidad(e.target.value)}}
                            />
                       </div>
                   </div>

                   <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                        <label htmlFor="unidadMedida">Proveedor</label>
                        <select id="proveedorinsumo" name="proveedorinsumo" class="form-control"
                            
                        onChange={(e)=>{
                             setSelectedProveedor(e.target.value)
                        }} 
                        >
                        <option value='0'>Seleccione el Proveedor</option>
                        {proveedor.map((proveedores) => (
                            <option value={proveedores.id_proveedor}>{proveedores.nombre_proveedor}</option>
                        ))}

                        
                        </select>
                    </div>
                </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg1" onClick={(e) =>{
                                    e.preventDefault()
                                    handleClick()
                                }}>Registrar</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                              <Link to = '/inventario'> <button type="submit" className="btn btn-primary btn-lg1">Ir Atrás</button></Link> 
                            </div>
                        </div>



                        </div>

                        

                        
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
    {/* <!-- Footer--> */}
    <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Restaurante Oh La Lá</p></div>
        </footer>


    </div>
    </Navbar>
  )
}

export default Registrar_Datos_insumos