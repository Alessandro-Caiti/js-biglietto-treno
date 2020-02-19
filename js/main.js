// quanti chilometri?
// età del passeggero?
// 0.21€ al chilometro prezzo biglietto
// sconto 20% minorenni
// sconto 40% over 65
// risultato quanto costa il biglietto?

var chilometri = parseInt(prompt("Quanti chilometri vuole percorrere?"));
var eta = parseInt(prompt("Quanti anni ha?"));
var costoChilometro = 0.21;
var prezzoStandard = chilometri * costoChilometro;
// console.log(prezzoStandard);
var scontoMinorenne = prezzoStandard - ((prezzoStandard / 100) * 20);
// console.log(scontoMinorenne);
var scontoMaturo = prezzoStandard - ((prezzoStandard / 100) * 40);
// console.log(scontoMaturo);

if (eta < 18) {
    console.log("Ecco il prezzo del suo biglietto scontato del 20% " + scontoMinorenne);
} else if (eta >= 65) {
    console.log("Ecco il prezzo del suo biglietto scontato del 40% " + scontoMaturo);
} else {
    console.log("Ecco il prezzo del suo biglietto " + prezzoStandard);
}
