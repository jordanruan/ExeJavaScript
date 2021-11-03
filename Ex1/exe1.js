/* 1.Crie um script que contenha 3 campos de formulario(text) , onde será aplicado via eventos as definições abaixo
. Ao selecionar um campo o mesmo deve ter a cor verde
. Ao sair do campo o mesmo deve ficar com a cor vermelha */


var campos = document.querySelectorAll('input')

campos.forEach(elemento => {
    elemento.addEventListener("focus", (el) => {
        el.target.style.backgroundColor = "green";
    })

    elemento.addEventListener("blur", (el) => {
        el.target.style.backgroundColor = "red";
    })

})