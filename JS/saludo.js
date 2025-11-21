let emailGuardado = localStorage.getItem("emailUsuario");

if (emailGuardado !== null){
    let listaMenu = document.querySelector(".nav-header ul");

    let linkLogin = document.querySelector(".link-login");
    let linkRegister = document.querySelector(".link-register");

    if (linkLogin){
        linkLogin.style.display = "none";
    }

    if (linkRegister){
        linkRegister.style.display = "none";
    }
    
    listaMenu.innerHTML +=`
        <li><a>Bienvenido:${emailGuardado}</a></li>
        <li><a class="logout" href= "">Logout</a></li>
    `;
}