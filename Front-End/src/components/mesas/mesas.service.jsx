export async function postMesa(mesa){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: mesa
    };    
    return await fetch('http://127.0.0.1:3000/mesa', requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function getMesas(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/mesa', requestOptions)
    .then(response => response.json())
    .then(data => data );        
}

export async function getMesaById(id_mesa){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log("geting mesa",id_mesa)
    return await fetch('http://127.0.0.1:3000/mesa/'+id_mesa, requestOptions)
    .then(response => response.json())
    .then(data => data[0]);  
}

export async function updateMesa(id_mesa, mesa){
    console.log(mesa)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: mesa
    };    
    return await fetch('http://127.0.0.1:3000/mesa/'+id_mesa, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function deleteMesa(id_mesa){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/mesa/'+id_mesa, requestOptions)
        .then(response => response.json())
        .then(data => data);
}
