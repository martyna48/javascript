let typLiczba = 10 + 10;

// typLiczba = '10' + 20 + 10;
typLiczba = `10 + 10 = ${10 + 10}`;

// // typ boolean
typLiczba = 4 + 4 > 8; //false

// console.log(typLiczba);

let tablica = ['Michał', 'Inna', 'Ola ma kota', 'Martyna', 'Arek'];
// tablica[1] = 'Ola ma czarnego kota';
// tablica[1] = {imie: 'Ola', ma: 'czarnego kota'};

// tablica.reverse();
tablica.unshift('Ooops'); // dodajemy element na początku []
tablica.shift(); // usuwa element na początku []

tablica.push('Ooops'); // dodajemy alement na końcu[]
tablica.pop(); // usuwamy element na końcu []

tablica.slice(1, 3);

tablica.slice(1, 3); // wycina i nie modyfikuje []
// tablica.splice(1, 3); // modyfikuje oryginalną []

tablica.splice(2, 1, 'Daria');

let tablicaLiczba = [1, 36, -28, 10, 0];
tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2) => {
    return liczba1 - liczba2;
});
// tablica.sort();

console.log(tablicaLiczba);

// let przykladowyObjekt = {id: 3, imie: 'Kacper'};
// console.log(przykladowyObjekt.id, przykladowyObjekt.imie);