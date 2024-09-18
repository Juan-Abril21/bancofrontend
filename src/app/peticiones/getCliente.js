export const getCliente = async(cedula) => {
    const url=`https://banco-backend-8der.onrender.com/cliente/${cedula}`;
    const resp=await fetch(url);
    const data=await resp.json();
    const cliente = {
        nombre: data.nombre,
        cedula: data.cedula,
    }
    console.log(cliente);
    return cliente;
}
