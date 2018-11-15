// lista delle mail accreditate
var email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
console.log(email);
//chiedo all'utente la sua email
var login = prompt('Scrivi qui la tua mail');
//creo una variabile per gestire i due casi se è stata trovata e se non è stata trovata
var login_effettuato = false;

for (var i = 0; i < email.length; i++) {
  console.log(email[i]);
  console.log(login);
  if (login == email[i]){
    login_effettuato = true;
  }
}
if (login_effettuato == true) {
  document.getElementById('utente').innerHTML = 'Puoi accedere';
}
else {
  document.getElementById('utente').innerHTML = 'controlla di aver scrtto la tua mail correttamente';
}
