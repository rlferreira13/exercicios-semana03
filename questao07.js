let tabela = document.querySelector("#tabela");
let playlist = [
  {
    nome: "Listen to your heart",
    cantor: "Roxette",
  },
  {
    nome: "Bloody Mary",
    cantor: "Lady Gaga",
  },
  {
    nome: "Bones",
    cantor: "Imagine Dragons",
  },
  {
    nome: "Sugar honey ice and tea",
    cantor: "Bring me the horizon",
  },
  {
    nome: "Rock you like a hurricane",
    cantor: "Scorpions",
  },
  {
    nome: "Pure/Honey",
    cantor: "Beyoncé",
  },
];
function deletarLinha() {
    
    document.querySelectorAll("button").forEach (function(button){
        button.addEventListener("click", function(evento){
            let elemento = evento.target.id
            localStorage.removeItem(elemento)
            atualizarTabela();
        });
    });
}
playlist.forEach((titulo) => {
  localStorage.setItem(titulo.nome, titulo.cantor);
});

function atualizarTabela() {
  tabela.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    chave = localStorage.key(i);
    tabela.innerHTML += `<tr>
    <td>${chave}</td>
    <td>${localStorage.getItem(chave)}</td>
    <td><button id="${chave}" class=excluir onclick="deletarLinha()">Excluir item</button>
    </tr>`;
  }
  deletarLinha();
}
atualizarTabela();
