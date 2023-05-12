/*
9) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região.
Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados).
Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).
*/

let populcao = document.getElementById("inpt-densidade")
let area = document.getElementById("inpt-area")

let densidade


function verificarDensidade() {
    densidade = Number(populcao.value) / Number(area.value)

    if (densidade < 25) {
        document.getElementById("div-resultado").innerHTML = `Densidade: ${densidade.toFixed(2)} | Baixa`
    } else if (densidade > 25 && densidade < 100) {
        document.getElementById("div-resultado").innerHTML = `Densidade: ${densidade.toFixed(2)} | Média`
    } else {
        document.getElementById("div-resultado").innerHTML = `Densidade: ${densidade.toFixed(2)} | Alta`
    }
}