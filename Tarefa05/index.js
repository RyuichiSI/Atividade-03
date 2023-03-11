class Estudante {
    constructor(nome,email,RA,curso,disciplinas = []){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }
}
const estudante1 = new Estudante("Ryuichi","ryuichi.iwamatsu@fatec.sp.gov.br","1050482123035","ADS",["A","B","C"])
const estudante2 = new Estudante("Roberto","roberto.iwamatsu@fatec.sp.gov.br","1112223334445","Comercio exterior",["C","D","E"])
console.log(estudante1)
console.log(estudante2)