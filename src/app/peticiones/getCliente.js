export const getCliente = async() => {
    const url=`http://localhost:8080/cliente/${cliente.cedula}`;
    const resp=await fetch(url);
    const data=await resp.json();
    const practicasLista=data.map((cliente)=>({
        nombre: cliente.nombre,
        cedula: cliente.cedula,
    }))
return practicasLista;
}
