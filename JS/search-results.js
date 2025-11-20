

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("query");

let titulo = document.querySelector(".tituloSearch");
let contenedor = document.querySelector(".productos-search .cajas-productos");
titulo.innerHTML = "Resultado de busqueda de: " + busqueda;



fetch("https://dummyjson.com/products/search?q=" + busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let contenido = "";

        if (productos.length == 0) {
            contenedor.innerHTML = "<p>No se encontraron resultados relacionados</p>";
            return;
        }

        
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
