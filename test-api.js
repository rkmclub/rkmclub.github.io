async function testAPI() {
  const apiURL = "https://script.google.com/macros/s/AKfycbyIl_dPSuMl5f6o99Y4mCKETvVCIJH4WWp8YuBqi9TxsrXsBDlZHhyOW42yLWEd299pYA/exec";

  try {
    // 1️⃣ Registrar cuota
    const cuotaResp = await fetch(apiURL, {
      method: 'POST',
      body: new URLSearchParams({
        accion: 'registrar_cuota',
        admin_email: 'dalmirobu@gmail.com',
        socio_id: '4',
        monto: '40000'
      })
    });
    const cuotaData = await cuotaResp.json();
    console.log("✅ Respuesta registrar_cuota:", cuotaData);

    // 2️⃣ Registrar pase diario
    const paseResp = await fetch(apiURL, {
      method: 'POST',
      body: new URLSearchParams({
        accion: 'registrar_pase_diario',
        admin_email: 'dalmirobu@gmail.com',
        nombre: 'Juan',
        apellido: 'Pérez',
        dni: '12345678',
        telefono: '1123344455',
        email: 'juan@example.com',
        fecha_uso: '2025-08-14',
        acepta_reglamento: 'S',
        monto: '8000',
        metodo_pago: 'efectivo'
      })
    });
    const paseData = await paseResp.json();
    console.log("✅ Respuesta registrar_pase_diario:", paseData);

  } catch (error) {
    console.error("❌ Error en la prueba:", error);
  }
}

// Ejecutar prueba
testAPI();
