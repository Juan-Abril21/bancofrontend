export const getClientes = async() => {
    const url=`http://localhost:8080/clientes`;
    const resp = await fetch(url);
    const data = await resp.json();
    const clientesLista = data.flatMap((cliente) =>
        cliente.cuentas.map((cuenta) => ({
            ID: cliente.id,
            cedula: cliente.cedula,
            nombre: cliente.nombre,
            saldo: cuenta.saldo,
            fechaCreacion: cuenta.fecha_creacion,
            cuentaId: cuenta.id
        }))
    );
    return clientesLista;
}