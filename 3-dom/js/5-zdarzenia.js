let header = document.querySelector('header');
let h1 = document.getElementById('main-header');
let parSecond = document.querySelector('.parSecond');
let parFirst = document.querySelector('#parFirst');
let link = document.querySelector('a[href="http://akademia108.pl"]');

link.onclick = event => {
    event.preventDefault();
    console.log(event.target);
}

// console.log(link);



colorChange = () => {
    header.style.color = 'red';
    console.log('click z <header></header>')
}

h1.onclick = event => {
    event.stopPropagation();
    console.log('click z <h1></h1>');
}



ondblclick = () => {
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = ondblclick;



najechanieMyszka = () => {
    // parFirst.style.backgroundColor = "blue";
    parFirst.classList.toggle('toggle');
}

parFirst.addEventListener('click', najechanieMyszka);

// parFirst.removeEventListener('mouseover', najechanieMyszka);

// parFirst.classList.toggle('toggle');