/*
8) Elaborar um programa que alerte sobre os riscos de animais em extinção. 
O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). 
Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", 
populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, 
são classificadas como "Espécie vulnerável!"
*/

let nomeEspecie = document.getElementById("inpt-nomeEspecie")
let populacaoEspecie = document.getElementById("inpt-populacao")


function verificarEspecie() {
    
    if (populacaoEspecie.value >= 200 && populacaoEspecie.value <= 499) {
        document.getElementById("div-resultado").innerHTML = "Espécie criticamente em perigo!"

    } else if (populacaoEspecie.value >= 500 && populacaoEspecie.value <= 999) {
        document.getElementById("div-resultado").innerHTML = "Espécie em perigo!"

    } else if (populacaoEspecie.value >= 1000 && populacaoEspecie.value <= 5000) {
        document.getElementById("div-resultado").innerHTML = "Espécie vulnerável!"
    }
}