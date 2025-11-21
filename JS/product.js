let queryString = location.search;
let id = new URLSearchParams(queryString).get('id');
let urlDetalle = 'https://dummyjson.com/products/'+ id;

console.log('ID:', id)
console.log('url:',urlDetalle)

fetch(urlDetalle)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let titulo = document.querySelector(".bloque-productos h2");
        let imagen = document.querySelector(".camisetaarg img");
        let info = document.querySelector(".info-del-producto"); 
        console.log("info es", info)

        titulo.innerHTML = data.title

        imagen.src = data.thumbnail;
        imagen.alt = data.title;

        let contenido = `
            <h2>${data.title}</h2>
            <p>marca: ${data.brand}</p>
            <p>precio: ${data.price}</p>
            <p>descripcion: ${data.description}</p>
            <p>stock: ${data.stock}</p>
            <p>categotia:
                <a href="category.html?category=${data.category}">
                    ${data.category}
                </a>
            </p>
            <ul class="tags"></ul>
                    
        `;

        info.innerHTML = contenido;

        let listaTags = document.querySelector(".tags");
        let contenidoTags= "";

        if(data.tags && data.tags.length > 0){
            for (let i=0; data.tags.length && i < 3; i++){
                contenidoTags +="<li>" + data.tags[i] + "</li>";
            }
        }

        listaTags.innerHTML = contenidoTags;
    }) 
    .catch(function(error){
        console.log('el error es:', error);
    });