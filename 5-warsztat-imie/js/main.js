let form = document.querySelector('form');

form.onsubmit = event => {
    event.preventDefault();


let fname = document.querySelector('input[name="fname"]');
let lname = document.querySelector('input[name="lname"]');

console.log(fname.value, lname.value);

}