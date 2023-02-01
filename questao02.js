let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btnSoma = document.querySelector("#somar");
let btnSubtrai = document.querySelector("#subtrair");


function capturaValores(){
    let n1 = parseInt(input1.getAttribute('value'));
    let n2 = parseInt(input2.getAttribute('value'));
}
input2.addEventListener("change",capturaValores());

function somar(){
    capturaValores();
    let soma = n1 + n2
    console.log (soma);
}
function substrair(){
}


btnSoma.addEventListener("click",somar);
