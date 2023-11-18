import React, { useEffect, useState } from 'react'
import "./App.css"
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token")){ //Quiere decir que hay una sesion iniciada
      navigate("/menu", { replace: true });
    }
  },[])
  
  async function login(e){
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: user,
        password: password
      })
    };    
    try{
      const res = await fetch('http://127.0.0.1:3000/login/', requestOptions)
      if(res.status == 200){
        localStorage.setItem("token", await res.json())
        navigate("/menu", { replace: true });
        //console.log(await res.json())
      } else {
        console.log("Credenciales no validas")
      }      
    } catch(e){
      console.log("error")
    }
  }

  return (
      
      <div className="d-lg-flex half ">
    <div className="bg order-1 order-md-2"></div>
    <div className="contents">    
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
          {/* <h3>Bienvenido Al Sistema de Inventario del Restaurante Oh La Lá</h3> */}
            <form className='formulario'>
              <div className="form-group first">
              <h3>Bienvenido Al Sistema de Inventario del Restaurante Oh La Lá</h3>
                <label className='userps' for="username">Usuario</label>
                <input type="text" className="form-control" placeholder="Usuario" id="username"  value={user} onChange={e => setUser(e.target.value)}/>                
              </div>
              <div className="form-group">
                <label  className='userps' for="password" value={password} >Contraseña</label>
                <input type= "password" className="form-control" placeholder="Contraseña" id="password" onChange={e => setPassword(e.target.value)}/>
                <input type ="submit" value="Ingresar" className="btn btn-block btn-primary" style={{marginTop:'20px'}} onClick={login}/>             
              </div>  
                                     
                          
            </form>
          </div>
        </div>
      </div>
    </div>    
  </div>
)
}

export default App
