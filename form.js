const formulario = document.getElementById ("formulario");
const inputs = document.querySelectorAll ("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{11,14}$/,
    dni: /^\d{5,8}$/ 
}

const campos = {
    nombre: false,
    apellido: false,
    dni: false,
    telefono: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre": 
        if (expresiones.nombre.test (e.target.value)){
            document.getElementById ("grupo__nombre").classList.remove("formulario__grupo-incorrecto");
            document.getElementById ("grupo__nombre").classList.add("formulario__grupo-correcto");
            document.querySelector ("#grupo__nombre i").classList.remove ("bi-exclamation");
            document.querySelector ("#grupo__nombre i").classList.add ("bi-check2-all");
            document.querySelector ("#grupo__nombre .formulario__input-error").classList.remove("formulario__input-error-activo");
            campos ["nombre"] = true;
        } else {
            document.getElementById ("grupo__nombre").classList.add ("formulario__grupo-incorrecto");
            document.getElementById ("grupo__nombre").classList.remove ("formulario__grupo-correcto");
            document.querySelector ("#grupo__nombre i").classList.add ("bi-exclamation");
            document.querySelector ("#grupo__nombre i").classList.remove ("bi-check2-all");
            document.querySelector ("#grupo__nombre .formulario__input-error").classList.add ("formulario__input-error-activo");
            campos ["nombre"] = false;
        }
        break;

        case "apellido": 
        if (expresiones.apellido.test (e.target.value)){
            document.getElementById ("grupo__apellido").classList.remove("formulario__grupo-incorrecto");
            document.getElementById ("grupo__apellido").classList.add("formulario__grupo-correcto");
            document.querySelector ("#grupo__apellido i").classList.remove ("bi-exclamation");
            document.querySelector ("#grupo__apellido i").classList.add ("bi-check2-all");
            document.querySelector ("#grupo__apellido .formulario__input-error").classList.remove("formulario__input-error-activo");
            campos ["apellido"] = true;
        } else {
            document.getElementById ("grupo__apellido").classList.add ("formulario__grupo-incorrecto");
            document.getElementById ("grupo__apellido").classList.remove ("formulario__grupo-correcto");
            document.querySelector ("#grupo__apellido i").classList.add ("bi-exclamation");
            document.querySelector ("#grupo__apellido i").classList.remove ("bi-check2-all");
            document.querySelector ("#grupo__apellido .formulario__input-error").classList.add ("formulario__input-error-activo");
            campos ["apellido"] = false;
        }
        break;

        case "dni": 
        if (expresiones.dni.test (e.target.value)){
            document.getElementById ("grupo__dni").classList.remove("formulario__grupo-incorrecto");
            document.getElementById ("grupo__dni").classList.add("formulario__grupo-correcto");
            document.querySelector ("#grupo__dni i").classList.remove ("bi-exclamation");
            document.querySelector ("#grupo__dni i").classList.add ("bi-check2-all");
            document.querySelector ("#grupo__dni .formulario__input-error").classList.remove("formulario__input-error-activo");
            campos ["dni"] = true;
        } else {
            document.getElementById ("grupo__dni").classList.add ("formulario__grupo-incorrecto");
            document.getElementById ("grupo__dni").classList.remove ("formulario__grupo-correcto");
            document.querySelector ("#grupo__dni i").classList.add ("bi-exclamation");
            document.querySelector ("#grupo__dni i").classList.remove ("bi-check2-all");
            document.querySelector ("#grupo__dni .formulario__input-error").classList.add ("formulario__input-error-activo");
            campos ["dni"] = false;
        }
        break;

        case "telefono": 
        if (expresiones.telefono.test (e.target.value)){
            document.getElementById ("grupo__telefono").classList.remove("formulario__grupo-incorrecto");
            document.getElementById ("grupo__telefono").classList.add("formulario__grupo-correcto");
            document.querySelector ("#grupo__telefono i").classList.remove ("bi-exclamation");
            document.querySelector ("#grupo__telefono i").classList.add ("bi-check2-all");
            document.querySelector ("#grupo__telefono .formulario__input-error").classList.remove("formulario__input-error-activo");
            campos ["telefono"] = true;
        } else {
            document.getElementById ("grupo__telefono").classList.add ("formulario__grupo-incorrecto");
            document.getElementById ("grupo__telefono").classList.remove ("formulario__grupo-correcto");
            document.querySelector ("#grupo__telefono i").classList.add ("bi-exclamation");
            document.querySelector ("#grupo__telefono i").classList.remove ("bi-check2-all");
            document.querySelector ("#grupo__telefono .formulario__input-error").classList.add ("formulario__input-error-activo");
            campos ["telefono"] = false;
        }
        break;

        case "email": 
        if (expresiones.email.test (e.target.value)){
            document.getElementById ("grupo__email").classList.remove("formulario__grupo-incorrecto");
            document.getElementById ("grupo__email").classList.add("formulario__grupo-correcto");
            document.querySelector ("#grupo__email i").classList.remove ("bi-exclamation");
            document.querySelector ("#grupo__email i").classList.add ("bi-check2-all");
            document.querySelector ("#grupo__email .formulario__input-error").classList.remove("formulario__input-error-activo");
            campos ["email"] = true;
        } else {
            document.getElementById ("grupo__email").classList.add ("formulario__grupo-incorrecto");
            document.getElementById ("grupo__email").classList.remove ("formulario__grupo-correcto");
            document.querySelector ("#grupo__email i").classList.add ("bi-exclamation");
            document.querySelector ("#grupo__email i").classList.remove ("bi-check2-all");
            document.querySelector ("#grupo__email .formulario__input-error").classList.add ("formulario__input-error-activo");
            campos ["email"] = false;
        }
        break;
    }
}



inputs.forEach ((input)=> {
    input.addEventListener ('keyup', validarFormulario);
    input.addEventListener ('blur', validarFormulario);
})

formulario.addEventListener ("submit", (e)=> {
    e.preventDefault ();

    if (campos.nombre && campos.apellido && campos.dni && campos.telefono && campos.email){
        formulario.reset ();

        document.getElementById ("formulario__mensaje-exito").classList.add ("formulario__mensaje-exito-activo");


    } else {
        document.getElementById ("formulario__mensaje").classList.add ("formulario__mensaje_activo");
        setTimeout (()=> {
            document.getElementById ("formulario__mensaje").classList.remove ("formulario__mensaje_activo")
        }, 2000);
    }
});