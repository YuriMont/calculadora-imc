let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");

function calcularIMC(){
    let imc = peso.value / (altura.value ** 2);

    console.log(imc)

    if(imc < 18.5){
        resultado.innerHTML = "Baixo peso";
    }else if(imc >= 18.5 && imc <= 29.9){
        resultado.innerHTML = "Peso adequado";
    }else if(imc>=30){
        resultado.innerHTML = "Sobrepeso";
    }
}

button.addEventListener("click", calcularIMC);