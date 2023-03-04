import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()
let valor = Number(prompt("Digite um valor: "))
let variavel = 1
let contador = 0
while(variavel != 0){
    console.log(chalk.blue.bgRed.bold("Digite 0 para sair do loop"))
    variavel = Number(prompt(chalk.green.bgGray.italic("Digite um valor:")))
    valor+=variavel
    contador++
}
console.log(chalk.red.bold(`A média dos numeros e de : ${valor/contador}!`))


