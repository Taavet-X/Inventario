import React from 'react'
import "/src/components/pedidos/Registrar_Pedidos.css"
import { Link } from 'react-router-dom'
import Navbar from '../../navbar'

function Registrar_Pedidos() {
  return (
    <Navbar>
    <div className="animate__animated animate__fadeIn animate"> 
    
    {/* <!-- Header--> */}
    <header class="bg-dark py-5">
       <div class="container px-4 px-lg-5 my-5">
           <div class="text-center text-white">
               <h1 class="display-4 fw-bolder">Registrar Pedido</h1>
               <p class="lead fw-normal text-white-50 mb-0">Registra el Pedido Atráves del formulario</p>
           </div>
       </div>
   </header>

   {/* <!-- Formulario--> */}

   <div class="container">
   <div class="row">
   <div class="col-md-12">
       <div class="well well-sm">
           <form class="form-horizontal" method="post">
               <fieldset>
                   <legend class="text-center header"style={{position:'relative',left:'0px'}}>Registrar Pedido</legend>
                   
                   <div className='formulario'>
                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Nombre de la Persona del Pedido</label>
                           <input id="fname" name="name" type="text" placeholder="Nombre de la Persona" class="form-control"/>
                       </div>
                   </div>

                   <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                    <div class="col-md-8">
                        <label htmlFor="unidadMedida">Tipo de Identificación</label>
                        <select id="unidadMedida" name="Tipo de Identificación" class="form-control">
                            
                            <option value="unidades">Cedúla (C.C)</option>
                            <option value="kg">Tarjeta De Identidad (T.I)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">N° De Identificación</label>
                           <input id="email" name="email" type="text" placeholder="N° De Identificación" class="form-control"/>
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Dirección (En caso de que el pedido sea para llevar)</label>
                           <input id="lname" name="name" type="text" placeholder="Dirección" class="form-control"/>
                           
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Celular</label>
                           <input id="email" name="email" type="text" placeholder="Celular" class="form-control"/>
                       </div>
                   </div>

                
                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Pedido (Menú de todo lo que pide la persona)</label>
                           <input id="fname" name="name" type="text" placeholder="Pedido" class="form-control"/>
                           
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Precio Total del Pedido</label>
                           <input id="lname" name="name" type="text" placeholder="Precio Total del Pedido" class="form-control"/>
                           
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Número de la Mesa (En Caso De Que El Pedido Sea En El Restaurante)</label>
                           <input id="lname" name="name" type="text" placeholder="Número de la Mesa" class="form-control"/>
                           
                       </div>
                   </div>

                   

                   <div class="form-group">
                       <div class="col-md-12 text-center">
                           <button type="submit" class="btn btn-primary btn-lg2">Registrar Pedido</button>
                       </div>
                   </div>
                    
                   <div class="form-group">
                            <div class="col-md-12 text-center">
                              <Link to = '/pedidos'> <button type="submit" class="btn btn-primary btn-lg1">Ir Atrás</button></Link> 
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
<footer class="py-5 bg-dark">
       <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Restaurante Oh La Lá</p></div>
   </footer>

</div>
</Navbar>
  );
}

export default Registrar_Pedidos