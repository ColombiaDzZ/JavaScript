// #1 Primeira execução simplificada mas sem atender os requisitos solicitados no desafio

// let hero = "Kratos"
// let level = 100
// let xp = 10000
// let resultado = "Imortal"

// for (let contador = 0; contador < 1; contador++)
// {
//     console.log(contador)
//     console.log("Sua experiência é de " + xp, "e você é um " + resultado)
//     console.log()
// }
// console.log("O heroi " + hero,  "Está no nível " + level)
//
//

//////////////////////////////////////////////////////////////////////

// #2 Segunda execução que atende os requisitos solicitados no desafio

let heroi = "Kratos"
let xpPoints = 16085;

let levelHero;

if (xpPoints < 1000){
    levelHero = "Ferro"
} else if (xpPoints >= 1001 && xpPoints <= 2000) {
    levelHero = "Bronze";
} else if (xpPoints >= 2001 && xpPoints <= 4000) {
    levelHero = "Prata";
} else if (xpPoints >= 4001 && xpPoints <= 6000) {
    levelHero = "Ouro";
} else if (xpPoints >= 6001 && xpPoints <= 8000) {
    levelHero = "Platina";
} else if (xpPoints >= 8001 && xpPoints <= 10000) {
    levelHero = "Diamante";
} else if (xpPoints >= 10001 && xpPoints <= 12000) {
    levelHero = "Mestre";
} else if (xpPoints >= 12001 && xpPoints <= 14000) {
    levelHero = "Ascendente";
} else if (xpPoints >= 14001 && xpPoints <= 16000) {
    levelHero = "Imortal";
} else if (xpPoints >= 16001 && xpPoints <= 18000) {
    levelHero = "Radiante";
}
console.log("O guerreiro lendário é " + heroi, "está no nível " + levelHero);