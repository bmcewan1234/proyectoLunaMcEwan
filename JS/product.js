let queryString = location.search;
let id = new URLSearchParams(queryString).get('id');
let urlDetalle = 'https://dummyjson.com/products/'

console.log('ID:', id)
console.log('url:',urlDetalle)

fetch(urlDetalle)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log('el error es:', error);
    });