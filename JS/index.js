let formulario = document.querySelector(".barradebusqueda")
let inputForm = document.querySelector(".barradebusqueda input")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    if (inputForm.value == ""){
        return alert("por favor esrciba tres caracteres o mas")
    }
    if (inputForm.value.length < 3){
        return alert("por favor esrciba tres caracteres o mas")
    }

    localStorage.setItem("input", inputForm.value)
    this.submit()
})