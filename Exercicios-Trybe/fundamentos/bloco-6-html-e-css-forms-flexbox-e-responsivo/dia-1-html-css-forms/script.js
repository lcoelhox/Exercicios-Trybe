const buttonEnviar = document.querySelector("#buttonEnviar")

function stopButton (event){
    event.preventDefault();
}
buttonEnviar.addEventListener("click", stopButton);