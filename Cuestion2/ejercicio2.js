// Modifica los contenidos de cada uno de los elementos utilizando Javascript mediante acceso al Document Object Model

function crearFila(event) {
    
    event.preventDefault();

    let container = document.getElementById("container");
    let contenidoTabla = document.getElementById("contenidoTabla");
    let tabla = document.getElementById("tabla");

    let filaNombre = document.getElementById("nombreAlumno").value;
    let filaApellido = document.getElementById("apellidosAlumno").value;
    let filaFechaNacimiento = document.getElementById("fechaNacimiento").value;
    let filaTelefono = document.getElementById("telefonoAlumno").value;    

    console.log(filaNombre + " " + filaApellido + " " + filaFechaNacimiento + " " + filaTelefono);

    var fila = document.createElement("tr");
    //fila.setAttribute("id", "fila1");
    fila.innerHTML = "<td>" + filaNombre +"</td>" + "<td>" + filaApellido +"</td>" + "<td>" + filaFechaNacimiento +"</td>" + "<td>" + filaTelefono +"</td>"  ;
    tabla.append(fila);

}


function rotarImagen() {
    //.imagen:hover {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
    let container = document.getElementById("container");

    var imagen = document.createElement("img");
    // Agrego atributos a la imagen
    imagen.setAttribute("src", "../imagenes/logoFormulario.png");
    imagen.setAttribute("alt", "logoFormulario");
    imagen.setAttribute("id", "logoFormulario");

    // Añado la imagen antes del primer hijo del elemento
    container.prepend(imagen);
    
}


// Realiza al menos tres ejemplos de manejo de BOM (Browser Object Model). Por ejemplo, identificar navegador, consultar dimesiones de ventana, mostrar listado de páginas visitadas ...

    // Ejemplo 1 = Identificar el navegador utilizado
    let objetoNavigator = window.navigator;
    console.log(objetoNavigator);

    // Muestro el nombre del navegador mediante la propiedad llamada appCodeName (ahora mismo se encuentra en desuso porque se utiliza userAgent)
    console.log("El nombre del navegador utilizado es " + objetoNavigator.appCodeName);
    console.log("La versión del navegador es " + objetoNavigator.appVersion);
    console.log("Los datos del navegador son " + objetoNavigator.userAgent);

    // Ejemplo 2 = Dimensiones de la ventana
    let objetoPantalla = window.screen;
    console.log(objetoPantalla);
    // Muestro el alto de la pantalla mediante la propiedad availHeight del objeto window.screen
    console.log("El alto de la pantalla es " + objetoPantalla.availHeight);
    // Muestro el ancho de la pantalla mediante la propiedad availWidth del objeto window.screen
    console.log("El ancho de la pantalla es " + objetoPantalla.availWidth);

    // Ejemplo 3 = Frames
    let objetoFrames = window.frames;
    console.log(objetoFrames);
    // Accedo a la propiedad crearFila para mostrar el código de la función creada llamada crearFila
    console.log("La función para crear una fila es " + objetoFrames.crearFila);

