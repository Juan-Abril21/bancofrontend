export const Deposito = async (data) => {
    const url = `https://banco-backend-8der.onrender.com/depositar`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)  
    });
  
    if (resp.ok) {
      // La solicitud fue exitosa (código de estado 2xx)
      console.log('el cliente se ha agregado correctamente');
      // Aquí puedes realizar acciones adicionales si es necesario
    } else {
      // La solicitud no fue exitosa (código de estado diferente de 2xx)
      console.error('Error al agregar la práctica');
      // Aquí puedes manejar el error o mostrar un mensaje de error al usuario
    }
  };