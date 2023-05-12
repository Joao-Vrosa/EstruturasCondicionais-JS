/*
6) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.
*/

let idadeUm = document.getElementById("idadeUm")
let idadeDois = document.getElementById("idadeDois")
let idadeTres = document.getElementById("idadeTres")
let idadeQuatro = document.getElementById("idadeQuatro")
let idadeCinco = document.getElementById("idadeCinco")


function verificarDados() {
    
    let listaIdade = [Number(idadeUm.value), Number(idadeDois.value), Number(idadeTres.value), Number(idadeQuatro.value), Number(idadeCinco.value)]
    let mediaIdades = (Number(idadeUm.value) + Number(idadeDois.value) + Number(idadeTres.value) + Number(idadeQuatro.value) + Number(idadeCinco.value)) / 5

    let maiorIdade = Math.max.apply(null, listaIdade)

    document.getElementById("div-resultado").innerHTML = `Média de idades: ${mediaIdades} | Maior idade: ${maiorIdade}`

}

