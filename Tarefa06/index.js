import express from "express"
const app = express()
const port = 3000
class Pessoa {
    constructor(nome,email,idade,hobbies = []){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies
    }
}
app.get('/',(req,res)=>{
    const pessoa = new Pessoa("Ryuichi","ryuichi.iwamatsu@fatec.sp.gov.br",21,["Jogos","Televisao"])
    const pessoaJson= JSON.stringify(pessoa)
    res.setHeader("Content-Type","application/json")
    res.send(pessoaJson)
})

app.get('/lista',(req,res)=>{
    const pessoa1 = new Pessoa("Ryuichi","ryuichi.iwamatsu@fatec.sp.gov.br",21,["Jogos","Televisao"])
    const pessoa2 = new Pessoa("Roberto","Narintcho_takeda@hotmail.com",50,["Celular","Televisao"])
    const pessoa3 = new Pessoa("Patrticia","pathi1786@hotmail.com",41,["Livros","Televisao"])
    const pessoas = [pessoa1,pessoa2,pessoa3]
    const pessoasJson = JSON.stringify(pessoas)
    res.setHeader("Content-Type","application/json")
    res.send(pessoasJson)
})

app.listen(port,()=>{
    console.log('App executando na porta '+port)
})

