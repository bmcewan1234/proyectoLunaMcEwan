let formLogin = document.querySelector(".form-login");
let inputEmail = document.querySelector("input[name='email']");
let inputPassword = document.querySelector("input[name='password']");


formLogin.addEventListener("submit",function(event){
    event.preventDefault();

    

    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email === ""){
        alert("el email es obligatorio")
        return ;
    }
    
    if (password === ""){
        alert("la contraseña es obligatoria")
        return;
    }

    if (password.length < 6){
        alert("la contraseña debe tener al menos 6 caracteres")
        return;
    }

    localStorage.setItem("emailUsuario", email);
    location.href = "index.html";


});