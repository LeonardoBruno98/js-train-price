var age = prompt("Che età ha il passeggero ?");
var chilometri= prompt ( "Quanti chilometri percorrà ?");
var prezzo= chilometri * 0.21;

if (age < 18) {
  alert("Il prezzo è scontato del 20% per gli under 18 : " + (prezzo * 0.8))
}
if (age > 65) {
  alert("Il prezzo è scontato del 40% per gli over 65 : " + (prezzo * 0.8))
 }
else if (age >= 18 && age <= 65) {
  alert("il prezzo per il biglietto intero è: " + prezzo)
}
