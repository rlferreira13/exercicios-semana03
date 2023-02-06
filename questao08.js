let btnAdicionar = document.querySelector("#adicionar");
let btnSalvar = document.querySelector("#salvar");
let btnMostrar = document.querySelector("#mostrarMsg");
let input = document.querySelector("#input");
let resultado = document.querySelector("#resultado")


function adicionar(){
    resultado.innerHTML= (`${input.value}`)
}

function salvar(){
    if (input.value.length < 1){
        alert("Insira algum texto antes de clicar no botão salvar");
    }
    localStorage.setItem(input.value,input.value);
    resultado.innerHTML= (`Texto salvo no local storage com sucesso.`)
}
function mostrarMsg(){

    if (localStorage.length != 0){
        let mensagem = localStorage.getItem(input.value);
        resultado.innerHTML = (`${mensagem}`)
    }else{
        alert("Não há mensagens salvas")
    }

}