export async function postInsumo(insumo){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: insumo
    };    
    return await fetch('http://127.0.0.1:3000/insumos', requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function getInsumos(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/insumos', requestOptions)
    .then(response => response.json())
    .then(data => data );        
}

export async function getInsumoById(id_insumo){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log("geting insume",id_insumo)
    return await fetch('http://127.0.0.1:3000/insumos/'+id_insumo, requestOptions)
    .then(response => response.json())
    .then(data => data[0]);  
}

export async function updateInsumo(id_insumo, insumo){
    console.log(insumo)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: insumo
    };    
    return await fetch('http://127.0.0.1:3000/insumos/'+id_insumo, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function deleteInsumo(id_insumo){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/insumos/'+id_insumo, requestOptions)
        .then(response => response.json())
        .then(data => data);
}
