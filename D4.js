/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let areaRettangolo = l1 * l2
  return areaRettangolo
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y) {
  if (x === y) {
    let risultato = (x + y) * 3
    return risultato
  } else {
    let risultato2 = x + y
    return risultato2
  }
}

console.log(crazySum(5, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b = 19) {
  if (a > b) {
    let differenzaAssolutaX3 = Math.abs(a - b) * 3
    return differenzaAssolutaX3
  } else {
    let differenzaAssoluta = Math.abs(a - b)
    return differenzaAssoluta
  }
}

console.log(crazyDiff(1))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(100))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  if (stringa.slice(0, 7) === 'EPICODE') {
    return stringa
  } else {
    return 'EPICODE ' + stringa
  }
}
console.log(epify('EPICODE ciao'))

console.log(epify('ciaone'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    return 'Bene'
  }
  return 'Non bene'
}

console.log(check3and7(16))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString() {
  let stringa = 'EPICODE'
  return stringa.split('').reverse().join('')
}

console.log(reverseString())
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst() {
  const stringa9 = 'io vengo dalla luna'
  return stringa9.split('').charAt(0).toUpperCase().join('')
}
console.log(upperFirst())
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
