
let bienvenida2 = document.querySelector(".bienvenidaEmail")
let logout2 = document.querySelector(".logout")
let linkLogin2 = document.querySelector(".link-login");
let linkRegister2 = document.querySelector(".link-register");


logout2.addEventListener("click", function() {
    localStorage.removeItem("emailUsuario")
    bienvenida2.style.display = 'none'
    logout2.style.display = 'none'
    linkLogin2.style.display = 'block'
    linkRegister2.style.display = 'block'
})

