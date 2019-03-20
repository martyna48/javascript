let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let phone = document.getElementById("phone");
let button = document.getElementById("btn");


button.onclick = function() {
    console.log(name.value);
    console.log(lastname.value);
    console.log(phone.value);
};