import { ajax } from "./ajax.js";
let options = document.querySelectorAll(".options");
let contenedor = document.getElementById("contenedor");
let main = document.querySelector("main");
let home = document.getElementById("home");
home.addEventListener("click",()=>{
    main.className = "";
    contenedor.className = "hidden";
})
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", router);
}
function router(e) {
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    ajax(e.target.id + '.html');
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
}
//Contactar con redes sociales
const fragment = document.createDocumentFragment();
let ul = document.createElement("ul")
ul.className = "contact";
let whatsapp = document.createElement("li");
whatsapp.id = "whatsapp";
whatsapp.innerHTML='<a id="whatsapp" href="https://wa.me/573182251168?text=Me%20interesa%20conocer%20tu%20trabajo" target="_blank"><i class="fab fa-whatsapp-square"></i></a>';
let telegram = document.createElement("li");
telegram.id = "telegram";
telegram.innerHTML='<a id="telegram" href=""><i class="fab fa-telegram"></i></a>';

const redes = document.querySelector(".redes");
const msj = document.querySelector(".msj");
redes.addEventListener("mouseenter", (e)=>{
    e.preventDefault();
    redes.classList.add("one");
    ul.appendChild(whatsapp);
    ul.appendChild(telegram);
    fragment.appendChild(ul);
    redes.appendChild(fragment);
})
redes.addEventListener("mouseleave", (e)=>{
    e.preventDefault();
    redes.classList.remove("one");
    ul.remove();
})
//menú hamburguesa
let nav = document.querySelector("nav");
let enlaces = document.querySelector(".enlaces-menu");
let hamburguer = document.getElementById("hamburguer");
hamburguer.addEventListener("click",(e)=>{
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
})
//animación en menú
const menu = document.querySelectorAll("nav ul li");
menu.forEach((e)=>{
    e.addEventListener("mouseover", function(e) {
        e.target.classList.add("signal");
        setTimeout(() => {
            e.target.classList.remove("signal");
        }, 1000);
    },false)
})
