let btnSoma = document.querySelector("#somar");
let btnSubtrai = document.querySelector("#subtrair");
let resultado = document.querySelector("#resultado");


function capturaValores(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
}

btnSoma.onclick = function somar(){
    capturaValores();
    let soma = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerHTML += (`Resultado:${soma}<br>`)
}

btnSubtrai.onclick = function substrair(){
    capturaValores();
    let substracao = parseInt(input1.value) - parseInt(input2.value)
    resultado.innerHTML += (`Resultado:${substracao}<br>`)
}
