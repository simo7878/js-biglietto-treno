//il programma chiede quanti km intente percorrere il passeggero
var kmDaPercorrere = parseInt(prompt('Quanti kilometri intende percorrere?'));
console.log(kmDaPercorrere);
document.getElementById('kmDaPercorrere').innerHTML = 'Quanti kilometri intende percorrere?' + ' ' +  kmDaPercorrere;


//il programma chiede al passegero la sua età
var etaUtente = parseInt(prompt('quanti anni ha?'));
console.log(etaUtente);
document.getElementById('etaUtente').innerHTML = 'Quanti anni ha?' + ' ' +  etaUtente;

//il prezzo del TKT è calcolato in base ai Km percorsi (0.2€ al km)
var kmTktPrice = kmDaPercorrere * 0.21;
console.log(kmTktPrice);


//discounts
// tariffa giovani
var rateYoung = (kmTktPrice * 20 / 100);
console.log(rateYoung);

var priceRateYoung = (kmTktPrice - rateYoung );

if (etaUtente < 18) {
  console .log (priceRateYoung);
  document .getElementById('priceRateYoung').innerHTML = 'Riduzione tariffa giovani &colon; ' + ' ' + priceRateYoung + ' &euro;';
}

//tariffa senior
var rateSenior = (kmTktPrice * 40 / 100);
console.log(rateSenior);

var priceRateSenior = (kmTktPrice - rateSenior );

if (etaUtente > 65) {
  console .log (priceRateSenior);
  document .getElementById('priceRateSenior').innerHTML = 'Riduzione tariffa senior &colon; ' + ' ' + priceRateYoung + ' &euro;';
}
