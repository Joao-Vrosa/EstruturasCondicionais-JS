/*
2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria.
Mostrar o salário mensal do funcionário e dizer se está abaixo ou acima do piso salarial mensal.


let salarioAnual, pisoSalarialMensal, salarioMensal

salarioAnual = Number(prompt("Salario anual: "))
pisoSalarialMensal = Number(prompt("Piso salarial mensal: "))

salarioMensal = salarioAnual / 12

if (salarioMensal < pisoSalarialMensal) {
    console.log("Salario a baixo do piso!")
    console.log(`Seu salario mensal: R$${salarioMensal.toFixed(2)}\nPiso salarial mensal: R$${pisoSalarialMensal.toFixed(2)}`)

} else if (salarioMensal == pisoSalarialMensal) {
    console.log("Salario igual ao piso!")
    console.log(`Seu salario mensal: R$${salarioMensal.toFixed(2)}\nPiso salarial mensal: R$${pisoSalarialMensal.toFixed(2)}`)

} else {
    console.log("Salario a cima do piso!")
    console.log(`Seu salario mensal: R$${salarioMensal.toFixed(2)}\nPiso salarial mensal: R$${pisoSalarialMensal.toFixed(2)}`)

}

*/

let salarioAnual = document.getElementById("inpt-salarioAnual")
let pisoSalarialMensal = document.getElementById("inpt-pisoMensal")


function calcularPiso() {

    let salarioMensal = Number(salarioAnual.value) / 12

    if (salarioMensal < pisoSalarialMensal.value) {
        document.getElementById("div-resultado").innerHTML = `Salario a baixo do piso! | Seu salario mensal: R$${salarioMensal.toFixed(2)}`

    } else if (salarioMensal == pisoSalarialMensal.value) {
        document.getElementById("div-resultado").innerHTML = `Salario igual ao piso! | Seu salario mensal: R$${salarioMensal.toFixed(2)}`

    } else {
        document.getElementById("div-resultado").innerHTML = `Salario a cima do piso! | Seu salario mensal: R$${salarioMensal.toFixed(2)}`

    }

}

