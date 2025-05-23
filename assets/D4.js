/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(12, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y) {
  let par1 = x;
  let par2 = y;
  if (par1 === par2) {
    return (par1 + par2) * 3;
  } else {
    return par1 + par2;
  }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  let par1 = x;
  let par2 = 19;
  if (par1 <= par2) {
    return par2 - par1;
  } else {
    return (par1 - par2) * 3;
  }
}
console.log(crazyDiff(27));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  // return (n >= 20 && n <= 100) || n === 400
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(frase) {
  // const containEpicode = str.toUpperCase().startsWith("EPICODE")
  // if (containEpicode) {
  //return str;
  // } else {
  //   return "Epicode " + str
  //}

  let list = frase.split(" ");
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "Epicode") {
      return frase;
    }
    return "Epicode " + frase;
  }
}

console.log(epify("ciao bro"));
console.log(epify("Epicode bro"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  //return n % 3 === 0 || n % 7 === 0
  if (num >= 0) {
    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "numero negativo";
  }
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(string) {
  let splitString = string.split("");
  let revString = splitString.reverse();
  let joinString = revString.join("");
  return joinString;
}
console.log(reverseString("hello"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("-------------------");

function upperFirst(str) {
  const word = str.split(" ");
 const arrrowOffNewWords[]

  for (let i = 0; i < Words.length; i++) {
    const word = words[i];
    const firstChar = word.charAt(0);
    const firstCharUpper = firstChar.toUpperCase;
    const remainLetters = word.slice(1);
    const wordCapitalized = firstCharUpper + remainLetters;
    arrrowOffNewWords.push(wordCapitalized);
  }
  return arrrowOffNewWords.join(" ");
}
console.log(upperFirst("ciao bro oggi è una bellissima giornata"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(max) {
  const randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
console.log(giveMeRandom(20));
