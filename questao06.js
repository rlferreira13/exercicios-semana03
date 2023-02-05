let tabela = document.querySelector("#tabela");
const playlist = [
    {
        nome: "Listen to your heart",
        cantor:"Roxette"
    },
    {
        nome: "Bloody Mary",
        cantor:"Lady Gaga"
    },
    {
        nome: "Bones",
        cantor:"Imagine Dragons"
    },
    {
        nome: "Sugar honey ice and tea",
        cantor:"Bring me the horizon"
    },
    {
        nome: "Rock you like a hurricane",
        cantor:"Scorpions"
    },
    {
        nome: "Pure/Honey",
        cantor:"Beyoncé"
    },
];
let playlistString = JSON.stringify(playlist);

localStorage.setItem("Melhores hits", playlistString);

let playlistStringRetornada = localStorage.getItem("Melhores hits");

playlistRetornadaeConvertida = JSON.parse(playlistStringRetornada);


for (let i = 0; i < playlistRetornadaeConvertida.length; i++) {
    tabela.innerHTML +=
    `<tr>
    <td>${playlistRetornadaeConvertida[i].nome}</td>
    <td>${playlistRetornadaeConvertida[i].cantor}</td>
    <td><button id=</td>
    </tr>`
}
