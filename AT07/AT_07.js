/*
7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123".
Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!",
caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).
*/

// Variaveis de Entrada
let userName = document.getElementById("inpt-userName")
let passWord = document.getElementById("inpt-password")

let corrctUser = "admin"
let correctPassWd = "123"

//Função
function validarLogin() {
    if (userName.value == corrctUser && passWord.value == correctPassWd) {
        document.getElementById("div-msgSaida").innerHTML = "Login efetuado!"

    } else if (userName.value != corrctUser && passWord.value != correctPassWd) {
        document.getElementById("div-msgSaida").innerHTML = "Usuário e Senha incorretos!"

    } else if (userName.value == corrctUser && passWord.value != correctPassWd) {
        document.getElementById("div-msgSaida").innerHTML = "Senha Incorreta!"

    } else if (userName.value != corrctUser && passWord.value == correctPassWd) {
        document.getElementById("div-msgSaida").innerHTML = "Usuário Incorreto!"

    }
}

