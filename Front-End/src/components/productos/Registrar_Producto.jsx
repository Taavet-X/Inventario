import React from 'react'
import "./Registrar_Producto.css"
import { useState } from 'react'
import { postProducto } from './productos.service'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../../navbar'


function Registrar_Producto() {

    const navigate = useNavigate()

    const [nombre_producto, setNombreProducto]  = useState ('')
    const [precio, setPrecio] = useState ('')
    const [descripcion_producto, setDescripcionProducto]  = useState ('')
    

    async function handleClick (){


        const producto = JSON.stringify({ 
            nombre_producto: nombre_producto,
            precio: precio,
            descripcion: descripcion_producto
        })
        
        try{
            const data = await postProducto(producto);
            Swal.fire({
                    title: 'Plato De Comida Registrado Exitosamente',
                    icon: 'success',
            }).then(()=>{
                navigate("/platos_menu")
            })            
        } catch(e){
            Swal.fire({
                title: e,
                icon: 'error',
            })  
        }        
    }

    
    
  return (
    <Navbar>
    <div className="animate__animated animate__fadeIn animate">
         {/* <!-- Header--> */}
         <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Registrar Producto</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Registra el Producto Atráves del formulario</p>
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
                        
                        <legend className="text-center header "style={{position:'relative',left:'0px'}}>Registrar Producto</legend>
                        
                        <div className='formulario'>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Nombre del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Nombre del Producto" className="form-control"
                                onChange={(e)=>{
                                    setNombreProducto(e.target.value)
                                }}/>
                                
                            </div>
                        </div>
                       
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Precio del Producto</label>
                                <input id="email" name="email" type="text" placeholder="Precio" className="form-control"
                                onChange={(e)=>{
                                    setPrecio(e.target.value)
                                }}/>

                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Descripcion del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Descripción del Producto" className="form-control"
                                onChange={(e)=>{
                                    setDescripcionProducto(e.target.value)
                                }}/>
                                
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
                              <Link to = '/platos_menu'> <button type="submit" className="btn btn-primary btn-lg1">Ir Atrás</button></Link> 
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

export default Registrar_Producto