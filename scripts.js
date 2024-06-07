let numberOne, NumberTwo, parOuImpar

alert("Vamos calcular a Soma, Subtracao, Multiplicacao, Divisao e o Resto da divisao de dois numeros")

numberOne = Number(prompt("Insira um numero:"))
NumberTwo = Number(prompt("Insira outro numero:"))
parOuImpar = (numberOne + NumberTwo)
    

alert(`Soma: ${numberOne + NumberTwo}`)
alert(`Subtracao: ${numberOne - NumberTwo}`)
alert(`Multiplicacao: ${numberOne * NumberTwo}`)
alert(`Divisao: ${numberOne / NumberTwo}`)
alert(`Resto da divisao: ${numberOne % NumberTwo}`)


if (parOuImpar % 2 === 0) {
        alert("A soma dos numeros é Par")
} else {
        alert("A soma dos numeros é Impar")
    }

if (numberOne == NumberTwo){
    alert("Os numeros inseridos sao iguais")
} else {
    alert("Os numeros inseridos sao diferentes")
}