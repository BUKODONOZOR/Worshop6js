document.addEventListener("DOMContentLoaded", function () {

    var formulario = document.getElementById("formulario_travel");
    var mostrarBtn = document.getElementById("mostrarBtn");
    var ventanaEmergente = document.getElementById("ventanaEmergente");
   

    var cerrarBtn = document.getElementById("cerrarBtn");

    obtenerDatos()
        .then(function (datos) {
            // Utiliza los datos en el ámbito global
            console.log('Datos obtenidos:', datos);

            DrawElementDb(datos)

        }
    );

    AddBtn(mostrarBtn, ventanaEmergente)
    RemoveWindow(cerrarBtn, ventanaEmergente)
    List(formulario) 


});



































//FUNCIONES 

function DrawElementDb(Dblist) {
    var lista = document.getElementById("lista-articulos");

    // Recorremos el array de artículos
    Dblist.forEach(function (articulo) {


        var item = document.createElement("li");

        var contenedor = document.createElement("div");
        contenedor.style.width = "500px";
        contenedor.style.height = "200px";
        contenedor.style.backgroundColor = "rgba(0, 40, 145, 0.8)"

        var TitleArticle = document.createElement("p");
        TitleArticle.style.textAlign = "center";
        TitleArticle.textContent = articulo.travelname;

        var Tiresultado = document.createElement("p");
        Tiresultado.style.textAlign = "center";
        Tiresultado.style.color = "red";
        Tiresultado.textContent = articulo.travelname +" " + " " + articulo.presupuesto + " " + articulo.muerto;


        var btneat = document.createElement("button");
        btneat.style.width = "100px";
        btneat.style.height = "50px";
        btneat.textContent = "COMIDA";
        
        var ventanaEmergente1 = document.getElementById("ventanaEmergente1");
        var cerrarBtn1 = document.getElementById("cerrarBtn1");



        AddBtn(btneat, ventanaEmergente1)
        RemoveWindow(cerrarBtn1, ventanaEmergente1)

        var btnActiviti = document.createElement("button");
        btnActiviti.style.width = "100px";
        btnActiviti.style.height = "50px";
        btnActiviti.textContent = "Actividades"
  

        var btnBackpack = document.createElement("button");
        btnBackpack.style.width = "100px";
        btnBackpack.style.height = "50px";
        btnBackpack.textContent = "Maleta"

        var ventanaEmergente2 = document.getElementById("ventanaEmergente2");
        var cerrarBtn2 = document.getElementById("cerrarBtn2");

        AddBtn(btnBackpack, ventanaEmergente2)
        RemoveWindow(cerrarBtn2, ventanaEmergente2)



        var btnTraductor = document.createElement("button");
        btnTraductor.style.width = "100px";
        btnTraductor.style.height = "50px";
        btnTraductor.textContent = "TRADUCTOR"

        
        var ventanaEmergente4 = document.getElementById("ventanaEmergente4");
        var cerrarBtn4 = document.getElementById("cerrarBtn4");

        AddBtn(btnTraductor, ventanaEmergente4)
        RemoveWindow(cerrarBtn4, ventanaEmergente4)

        var btnPiedra = document.createElement("button");
        btnPiedra.style.width = "100px";
        btnPiedra.style.height = "50px";
        btnPiedra.textContent = "Duelo"

        var ventanaEmergente5 = document.getElementById("ventanaEmergente5");
        var cerrarBtn5 = document.getElementById("cerrarBtn5");

        AddBtn(btnPiedra, ventanaEmergente5)
        RemoveWindow(cerrarBtn5, ventanaEmergente5)

        AddBtn(btnTraductor, ventanaEmergente4)
        RemoveWindow(cerrarBtn4, ventanaEmergente4)

        var btnWifi = document.createElement("button");
        btnWifi.style.width = "100px";
        btnWifi.style.height = "50px";
        btnWifi.textContent = "Wifi"

        var ventanaEmergente3 = document.getElementById("ventanaEmergente3");
        var cerrarBtn3 = document.getElementById("cerrarBtn3");

        AddBtn(btnWifi, ventanaEmergente3);
        RemoveWindow(cerrarBtn3, ventanaEmergente3);
    // Asignamos el contenido a los elementos de la lita
        contenedor.appendChild(TitleArticle);
        contenedor.appendChild(btneat);
        contenedor.appendChild(btnWifi);
        contenedor.appendChild(btnBackpack);
        contenedor.appendChild(btnTraductor);
        contenedor.appendChild(btnPiedra);
        contenedor.appendChild(btnActiviti);
        contenedor.appendChild(Tiresultado),
        item.appendChild(contenedor);
       


        // Añadimos el elemento de lista a la lista <ul>
        lista.appendChild(item);
    })
}

function obtenerDatos() {
    return axios.get('http://localhost:3000/Hilberto')
        .then(function (response) {
            // Devuelve los datos de la respuesta
            return response.data;
        })
        .catch(function (error) {
            // Maneja los errores de la solicitud
            console.error('Error al hacer la solicitud:', error);
        });
}

function AddBtn(btnmostrar, ventanamostrar) {
    // Mostrar la ventana emergente cuando se hace clic en el botón
    btnmostrar.addEventListener("click", function () {
        ventanamostrar.style.display = "block";
    });
}

function RemoveWindow(btncerrar, ventanacerrar) {
    // Ocultar la ventana emergente cuando se hace clic en el botón de cerrar
    btncerrar.addEventListener("click", function () {
        ventanacerrar.style.display = "none";
    });
}

function List(formulario){
    
    formulario.addEventListener("submit", function (event) {
        // Prevenir el comportamiento predeterminado del formulario (enviar a una URL)
        event.preventDefault();

        // Obtener los valores del formulario
        var nombre = document.getElementById("NameNewTravel").value;
        var presupuesto = document.getElementById("PrsupuestNewTravel").value;
        var description = document.getElementById("DescriptionNewTravel").value;
        var fechaI = document.getElementById("DateNewTravelI").value;
        var fechaF = document.getElementById("DateNewTravelF").value;



        // Realizar la solicitud POST utilizando Axios
        axios.post('http://localhost:3000/Hilberto', {
            travelname: nombre,
            presupuesto: presupuesto,
            description: description,
            fechaI: fechaI,
            fechaF: fechaF,
            comidas : []

        })
            .then(function (response) {
                // Manejar la respuesta exitosa
                console.log('Respuesta:', response.data);
                alert('¡Datos enviados con éxito!');
            })
            .catch(function (error) {
                // Manejar errores de solicitud
                console.error('Error al hacer la solicitud:', error);
                alert('Ocurrió un error al enviar los datos.');
            });
    });
}

function capturarSeleccion() {
    // Obtener el elemento select por su ID
    var selectElement = document.getElementById('opciones');
    
    // Obtener el valor seleccionado
    var selectedValue = selectElement.value;
    let gasto = 0
    let muerto = false;
    // Mostrar el valor seleccionado (en este caso, lo estoy mostrando en la consola)
    if (selectedValue == "1"){
        console.log("Se le restaran 15k");
        gasto =15000
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        

        console.log(numeroAleatorio);
        if(numeroAleatorio == 5){
            muerto = true 
        }
        else{
            muerto = false
        }
    }
    if (selectedValue == "2"){
        console.log("Se le restaran 25k");
        gasto =25000
    }

    axios.get('http://localhost:3000/Hilberto/1')
      .then(response => {
        // Obtener el valor actual de la respuesta
        const currentValue = response.data.presupuesto;

        // Restar 2 al valor actual
        const newValue = currentValue - gasto;
        const Estado = muerto
        // Realizar una solicitud PATCH para actualizar el valor en la base de datos
        return axios.patch('http://localhost:3000/Hilberto/1', { presupuesto: newValue , muerto: Estado});
      })
      .then(response => {
        console.log('Valor actualizado:', response.data);
        // Aquí puedes realizar cualquier acción adicional que desees después de actualizar el valor
      })
      .catch(error => {
        console.error('Error al actualizar valor:', error);
      });
}


function capturarTamaño(){
    var TamañoOMaletaAlto = document.getElementById('maletaAl');
    var TamañoOMaletaAncho = document.getElementById('maletaAn');
    var Mensje = document.getElementById("SpanMaleta");
     
    var TamañoMaletaAlto = parseFloat(TamañoOMaletaAlto.value);
    var TamañoMaletaAncho = parseFloat(TamañoOMaletaAncho.value);

    var factordereduccionAlto =  (55 /TamañoMaletaAlto)
    var factordereduccionAncho =  (40 /TamañoMaletaAncho)

    var factorminimo = Math.min(factordereduccionAlto,factordereduccionAncho)

    var nuevoalto =  TamañoMaletaAlto * factorminimo
    var nuevhoancho = TamañoMaletaAncho * factorminimo 
    Mensje.textContent = "Nuevo Valor Sugerido Alto:"+ nuevoalto + " " + "Nuevo Valor Ancho Sugerido:"+ nuevhoancho;
}

function capturarContraseña(){
    var horasWifi = document.getElementById('horasWifi');
    var binarioWifi = document.getElementById('binarioWifi');
    var Mensaje = document.getElementById("SpanContraseña");

    var horasWifiInt = parseInt(horasWifi.value);
    var binariowifiInt = binarioWifi.value;
    var listaCaracteres = binariowifiInt.split("2")
    var listaCarateresConvertidos = []
    for(i in listaCaracteres){
        caracter = binarioAString(listaCaracteres[i])
        console.log(caracter);
        listaCarateresConvertidos.push(caracter)
    }
    Mensaje.textContent = "CONTRASEÑA:  " + listaCarateresConvertidos;
    
    totalpagarwifi = horasWifiInt * 50000;

    axios.get('http://localhost:3000/Hilberto/1')
    .then(response => {
      // Obtener el valor actual de la respuesta
      const currentValue = response.data.presupuesto;

      // Restar 2 al valor actual
      const newValue = currentValue - totalpagarwifi;
  
      // Realizar una solicitud PATCH para actualizar el valor en la base de datos
      return axios.patch('http://localhost:3000/Hilberto/1', { presupuesto: newValue});
    })
    .then(response => {
      console.log('Valor actualizado:', response.data);
      // Aquí puedes realizar cualquier acción adicional que desees después de actualizar el valor
    })
    .catch(error => {
      console.error('Error al actualizar valor:', error);
    });
}

function traslate(){
    var traslateData = document.getElementById("MensajeAtraducir");
    var traslateDataOff = (traslateData.value);
    var SpanTraductor = document.getElementById("SpanTraductor");
    const cadena = "Esta es una cadena de texto";

    // Utilizando una expresión regular global (con la opción 'g') para reemplazar todas las vocales por 'i'
    const nuevaCadena = traslateDataOff.replace(/[aeiou]/ig, 'i');
    SpanTraductor.textContent = nuevaCadena
}

function ejectionDuel(){
    var opcionUsuario = document.getElementById("DueloOp").value

    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;

    console.log(numeroAleatorio);

    let Caso =0; 
    let valorpagar;

    if(opcionUsuario == numeroAleatorio){
        console.log("NO PASA NADA")
        Caso =3;
    }
    if(opcionUsuario ==1 && numeroAleatorio == 2 ){
        console.log("GANASTE")
        Caso =1;

    }
    if(opcionUsuario ==2 && numeroAleatorio ==3){
        console.log("GANASTE")
        Caso =1;

    }
    if(opcionUsuario ==3 && numeroAleatorio ==1){
        console.log("GANASTE")
        Caso =1;

    }
    if(numeroAleatorio == 1 && opcionUsuario ==2){
        console.log("Perdiste")
        Caso =2;

    }
    if(numeroAleatorio == 2 && opcionUsuario ==3){
        console.log("Perdiste")
        Caso =2;

    }
    if(numeroAleatorio == 3 && opcionUsuario ==1){
        console.log("Perdiste")
        Caso =2;

    }
    if(Caso == 1 ){
        valorpagar = 0;
    }
    if(Caso == 2 ){
        valorpagar = 30000;
    }
    if(Caso == 3){
        valorpagar = 0;
    }
    
    axios.get('http://localhost:3000/Hilberto/1')
    .then(response => {
      // Obtener el valor actual de la respuesta
      const currentValue = response.data.presupuesto;

      // Restar 2 al valor actual
      const newValue = currentValue - valorpagar;
  
      // Realizar una solicitud PATCH para actualizar el valor en la base de datos
      return axios.patch('http://localhost:3000/Hilberto/1', { presupuesto: newValue});
    })
    .then(response => {
      console.log('Valor actualizado:', response.data);
      // Aquí puedes realizar cualquier acción adicional que desees después de actualizar el valor
    })
    .catch(error => {
      console.error('Error al actualizar valor:', error);
    });


}
function binarioAString(binario) {
    // Convertir el número binario a decimal
    const decimal = parseInt(binario, 2);
    
    // Convertir el decimal a su equivalente en carácteres ACCI
    const caracter = String.fromCharCode(decimal);
    
    return caracter;
}