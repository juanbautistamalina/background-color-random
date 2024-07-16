const body = document.querySelector("body");
const textoColor = document.getElementById("color-txt");
const boton = document.querySelector("button");



boton.addEventListener("click", colorAleatorio)


function colorAleatorio(){
    let digito = "0123456789ABCDEF";
    let color = "#";
    let aleatorio;
    
    for(let i = 0; i<6; i++){
        aleatorio =  Math.floor(Math.random() * digito.length);
        color += digito[aleatorio];
        console.log(color);
    }


    body.style.backgroundColor = color;
    textoColor.innerHTML = color;
    console.log("New Color: " + color);
}



