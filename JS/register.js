let formRegister = document.querySelector(".form-register");
let inputEmail = document.querySelector("input[name='email']");
let inputPassword = document.querySelector("input[name='password']");
let inputPassword2 = document.querySelector("input[name='password2']");
let terminosyCondiciones= document.querySelector("input[name=terminosycondiciones]");

formRegister.addEventListener("submit", function(event){
    event.preventDefault();


    if (inputEmail.value == ""){
        alert("el email es obligatorio");
        return;
    }
    if (inputPassword.value == ""){
        alert("la contraseña es obligatoria");
        return;
    }
    if (inputPassword.length < 6){
        alert ("la contraseña debe tener al menos 6 caracteres")
        return;
    }
    if (inputPassword2 == ""){
        alert("debes repetir la contraseña")
        return;
    }
    if (inputPassword !== inputPassword2){
        alert("las contraseñas no coinciden")
        return;
    
    } 

    if (terminosyCondiciones == ""){
        alert("debes aceptar los terminos y condicions")
        return;
        
    }else{
        this.submit
    }
    
    
})