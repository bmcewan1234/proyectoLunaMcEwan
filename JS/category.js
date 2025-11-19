
let querystring = window.location.search;
querystring = querystring.replace("?", "");
let separo = querystring.split("=");
let categoria = separo[1];

let titulo = document.querySelector(".tituloCategory");
let contenedor = document.querySelector(".productos-search .cajas-productos");
titulo.innerHTML = categoria;



fetch("https://dummyjson.com/products/category/" + categoria)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let contenido = "";

        for (let i = 0; i < productos.length; i++) {
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

