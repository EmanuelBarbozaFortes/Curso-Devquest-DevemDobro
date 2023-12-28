
const btn = document.getElementById("btn")
let bloco1 = document.querySelector(".azul")
let bloco2 = document.querySelector(".vermelho")
btn.addEventListener("click",trocarCor)
console.log(trocarCor);

function trocarCor() {
    bloco1.classList.remove('azul')
    bloco1.classList.add('amarelo')
    bloco2.classList.remove('vermelho')
    bloco2.classList.add('laranja')

}
