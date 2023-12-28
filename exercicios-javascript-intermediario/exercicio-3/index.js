const bloco = document.querySelector(".quadrado");
bloco.addEventListener("click", () => {
    const classAzulExiste = bloco.classList.contains('azul')
    if(classAzulExiste){
        bloco.classList.remove('azul')
    } else{
        bloco.classList.add('azul')
    }

})
// A condição bloco.classList.contains("minhaClasse") verifica se o elemento referenciado pela variável quadrado possui a classe CSS chamada "minhaClasse". Se a classe estiver presente, 
// o bloco de código dentro do if será executado.