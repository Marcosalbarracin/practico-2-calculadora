let pantalla = document.getElementById("pantalla");
let igual = document.getElementById("igual");
let btn = document.getElementsByClassName("btn");
let operaciones = document.getElementsByClassName("operacion");
let botonAC = document.getElementById("AC");
let botonELM = document.getElementById("ELM");
let punto = document.getElementById("punto");
let pantallaresultado = document.getElementById("resultado");
let operacion = "";
let operando1 = "";
let operando2 = "";


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (operacion === "") {
            operando1 += btn[i].innerText;
            pantalla.innerText = operando1;
        } else {
            operando2 += btn[i].innerText;
            pantalla.innerText = operando1 + " " + operacion + " " + operando2;
        }
    });
}
botonELM.addEventListener("click", () => {
    if(operacion ===""){
        operando1 = operando1.slice(0, -1);
        pantalla.innerText = pantalla.innerText.slice(0, -1);
    }else{
        operando2 = operando2.slice(0, -1);
        pantalla.innerText = pantalla.innerText.slice(0, -1);
    }
});

punto.addEventListener("click", () => {
    if(!pantalla.innerText.includes(".")){
        if(operacion === ""){
            operando1 += punto.innerText
        }else{
            operando2 += punto.innerText
        }
        pantalla.innerText += punto.innerText
    }
});


botonAC.addEventListener("click", () => {
    operando1 = "";
    operando2 = "";
    operacion = "";
    pantalla.innerText = "0";
    pantallaresultado.innerText = "";
});

for (let i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener("click", () => {
        switch (operaciones[i].innerText) {
            case "+":
                operacion = "+";
                break;
            case "-":
                operacion = "-";
                break;
            case "*":
                operacion = "*";
                break;
            case "/":
                operacion = "/";
                break;
            default:
                console.log("operacion no valida");
        }
        if (operando1 !== "") {
            pantalla.innerText = operando1 + " " + operacion + " " + operando2;
        }
    });
}
igual.addEventListener("click", () => {
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    switch (operacion) {
        case "+":
            pantallaresultado.innerText = operando1 + operando2;
            operando1 = operando1 + operando2;
            operando2 = "";
            break;
        case "-":
            pantallaresultado.innerText = operando1 - operando2;
            operando1 = operando1 - operando2;
            operando2 = "";
            break;
        case "/":
            pantallaresultado.innerText = operando1 / operando2;
            operando1 = operando1 / operando2;
            operando2 = "";
            break;
        case "*":
            pantallaresultado.innerText = operando1 * operando2;
            operando1 = operando1 * operando2;
            operando2 = "";
            break;
        default:
            console.log("operacion no valida");
    }
});