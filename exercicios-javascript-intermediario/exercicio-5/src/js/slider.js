let imagens = document.querySelectorAll(".slide");
let setaDireita = document.getElementById("seta-direita");
let setaEsquerda = document.getElementById("seta-esquerda");

let imagemAtual = 0;

setaDireita.addEventListener("click",
 function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  esconderSlider();

  imagemAtual++;

  imagens[imagemAtual].classList.add("mostrar");

  mostrarOuEsconderSetas()
});

setaEsquerda.addEventListener("click",
 function () {
    if(imagemAtual === 0){
        return
    }
  esconderSlider();

  imagemAtual--;

  imagens[imagemAtual].classList.add("mostrar");

  mostrarOuEsconderSetas()
});

function esconderSlider() {
  const imagemMostrar = document.querySelector(".mostrar");
  imagemMostrar.classList.remove("mostrar");
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0

    if(naoEhAPrimeiraImagem){
        setaEsquerda.classList.remove("opacity")
    } else {
        setaEsquerda.classList.add("opacity") 
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1 ;
    
    if(chegouNaUltimaImagem){
        setaDireita.classList.add("opacity") 
    } else {
        setaDireita.classList.remove("opacity") 
    }
}
