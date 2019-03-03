let uzytkownicy = [
    {
        imie: 'Kaja',
        nazwisko: 'Nowak'
    }, {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    }, {
        imie: "Mariusz",
        nazwisko: 'Witkowski'
    }
];

// pętla for

// for (let index = 0; index < uzytkownicy.length; index++) {
//     console.log (uzytkownicy[index].imie);
// }

// // while()
// // let numer = 10;

// // while (numer > 0) {
// //     console.log(numer);
// //     numer--;
// }

// pętla forEach

// uzytkownicy.forEach((element, index) => {
//     console.log(element, index);
// });

// uzytkownicy.forEach((element, index) => {
//     element.kolorOczu = 'niebieski';
// });

uzytkownicy.forEach((element, index) => {
    if ( index < 1) {
        
   if (element.imie === 'Kaja' || element.imie === 'Natalia') {
       element.kolorOczu = 'niebieski';
   } else if (element.imie === 'Karol') {
       element.kolorOczu = 'piwny';
   } else if (element.imie === 'Mariusz') {
       element.kolorOczu = 'zielony';
   }
}
});

// pętla do .. while ()

let numer2 = 5;

do {
    console.log(numer2)
} while (numer2 -- > 3);



console.log(uzytkownicy);

// console.log(uzytkownicy[0].imie, uzytkownicy[1].imie, uzytkownicy[2].imie);
