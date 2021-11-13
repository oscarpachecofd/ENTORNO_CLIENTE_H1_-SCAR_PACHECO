// En una página web almacena información utilizando cookies, localStorage y sessionStorage y explica brevemente sus diferencias

    // Crear cookies
    document.cookie = "nombreAlumno=Óscar;expires=Mon, 07 feb 2022 00:00:00 UTC; secure";
    //console.log(document.cookie);

    // Crear localStorage
    let listaNombreAlumnos = ["Óscar", "Pablo", "Miguel", "Carlos"];
    localStorage.setItem("listaAlumnos", listaNombreAlumnos);   
    
    // Crear sessionStorage
    let fecha = new Date();
    let fechaActual = fecha.toLocaleDateString();
    sessionStorage.setItem("fechaActual", fechaActual);

    // Explicación localStorage y sessionStorage
    // Los datos almacenados en localStorage por defecto no tienen fecha de expiración , en cambio en sessionStorage los datos almacenados se eliminan cuando finaliza la sesión. En sessionStorage los datos son almacenados en la ventana en la que fue creada mientras que en localStorage los datos siguen almacenados en diferentes ventanas y pestañas. Los datos almacenados en localStorage y sessionStorage automáticamente se convierten a String (cadenas de texto).

    // Explicacion cookies
    // Las cookies almacenan datos en forma clave/valor. Por defecto las cookies se eliminan cuando se cierra el navegador


// En qué carpeta de Windows se almacena cada dato

    // ¿Dónde se almacenan las cookies?
    // Las cookies se almacenan por defecto en la siguiente ruta ==> C:\Users\nombreUsuario\AppData\Local\Google\nombreNavegador\User Data\Default\Cookies
    // Necesitamos activar la opción para poder ver carpetas ocultas debido a que la carpeta AppData suele estar oculta en el sistema operativo
    // La carpeta "nombreUsuario" será el nombre del usuario con el que accedes a tu sistema operativo.
    // La carpeta "nombreNavegador" será el nombre del navegador que utilices (Chrome, Firefox, Edge, Opera, Brave, etc).

    // ¿Dónde se almacena localStorage?
    // Las cookies se almacenan por defecto en la siguiente ruta ==> C:\Users\nombreUsuario\AppData\Local\Google\nombreNavegador\User Data\Default\Local Storage


    // ¿Dónde se almacena sessionStorage?
    // Las cookies se almacenan por defecto en la siguiente ruta ==> C:\Users\nombreUsuario\AppData\Local\Google\nombreNavegador\User Data\Default\Session Storage


// Consultar los datos de cookies, localStorage y sessionStorage de la web

    // Recupero los datos almacenados en las cookies
    let cookieLeida = document.cookie; // Se almacenan todas las cookies, en este caso solo hay creada una
    console.log("La cookie leída es " + cookieLeida);

    // Recupero los datos almacenados en localStorage
    let localLeida = localStorage.getItem("listaAlumnos"); // Se almacena el localStorage con nombre listaAlumnos
    console.log("El localStorage leído es " + localLeida);

    // Recupero los datos almacenados en sessionStorage
    let sessionLeida = sessionStorage.getItem("fechaActual"); // Se almacena el sessionStorage con nombre fechaActual
    console.log("El sessionStorage leído es " + sessionLeida);
