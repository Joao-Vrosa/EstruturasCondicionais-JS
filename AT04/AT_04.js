/*
4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"


let num = Number(prompt("Digite um numero: "))

if (num % 2 == 0) {
    alert("Numero Par!")
} else {
    alert("Numero Impar!")
}

*/

let numero = document.getElementById("inpt-numero")


function verificarNumero() {
    if (numero.value % 2 == 0) {
        document.getElementById("div-resultado").innerHTML = `O número ${numero.value} é par!`
    } else {
        document.getElementById("div-resultado").innerHTML = `O número ${numero.value} é impar!`
    }
}

