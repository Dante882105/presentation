import { contact, mapa } from "./ajax.js";
import { creaciones } from "./ajax.js";
let contenedor = document.getElementById("contenedor");
let main = document.querySelector("main");
let contactame = document.getElementById("contactame");
contactame.addEventListener("click", (e) => {
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    contact();
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
});
let home = document.getElementById("home");
let profession = document.getElementById("profession");
home.addEventListener("click", (e)=>{
    e.preventDefault();
    main.className = "";
    contenedor.className = "hidden";
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
});
profession.addEventListener("click", (e)=>{
    e.preventDefault();
    main.className = "";
    contenedor.className = "hidden";
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
});
let portafolio = document.getElementById("portafolio");
portafolio.addEventListener("click", (e) => {
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    creaciones();
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
});
let barrio = document.getElementById("mapa");
barrio.addEventListener("click", (e) =>{
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    mapa();
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
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