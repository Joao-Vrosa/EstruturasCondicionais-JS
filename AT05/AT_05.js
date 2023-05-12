/*
5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, 
ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), 
na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).
*/

let peso = document.getElementById("inpt-peso")
let altura = document.getElementById("inpt-altura")


function calcularIMC() {

    let imcCalc = Number(peso.value) / (Number(altura.value) * Number(altura.value))

    if (imcCalc < 18) {
        document.getElementById("div-resultado").innerHTML = `Abaixo do peso | Seu IMC: ${imcCalc.toFixed()}`

    } else if (imcCalc >= 18 && imcCalc <= 25) {
        document.getElementById("div-resultado").innerHTML = `Faixa de peso ideal | Seu IMC: ${imcCalc.toFixed()}`

    } else {
        document.getElementById("div-resultado").innerHTML = `Acima do peso | Seu IMC: ${imcCalc.toFixed()}`

    }

}

