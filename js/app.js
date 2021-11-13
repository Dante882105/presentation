import { contact } from "./ajax.js";
import { creaciones } from "./ajax.js";
let contenedor = document.getElementById("contenedor");
let main = document.querySelector("main");
let contactame = document.getElementById("contactame");
contactame.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    contact();
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
})
let home = document.getElementById("home").addEventListener("click", ()=>{
    main.className = "";
    contenedor.className = "hidden";
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
})
let portafolio = document.getElementById("portafolio");
portafolio.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    main.className = "hidden";
    contenedor.className = "";
    creaciones();
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
})
let nav = document.querySelector("nav");
let enlaces = document.querySelector(".enlaces-menu");
let hamburguer = document.getElementById("hamburguer");
hamburguer.addEventListener("click",(e)=>{
    nav.classList.toggle("activo");
    enlaces.classList.toggle("activado");
})