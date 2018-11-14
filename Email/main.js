// lista delle mail accreditate
var email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
console.log(email);
//chiedo all'utente la sua email
var login = prompt('Scrivi qui la tua mail');

for (var i = 0; i < email.length; i++) {
  console.log(email[i]);
}
// if (login == email[i]) {
//   document.getElementById('utente').innerHTML = 'Puoi accedere';
// }
// else {
//   document.getElementById('utente').innerHTML = 'controlla di aver scrtto la tua mail correttamente';
// }
