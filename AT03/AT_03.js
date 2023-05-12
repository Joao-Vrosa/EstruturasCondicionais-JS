/*
3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N).
Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade.
Caso contrário, mostrar mensagem "Não pode se vacinar!".


let nome = prompt("Qual o seu nome: ")
let idade = Number(prompt("Qual a sua idade: "))
let comorbidade = prompt("Possui comrbidade S/N? ")

if (idade >= 60 || comorbidade.toUpperCase() == "S") {
    alert("Pode se vacinar!")
} else {
    alert("Não pode se vacinar!")
}

*/

let nome = document.getElementById("inpu-nome")
let idade = document.getElementById("inpt-idade")
let comorbidade = document.getElementById("inpt-comorbidade")

let nomePessoa = nome
let idadePessoa = Number(idade.value)
let comorbidadePessoa = comorbidade.value

function verificarComorbidade() {
    if (idadePessoa >= 60 || comorbidadePessoa.toUpperCase() == "S") { //Não funcionou.
        document.getElementById("div-resultado").innerHTML = "Pode vacinar!"
    } else {
        document.getElementById("div-resultado").innerHTML = "Não pode vacinar!"
    }
}