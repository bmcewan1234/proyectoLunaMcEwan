let formulario = document.querySelector(".barradebusqueda")
let inputForm = document.querySelector(".barradebusqueda input")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    if (inputForm.value == "") {
        return alert("por favor esrciba tres caracteres o mas")
    }
    if (inputForm.value.length < 3) {
        return alert("por favor esrciba tres caracteres o mas")
    }

    localStorage.setItem("input", inputForm.value)
    this.submit()
})

let seccionesProductos = document.querySelectorAll(".productos .cajas-productos");
let seccionFragrances = seccionesProductos[1];
let seccionBeauty = seccionesProductos[0];

cargarSeccion("fragrances", seccionFragrances);
cargarSeccion("beauty", seccionBeauty);

function cargarSeccion(nombreCategoria, contenedor){
    fetch("https://dummyjson.com/products/category/" + nombreCategoria)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let productos = data.products;
            let contenido = "";

            for (let i = 0; i < productos.length && i < 10; i++) {
                let p = productos[i];
                contenido += `
                    <article>
                        <img src="${p.thumbnail}" alt="${p.title}">
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <h4>$${p.price}</h4>
                        <a href="product.html?id=${p.id}">Ver detalle</a>
                    </article>
                `;
            }
            contenedor.innerHTML = contenido;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
            contenedor.innerHTML = "<p>Hubo un error al cargar los productos</p>";
        })    
}
