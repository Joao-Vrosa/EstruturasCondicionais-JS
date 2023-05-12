/*
1) Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média e mostrada na tela. 
Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", se for menor que 7, mostrar uma mensagem "Reprovado".
(DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).
*/

let media

// Pegando notas
let notaUm = document.getElementById("inptUm")
let notaDois = document.getElementById("inptDois")
let notaTres = document.getElementById("inptTres")
let notaQuatro = document.getElementById("inptQuatro")

// Função
function calcularMedia() {
    media = (Number(notaUm.value) + Number(notaDois.value) + Number(notaTres.value) + Number(notaQuatro.value)) / 4

    if (media >= 7) {
        document.getElementById("divResultado").innerHTML = `Sua média: ${media.toFixed(2)} | Parabéns, você foi aprovado!`
    
    } else if (media < 5) {
        document.getElementById("divResultado").innerHTML = `Sua média: ${media.toFixed(2)} | Reprovado!`

    } else {
        document.getElementById("divResultado").innerHTML = `Sua média: ${media.toFixed(2)} | Recuperação!`

    }

}

