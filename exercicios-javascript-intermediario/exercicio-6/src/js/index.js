const item = document.querySelectorAll(".item");

item.forEach(function (item) {
  item.addEventListener("click", function () {
    const itemAtivoAtual = document.querySelector(".ativo");
    itemAtivoAtual.classList.remove("ativo");
    
    item.classList.add("ativo");
  });
});
