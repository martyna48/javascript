let form = document.querySelector('form');
let imieNazwisko = document.getElementById('name');
let email = document.getElementById('email');
let zgoda1 = document.getElementById('zgoda-marketingowa-1');
let zgoda2 = document.getElementById('zgoda-marketingowa-2');
let wszystkieZgody = document.getElementById('wszystkie-zgody');
let wiadomosc = document.querySelector('#wiadomosc');


//  console.log(form, imieNazwisko, email, zgoda1, zgoda2, wszystkieZgody);

function checkBoxes() {
    zgoda1.checked = this.checked;
    zgoda2.checked = this.checked;

    zgoda1.disabled = this.checked;
    zgoda2.disabled = this.checked;

}

wszystkieZgody.onchange = checkBoxes;

// ES6
// form.onsubmit = event => {
//     event.preventDefault();
//     console.log(event);
// }

// ES5
function walidujFormularz(event) {
    if (imieNazwisko.value.trim() === '') {
        event.preventDefault();

        let alert = document.createElement('li');
        alert.innerText = 'Podaj imię!';
        wiadomosc.appendChild(alert);
    };

    if (email.value.trim() === '') {
        event.preventDefault();

        let alert = document.createElement('li');
        alert.innerText = 'Podaj email!';
        wiadomosc.appendChild(alert);
    };

    if (!zgoda1.checked) {
        event.preventDefault();

        let alert = document.createElement('li');
        alert.innerText = 'Nie zaznaczyłeś zgody!';
        wiadomosc.appendChild(alert);
    }

}

form.onsubmit = walidujFormularz;

