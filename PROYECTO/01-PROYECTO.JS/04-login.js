function loguear() {
  let user = document.getElementById("usuario").value; // Obtener el valor del campo de usuario
  let password = document.getElementById("clave").value; // Obtener el valor del campo de contraseña

  if (user == "danny" && password == "147852") {
    // Redirigir a bienvenida.html si las credenciales son correctas
    window.location = "bienvenida.html";

    // Mostrar mensaje de bienvenida
    alert("¡Bienvenido! Has iniciado sesión correctamente.");
  } else {
    // Mostrar un mensaje de alerta en caso de credenciales incorrectas
    alert("Datos incorrectos");

    // Redirigir al usuario a la página de registro
    window.location = "registro.html";
  }
}
