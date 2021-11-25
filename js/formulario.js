function validarFormulario(e){
    e.preventDefault();
    switch(e.target.name){
        case "nombre":
            if(EXPRESIONES.nombre.test(e.target.value)){
                let div1 = document.getElementById("grupo__nombre").classList.remove("formulario__incorrecto");
                let p1 = document.querySelector("#grupo__nombre .msj1").innerHTML="El campo está escrito correctamente";
            }else{
                let div1 = document.getElementById("grupo__nombre").classList.add("formulario__incorrecto");
                let p1 = document.querySelector("#grupo__nombre .msj1").innerHTML="Lo escrito en el campo no es un nombre, vuelva a intentarlo";
            }
        break;
        case "empresa":
            if(EXPRESIONES.empresa.test(e.target.value)){
                let div2 = document.getElementById("grupo__empresa").classList.remove("formulario__incorrecto");
                let p2 = document.querySelector("#grupo__empresa .msj2").innerHTML="Una gran compañía sin duda";
            }else{
                let div2 = document.getElementById("grupo__empresa").classList.add("formulario__incorrecto");
                let p2 = document.querySelector("#grupo__empresa .msj2").innerHTML="Se debe verificar el nombre de su empresa";
            }
        break;
        case "telefono":
            if(EXPRESIONES.telefono.test(e.target.value)){
                let div3 = document.getElementById("grupo__telefono").classList.remove("formulario__incorrecto");
                let p3 = document.querySelector("#grupo__telefono .msj3").innerHTML="Gracias por compartir tu número";
            }else{
                let div3 = document.getElementById("grupo__telefono").classList.add("formulario__incorrecto");
                let p3 = document.querySelector("#grupo__telefono .msj3").innerHTML="Recuerda no agregar caracteres, caracteres especiales o un número que no coincide con el de un telefono fijo o celular";
            }
        break;
        case "correo":
            if(EXPRESIONES.correo.test(e.target.value)){
                let div4 = document.getElementById("grupo__correo").classList.remove("formulario__incorrecto");
                let p4 = document.querySelector("#grupo__correo .msj4").innerHTML="Gracias, lo contactaré pronto";
            }else{
                let div4 = document.getElementById("grupo__empresa").classList.add("formulario__incorrecto");
                let p4 = document.querySelector("#grupo__correo .msj4").innerHTML="Ese correo no es válido, verifiquelo nuevamente por favor.";
            }
        break;
        default:
        break;
    }
}
const EXPRESIONES = {
    nombre: /^[a-zA-Z\s]{1,40}$/,
    empresa: /^[a-zA-Z0-9]{1,20}$/,
    telefono: /^\d{7,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    comentario: /^[a-zA-z\s]{1,300}$/
}
let formulario = document.getElementById("form");
let inputs = document.querySelectorAll("#form input");

formulario.addEventListener("submit", (e)=>{ 
    e.preventDefault();
})

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});