let paragraf = document.querySelector('#tekst');
let button = document.querySelector('#dodaj');
let button2 = document.querySelector('#usun');


button.onclick = function() {
    paragraf.innerHTML = "Akademia108";
};

button2.onclick = function() {
    paragraf.innerHTML = "";
};
