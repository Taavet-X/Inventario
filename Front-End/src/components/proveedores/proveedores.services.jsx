export async function postProveedor(proveedor){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: proveedor
    };    
    return await fetch('http://127.0.0.1:3000/proveedores', requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function getProveedor(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/proveedores', requestOptions)
    .then(response => response.json())
    .then(data => data );        
}

export async function getProveedorById(id_proveedor){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log("geting proveedor",id_proveedor)
    return await fetch('http://127.0.0.1:3000/proveedores/'+id_proveedor, requestOptions)
    .then(response => response.json())
    .then(data => data[0]);  
}

export async function updateProveedor(id_proveedor, proveedor){
    console.log(proveedor)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: proveedor
    };    
    return await fetch('http://127.0.0.1:3000/proveedores/'+id_proveedor, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function deleteProveedor(id_proveedor){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/proveedores/'+id_proveedor, requestOptions)
        .then(response => response.json())
        .then(data => data);
}
