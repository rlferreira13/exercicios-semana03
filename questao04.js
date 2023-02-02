let cronometro = document.querySelector("#temp");
function atualizaTemp() {
  parseInt((cronometro.innerHTML = cronometro.innerText - 1 + `<br>`));
}
function zerarTemp() {
  parseInt((cronometro.innerHTML = 0));
  clearInterval(interval);
  clearTimeout(timeOut);
}
const timeOut = setTimeout(zerarTemp, 30000);
const interval = setInterval(atualizaTemp, 1000);
