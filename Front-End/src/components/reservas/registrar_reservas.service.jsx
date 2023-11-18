export async function postReservaMesas(reservas_mesas){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: reservas_mesas
    };    
    return await fetch('http://127.0.0.1:3000/reservas_mesas', requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function getReservasMesas(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/reservas_mesas', requestOptions)
    .then(response => response.json())
    .then(data => data );        
}

export async function getReservasMesasById(id_reservas_mesas){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log("geting reservas mesas",id_reservas_mesas)
    return await fetch('http://127.0.0.1:3000/reservas_mesas/'+id_reservas_mesas, requestOptions)
    .then(response => response.json())
    .then(data => data[0]);  
}

export async function updateReservasMesas(id_reservas_mesas, reservas_mesas){
    console.log(reservas_mesas)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: reservas_mesas
    };    
    return await fetch('http://127.0.0.1:3000/reservas_mesas/'+id_reservas_mesas, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function updateEstadoReservasMesas(id_reservas_mesas, id_estado){
    console.log(id_reservas_mesas)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_estado: id_estado})
    };    
    return await fetch('http://127.0.0.1:3000/reservas_mesas/estado/'+id_reservas_mesas, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function deleteReservasMesas(id_reservas_mesas){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/reservas_mesas/'+id_reservas_mesas, requestOptions)
        .then(response => response.json())
        .then(data => data);
}
