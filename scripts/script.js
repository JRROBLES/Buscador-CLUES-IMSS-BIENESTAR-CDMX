const articulos = document.querySelectorAll(".articulo");
const loadingAnimation = document.querySelector("#loading-animation");
loadingAnimation.style.display = "none";
document.addEventListener("keyup", e => {
  const buscador = e.target;
  if (buscador.id === "buscador") {
    loadingAnimation.style.display = "";
    let valorBusqueda = buscador.value.toUpperCase();
    articulos.forEach(articulo => {
      let contenido = articulo.textContent.toUpperCase();
      if (contenido.includes(valorBusqueda)) {
        articulo.classList.remove("filtro");
      } else {
        articulo.classList.add("filtro");
      }
    });
    setTimeout(() => {
      loadingAnimation.style.display = "none";
    }, 500);
  }
});