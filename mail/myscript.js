// array con mail 
const email = ["info@gmail.com", "example@virgilio.it", "mia@email.com", "nessunaemail@io.it"];

// inserimento email utente 
let mail = prompt("Inserisci email");

let verificata = 0;

for (let i = 0; i < email.length; i++){
    if(mail == email[i]){
        verificata = 1;
    }
};

// messaggio per l'utente 
if (verificata == 1){
    document.getElementById('risposta').innerHTML = "è ";
}else{
    document.getElementById('risposta').innerHTML = "non è ";
}