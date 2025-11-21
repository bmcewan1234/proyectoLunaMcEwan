let emailGuardado = localStorage.getItem("emailUsuario");
let linkLogin1 = document.querySelector(".link-login");
let linkRegister1 = document.querySelector(".link-register");
let linkLogout1 = document.querySelector(".logout")
let linkBienvenida1 = document.querySelector(".bienvenidaEmail")

if (emailGuardado){
    linkLogin1.style.display = "none";
    linkRegister1.style.display = "none";
    linkLogout1.style.display = "block";
    linkBienvenida1.style.display = "block";
    linkBienvenida1.innerText = 'hola' + emailGuardado

}
