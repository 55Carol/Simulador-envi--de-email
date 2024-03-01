document.addEventListener("DOMContentLoaded", function () {
    //seleccionar los elementos de la interfas (cada caja)

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");

    //Asignar eventos 
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);
    
    function validar(e) {
        if (e.target.value.trim() === "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else{
            console.log("si hay algo...")
        }
    }

    function mostrarAlerta(mensaje, referencia) {
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2");
   

        //inyectar el error al formulario
        referencia.appendChild(error)
    }
});