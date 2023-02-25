
const salario = Number(prompt("Digite o Valor de seu salário:"))
const aumento = Number(prompt("Digite a % de aumento do seu salário:"))

let resultado = salario+((aumento*salario)/100)

document.write("Novo salario: "+resultado)