//giocatore 1 lancia i dadi
var giocatore1 = Math.floor(Math.random() *6 +1);
console.log(giocatore1);
document.getElementById('giocatore1').innerHTML = '1°giocatore hai fatto: ' + giocatore1;
//giocatore 2 lancia i dadi
var giocatore2 = Math.floor(Math.random() *6 +1);
console.log(giocatore2);
document.getElementById('giocatore2').innerHTML = '2°giocatore hai fatto: ' + giocatore2;
//se giocatore 1 vince
if (giocatore1 > giocatore2) {
  console.log('giocatore1 hai vinto');
  document.getElementById('pl1').innerHTML = '1°Giocatore HAI VINTO!';
}
//se giocatore 2 vince
else if (giocatore1 < giocatore2) {
  console.log('giocatore2 hai vinto');
  document.getElementById('pl2').innerHTML = '2°Giocatore HAI VINTO!';
}
// se entrambi i giocatori pareggiano
else if (giocatore1 == giocatore2) {
  console.log('avete pareggiato');
  document.getElementById('pareggio').innerHTML = 'Avete Pareggiato!!!';
}
