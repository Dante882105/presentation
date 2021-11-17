export function contact () {
    const AJAX = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "contactame.html");
        xhr.addEventListener("load", (e)=>{
            if (xhr.status == 200) {
                resolve(e.target.response);
            } else {
                reject("Estamos presentando un inconveniente, porfavor intentalo más tarde")
            }
        })
        xhr.send();
    })
    AJAX.then (res =>{
        contenedor.innerHTML = res;
    });
    AJAX.catch (err => alert(err));
}
export function creaciones() {
    const AJAX = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "portafolio.html");
        xhr.addEventListener("load", (e)=>{
            if (xhr.status == 200) {
                resolve(e.target.response);
            } else {
                reject("Estamos presentando un inconveniente, porfavor intentalo más tarde")
            }
        })
        xhr.send();
    })
    AJAX.then (res =>{
        contenedor.innerHTML = res;
    });
    AJAX.catch (err => alert(err));    
}
export function mapa() {
    const AJAX = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "mapa.html");
        xhr.addEventListener("load", (e) =>{
            if(xhr.status === 200) {
                resolve(e.target.response);
            }else{
                reject("no se puede cargar la página en éste momento, disculpe las molestias");
            }
        })
        xhr.send()
    })
    AJAX.then (res =>{
        contenedor.innerHTML = res;
    })
    AJAX.catch(err => alert (err));
}